# 🚀 SplitMacha Implementation Guide

## ✅ What You Have Now

1. **Phase 1 Complete** (from GitHub):
   - ✅ Splash Screen
   - ✅ Login Screen (UI only)
   - ✅ Email Login Screen (UI only)
   - ✅ Basic navigation
   - ✅ Theme system

2. **Mock API Setup** (New):
   - ✅ Complete mock server using MirageJS
   - ✅ Realistic mock data (users, groups, expenses, friends, settlements)
   - ✅ All backend endpoints mocked
   - ✅ Ready for development without backend

---

## 🎯 Setup Instructions

### Step 1: Install Mock API Dependencies

```bash
cd splitmacha-mobile
yarn add miragejs
yarn add axios  # If not already installed
yarn add @react-native-async-storage/async-storage
```

### Step 2: Copy Mock Files to Your Project

Create this folder structure in your project:

```
src/
└── api/
    └── mocks/
        ├── server.ts          # Mock server setup
        ├── data/
        │   └── index.ts       # Mock data
        └── README.md          # This file
```

Copy the following files I created:
1. `mock-api-server.ts` → `src/api/mocks/server.ts`
2. `mock-data.ts` → `src/api/mocks/data/index.ts`

### Step 3: Enable Mock Server in App.tsx

Update your `App.tsx` (or `App.js`):

```typescript
// App.tsx
import React from 'react';
import { makeServer } from './src/api/mocks/server';
import AppNavigator from './src/navigation/AppNavigator';

// Enable mock server in development
if (__DEV__) {
  makeServer();
  console.log('🔥 Mock API Server is running!');
}

export default function App() {
  return <AppNavigator />;
}
```

### Step 4: Create API Client

Create `src/api/client.ts`:

```typescript
// src/api/client.ts
import axios from 'axios';

// In development, use mock server
// In production, use real backend
const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api/v1'  // MirageJS intercepts this
  : 'https://api.splitmacha.com/api/v1';  // Real backend

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (add auth token)
apiClient.interceptors.request.use(
  async (config) => {
    // TODO: Get token from secure storage
    const token = 'mock-firebase-token';  // For now
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (handle errors)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### Step 5: Create API Repositories

Create `src/api/repositories/`:

```typescript
// src/api/repositories/UserRepository.ts
import apiClient from '../client';

export const UserRepository = {
  // Get current user
  getMe: async () => {
    const response = await apiClient.get('/users/me');
    return response.data;
  },

  // Register new user
  register: async (data: {
    name: string;
    email: string;
    phone?: string;
    firebaseUid: string;
  }) => {
    const response = await apiClient.post('/users', data);
    return response.data;
  },

  // Update user
  updateProfile: async (userId: string, data: any) => {
    const response = await apiClient.put(`/users/${userId}`, data);
    return response.data;
  },

  // Search users
  searchUsers: async (query: string) => {
    const response = await apiClient.get('/users/search', {
      params: { q: query },
    });
    return response.data;
  },
};

// src/api/repositories/GroupRepository.ts
import apiClient from '../client';

export const GroupRepository = {
  // Get all groups
  getAll: async () => {
    const response = await apiClient.get('/groups');
    return response.data;
  },

  // Get group by ID
  getById: async (groupId: string) => {
    const response = await apiClient.get(`/groups/${groupId}`);
    return response.data;
  },

  // Create group
  create: async (data: {
    name: string;
    description?: string;
    avatarUrl?: string;
    members: string[];
  }) => {
    const response = await apiClient.post('/groups', data);
    return response.data;
  },

  // Get group expenses
  getExpenses: async (groupId: string) => {
    const response = await apiClient.get(`/groups/${groupId}/expenses`);
    return response.data;
  },

  // Get group balances
  getBalances: async (groupId: string) => {
    const response = await apiClient.get(`/groups/${groupId}/balances`);
    return response.data;
  },
};

// src/api/repositories/ExpenseRepository.ts
import apiClient from '../client';

export const ExpenseRepository = {
  // Get all expenses
  getAll: async (filters?: {
    groupId?: string;
    userId?: string;
    startDate?: string;
    endDate?: string;
  }) => {
    const response = await apiClient.get('/expenses', { params: filters });
    return response.data;
  },

  // Create expense
  create: async (data: {
    groupId: string;
    description: string;
    amount: number;
    currency: string;
    category: string;
    paidBy: string;
    splitMethod: 'EQUAL' | 'EXACT' | 'PERCENTAGE' | 'SHARES';
    splitAmong: string[];
    expenseDate: string;
    notes?: string;
  }) => {
    const response = await apiClient.post('/expenses', data);
    return response.data;
  },

  // Update expense
  update: async (expenseId: string, data: any) => {
    const response = await apiClient.put(`/expenses/${expenseId}`, data);
    return response.data;
  },

  // Delete expense
  delete: async (expenseId: string) => {
    await apiClient.delete(`/expenses/${expenseId}`);
  },

  // Upload receipt
  uploadReceipt: async (expenseId: string, imageUri: string) => {
    // TODO: Implement multipart form data upload
    const formData = new FormData();
    formData.append('receipt', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'receipt.jpg',
    } as any);

    const response = await apiClient.post(
      `/expenses/${expenseId}/receipts`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },
};

// src/api/repositories/FriendRepository.ts
import apiClient from '../client';

export const FriendRepository = {
  // Get all friends
  getAll: async () => {
    const response = await apiClient.get('/friends');
    return response.data;
  },

  // Send friend request
  sendRequest: async (friendEmail: string) => {
    const response = await apiClient.post('/friends/requests', {
      friendEmail,
    });
    return response.data;
  },

  // Accept friend request
  acceptRequest: async (requestId: string) => {
    const response = await apiClient.put(`/friends/requests/${requestId}/accept`);
    return response.data;
  },

  // Reject friend request
  rejectRequest: async (requestId: string) => {
    const response = await apiClient.put(`/friends/requests/${requestId}/reject`);
    return response.data;
  },

  // Remove friend
  remove: async (friendId: string) => {
    await apiClient.delete(`/friends/${friendId}`);
  },

  // Get friend balance
  getBalance: async (friendId: string) => {
    const response = await apiClient.get(`/friends/${friendId}/balance`);
    return response.data;
  },
};

// src/api/repositories/SettlementRepository.ts
import apiClient from '../client';

export const SettlementRepository = {
  // Record settlement
  record: async (data: {
    groupId: string;
    fromUserId: string;
    toUserId: string;
    amount: number;
    currency: string;
    paymentMethod: string;
    paymentReference?: string;
    notes?: string;
  }) => {
    const response = await apiClient.post('/settlements', data);
    return response.data;
  },

  // Get simplified debts
  getSimplifiedDebts: async () => {
    const response = await apiClient.get('/balances/simplified');
    return response.data;
  },
};
```

### Step 6: Test the Mock API

Create a test screen to verify the mock API works:

```typescript
// src/screens/Test/TestAPIScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { UserRepository, GroupRepository, ExpenseRepository } from '../../api/repositories';

const TestAPIScreen = () => {
  const [status, setStatus] = useState('Testing...');
  const [results, setResults] = useState<any[]>([]);

  const testAPIs = async () => {
    try {
      // Test 1: Get current user
      const user = await UserRepository.getMe();
      setResults(prev => [...prev, { test: 'Get Me', success: true, data: user }]);

      // Test 2: Get all groups
      const groups = await GroupRepository.getAll();
      setResults(prev => [...prev, { test: 'Get Groups', success: true, data: groups }]);

      // Test 3: Get expenses
      const expenses = await ExpenseRepository.getAll();
      setResults(prev => [...prev, { test: 'Get Expenses', success: true, data: expenses }]);

      setStatus('✅ All tests passed!');
    } catch (error) {
      setStatus('❌ Test failed');
      setResults(prev => [...prev, { test: 'Error', success: false, error: error.message }]);
    }
  };

  useEffect(() => {
    testAPIs();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mock API Test</Text>
      <Text style={styles.status}>{status}</Text>

      {results.map((result, index) => (
        <View key={index} style={styles.result}>
          <Text style={styles.testName}>
            {result.success ? '✅' : '❌'} {result.test}
          </Text>
          <Text style={styles.data}>
            {JSON.stringify(result.data || result.error, null, 2)}
          </Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={() => {
        setResults([]);
        testAPIs();
      }}>
        <Text style={styles.buttonText}>Run Tests Again</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  status: {
    fontSize: 18,
    marginBottom: 16,
  },
  result: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  testName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  data: {
    fontSize: 12,
    fontFamily: 'monospace',
  },
  button: {
    backgroundColor: '#FF6B35',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TestAPIScreen;
```

---

## 🎯 What to Build Next

Now that you have the mock API working, here's the priority order:

### **Week 2: Complete Auth Flow**

#### 1. Sign Up Screen
**File:** `src/screens/Auth/SignUpScreen.tsx`

**What to build:**
- Full name input
- Email input (with validation)
- Phone input (with country code selector)
- Password input (with strength indicator)
- Confirm password
- Terms & conditions checkbox
- Sign up button
- "Already have account?" link

**Integration:**
```typescript
import { UserRepository } from '../../api/repositories';

const handleSignUp = async () => {
  try {
    // 1. Create Firebase user (TODO: integrate Firebase)
    // 2. Get Firebase UID
    // 3. Register in backend
    const user = await UserRepository.register({
      name,
      email,
      phone,
      firebaseUid: 'firebase-uid-here',
    });
    
    // 4. Navigate to home
    navigation.navigate('Home');
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};
```

#### 2. Forgot Password Screen
**File:** `src/screens/Auth/ForgotPasswordScreen.tsx`

**What to build:**
- Email input
- Send reset link button
- Success message
- Back to login link

---

### **Week 3: Core Components**

Build reusable components that you'll use everywhere:

#### Button Component
**File:** `src/components/atoms/Button/Button.tsx`

**Variants:**
- Primary (Orange, filled)
- Secondary (White, bordered)
- Outline (Transparent, bordered)
- Text (No border)
- Danger (Red)

#### Input Component
**File:** `src/components/atoms/Input/Input.tsx`

**Types:**
- Text
- Email
- Password (with toggle)
- Phone (with country code)
- Number
- Currency (with ₹ prefix)
- Date picker

#### Card Component
**File:** `src/components/molecules/Card/Card.tsx`

---

### **Week 4-5: Home & Expenses (CRITICAL)**

#### Home Screen
**File:** `src/screens/Home/HomeScreen.tsx`

**Layout:**
```
┌─────────────────────────────────┐
│  Home     [Avatar] [Notif Icon] │
├─────────────────────────────────┤
│  YOU OWE                         │
│  ₹ 4,250.00                      │  ← Red card
│                                  │
│  YOU ARE OWED                    │
│  ₹ 1,790.00                      │  ← Green card
├─────────────────────────────────┤
│  Groups                          │
│  ┌───────────────────────────┐  │
│  │ 🏖️ Friends Trip to Goa   │  │
│  │ You owe ₹2,250            │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ 🏠 Roommates              │  │
│  │ Settled up                │  │
│  └───────────────────────────┘  │
├─────────────────────────────────┤
│         [+ Add Expense] (FAB)    │
└─────────────────────────────────┘
```

**Integration:**
```typescript
import { GroupRepository } from '../../api/repositories';

const [groups, setGroups] = useState([]);

useEffect(() => {
  loadGroups();
}, []);

const loadGroups = async () => {
  const data = await GroupRepository.getAll();
  setGroups(data);
};
```

#### Add Expense Screen (MOST IMPORTANT)
**File:** `src/screens/Expenses/AddExpenseScreen.tsx`

**This is the most critical screen** - it should match Splitwise exactly:

**Layout** (Single screen, NOT wizard):
```
┌────────────────────────────────┐
│  [<]  Add Expense        [✓]   │
├────────────────────────────────┤
│                                │
│         ₹ 500.00              │  ← Large amount input
│                                │
├────────────────────────────────┤
│  📝 Team lunch                │  ← Description
├────────────────────────────────┤
│  Category                      │
│  [🍕] [🎬] [🚗] [🏠] [🛒]    │  ← Category grid
│  [✈️] [⚡] [🏥] [📚] [➕]    │
├────────────────────────────────┤
│  Paid by                       │
│  👤 You ▼                     │  ← Dropdown
├────────────────────────────────┤
│  Split among                   │
│  ✓ You                         │
│  ✓ Rahul                       │  ← Multi-select
│  ✓ Priya                       │
│  □ Amit                        │
├────────────────────────────────┤
│  Split Method                  │
│  [Equal] [Exact] [%] [Shares] │  ← Tabs
│                                │
│  You        ₹166.67           │
│  Rahul      ₹166.67           │  ← Split preview
│  Priya      ₹166.66           │
├────────────────────────────────┤
│  📅 Oct 22, 2025              │
│  🖼️  Add Receipt              │
│  📝 Add notes                 │
└────────────────────────────────┘
```

**Integration:**
```typescript
import { ExpenseRepository } from '../../api/repositories';

const handleSave = async () => {
  try {
    const expense = await ExpenseRepository.create({
      groupId: selectedGroup.id,
      description,
      amount: parseFloat(amount),
      currency: 'INR',
      category,
      paidBy: paidBy.id,
      splitMethod,
      splitAmong: selectedMembers.map(m => m.id),
      expenseDate: date.toISOString().split('T')[0],
      notes,
    });

    // If receipt selected, upload it
    if (receiptUri) {
      await ExpenseRepository.uploadReceipt(expense.id, receiptUri);
    }

    navigation.goBack();
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};
```

---

## 🔥 Key Implementation Tips

### 1. **Splitwise-Style UX**

Match these exact patterns:

**Colors:**
- Red = You owe (debt)
- Green = You're owed (credit)
- Gray = Settled up (zero balance)

**Balance Display:**
```typescript
const getBalanceColor = (amount: number) => {
  if (amount > 0) return '#E74C3C'; // Red - you owe
  if (amount < 0) return '#06A77D'; // Green - you're owed
  return '#95A5A6'; // Gray - settled
};

const getBalanceText = (amount: number) => {
  if (amount > 0) return `You owe ₹${amount.toFixed(2)}`;
  if (amount < 0) return `You are owed ₹${Math.abs(amount).toFixed(2)}`;
  return 'Settled up';
};
```

### 2. **Split Method Calculations**

```typescript
// src/utils/SplitCalculator.ts

export const calculateSplit = (
  amount: number,
  members: string[],
  method: 'EQUAL' | 'EXACT' | 'PERCENTAGE' | 'SHARES',
  values?: Record<string, number>
) => {
  switch (method) {
    case 'EQUAL':
      const equalAmount = amount / members.length;
      return members.map(id => ({
        userId: id,
        amount: parseFloat(equalAmount.toFixed(2)),
        percentage: 100 / members.length,
      }));

    case 'EXACT':
      return members.map(id => ({
        userId: id,
        amount: values[id] || 0,
        percentage: (values[id] / amount) * 100,
      }));

    case 'PERCENTAGE':
      return members.map(id => ({
        userId: id,
        amount: (amount * values[id]) / 100,
        percentage: values[id],
      }));

    case 'SHARES':
      const totalShares = Object.values(values).reduce((a, b) => a + b, 0);
      return members.map(id => ({
        userId: id,
        amount: (amount * values[id]) / totalShares,
        percentage: (values[id] / totalShares) * 100,
      }));
  }
};
```

### 3. **Currency Formatting**

```typescript
// src/utils/currency.ts

export const formatCurrency = (amount: number, currency: string = 'INR'): string => {
  if (currency === 'INR') {
    return `₹${amount.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
  
  return `${currency} ${amount.toFixed(2)}`;
};
```

### 4. **Date Formatting**

```typescript
// src/utils/date.ts
import { format, formatDistanceToNow } from 'date-fns';

export const formatExpenseDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  
  // If today, show "Today"
  if (date.toDateString() === now.toDateString()) {
    return 'Today';
  }
  
  // If yesterday, show "Yesterday"
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  }
  
  // If this week, show day name
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  if (date > weekAgo) {
    return format(date, 'EEEE'); // Monday, Tuesday, etc.
  }
  
  // Otherwise show date
  return format(date, 'MMM d, yyyy'); // Oct 22, 2025
};
```

---

## 🚀 Ready to Start?

You now have:
1. ✅ Complete mock API (no backend needed)
2. ✅ Mock data (realistic scenarios)
3. ✅ API repositories (ready to use)
4. ✅ Implementation roadmap
5. ✅ Code examples

**Next steps:**

1. Copy the mock files to your project
2. Install dependencies (`yarn add miragejs axios`)
3. Enable mock server in App.tsx
4. Test with the TestAPIScreen
5. Start building the Sign Up screen
6. Then build the Add Expense screen (most important!)

Let me know when you're ready, and I'll help you build each screen step by step! 🎯
