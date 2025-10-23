# 🚀 SplitMacha Mobile - Complete Implementation Roadmap

## 📊 Current Status Assessment

### ✅ Phase 1 Complete (Week 1-2)
- [x] Project setup with Expo & TypeScript
- [x] Theme system (colors, typography, spacing)
- [x] Basic navigation (React Navigation)
- [x] Splash Screen (animated)
- [x] Login Screen (UI only)
- [x] Email Login Screen (UI only)

### 🎯 What's Missing (Phase 2-10)

Based on your current code and the implementation instructions, here's what we need to build:

---

## 📁 Required Folder Structure

```
src/
├── @types/              # ❌ NOT CREATED
├── api/                 # ❌ NOT CREATED
│   ├── base/
│   ├── interceptors/
│   ├── repositories/
│   └── mocks/          # 🆕 For mock API responses
├── assets/             # ❌ NOT CREATED
│   ├── fonts/
│   ├── images/
│   └── icons/
├── components/         # ⚠️ EMPTY (Phase 3)
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── config/            # ❌ NOT CREATED
├── constants/         # ❌ NOT CREATED
├── contexts/          # ❌ NOT CREATED
├── hooks/             # ❌ NOT CREATED
├── navigation/        # ✅ PARTIAL (only basic stack)
├── screens/           # ⚠️ PARTIAL (3/20+ screens)
│   ├── Auth/
│   ├── Home/
│   ├── Friends/
│   ├── Activity/
│   └── Profile/
├── services/          # ❌ NOT CREATED
├── store/             # ❌ NOT CREATED (Redux/Zustand)
├── theme/             # ✅ DONE
├── utils/             # ❌ NOT CREATED
└── validators/        # ❌ NOT CREATED
```

---

## 🎯 10-Week Implementation Plan (Detailed)

### **Week 2: Auth Completion + API Mock Setup** (NEXT)

#### Day 1-2: Sign Up Screen
```typescript
src/screens/Auth/SignUpScreen.tsx
- Full name input
- Email input (with validation)
- Phone input (with country code)
- Password input (with strength indicator)
- Confirm password
- Terms & conditions checkbox
- Sign up button
- Already have account link
```

#### Day 3: Forgot Password Screen
```typescript
src/screens/Auth/ForgotPasswordScreen.tsx
- Email input
- Send reset link button
- Back to login link
```

#### Day 4-5: API Mock Setup
```typescript
src/api/mocks/
├── handlers.ts         # MSW-style handlers
├── data/              # Mock data
│   ├── users.ts
│   ├── groups.ts
│   ├── expenses.ts
│   └── friends.ts
└── server.ts          # Mock server setup
```

**Key Package:** Use `miragejs` (better for React Native than MSW)
```bash
yarn add miragejs
```

---

### **Week 3: Core Components Library**

#### Atoms (Day 1-3)
```
src/components/atoms/
├── Button/
│   ├── Button.tsx
│   ├── Button.styles.ts
│   ├── Button.types.ts
│   └── index.ts
├── Input/
│   ├── Input.tsx
│   ├── Input.styles.ts
│   ├── Input.types.ts
│   └── index.ts
├── Avatar/
├── Badge/
├── Icon/
└── Checkbox/
```

**Button Variants:**
- Primary (Orange)
- Secondary (White with border)
- Outline
- Text
- Danger
- Disabled

**Input Types:**
- Text
- Email
- Password (with toggle)
- Phone (with country code)
- Number
- Currency
- Date picker

#### Molecules (Day 4-5)
```
src/components/molecules/
├── Card/
├── BottomSheet/
├── ListItem/
├── TabBar/
├── EmptyState/
├── LoadingState/
└── ErrorState/
```

---

### **Week 4: Home & Groups**

#### Day 1-2: Home Screen
```typescript
src/screens/Home/HomeScreen.tsx

Components needed:
- Balance summary cards (You owe / You're owed)
- Recent activity list
- Quick add expense FAB
- Pull to refresh
```

#### Day 3-4: Group List & Detail
```typescript
src/screens/Home/GroupListScreen.tsx
src/screens/Home/GroupDetailScreen.tsx

Features:
- Group avatar
- Total balance per group
- Member list
- Expense list
- Add expense button
- Group settings
```

#### Day 5: Group Settings
```typescript
src/screens/Home/GroupSettingsScreen.tsx

Features:
- Edit group name
- Change group avatar
- Add/remove members
- Leave group
- Delete group (admin only)
```

---

### **Week 5: Expenses (Most Complex)**

#### Day 1-3: Add Expense Screen (Splitwise Style)
```typescript
src/screens/Expenses/AddExpenseScreen.tsx

Layout (Single Screen - NOT Wizard):
┌────────────────────────────────┐
│  [Back]  Add Expense     [✓]   │
├────────────────────────────────┤
│                                │
│        ₹ 500.00               │  ← Large, centered amount
│                                │
├────────────────────────────────┤
│  📝 Description                │  ← Text input
│     "Team lunch"               │
├────────────────────────────────┤
│  🍕 Category                   │  ← Grid of emoji categories
│  [🍕] [🎬] [🚗] [🏠] [🎉]      │
│  [✈️] [🛒] [🏥] [📚] [➕]      │
├────────────────────────────────┤
│  👤 Paid by                    │  ← Dropdown
│     You ▼                      │
├────────────────────────────────┤
│  👥 Split among                │  ← Multi-select list
│  ✓ You                         │
│  ✓ Rahul                       │
│  ✓ Priya                       │
│  □ Amit                        │
├────────────────────────────────┤
│  Split Method                  │  ← Segmented control
│  [Equal] [Exact] [%] [Shares]  │
├────────────────────────────────┤
│  📅 Date: Oct 22, 2025         │
│  🖼️  Add Receipt (Optional)    │
│  📝 Notes (Optional)           │
└────────────────────────────────┘
```

**4 Split Methods:**
1. **Equal** - Divide equally among selected people
2. **Exact Amounts** - Specify exact amount for each person
3. **Percentages** - Specify percentage for each person
4. **Shares** - Specify shares (like 2:1:1)

#### Day 4-5: Expense Detail & Edit
```typescript
src/screens/Expenses/ExpenseDetailScreen.tsx
src/screens/Expenses/EditExpenseScreen.tsx

Features:
- View expense details
- View split breakdown
- View receipt (if uploaded)
- Edit expense (only by creator)
- Delete expense (only by creator)
- Comment on expense
```

---

### **Week 6: Friends & Contacts**

#### Day 1-2: Friends Screen
```typescript
src/screens/Friends/FriendsScreen.tsx

Features:
- List of friends
- Search friends
- Friend balances (red/green)
- Add friend button
- Friend requests tab
```

#### Day 3: Add Friend
```typescript
src/screens/Friends/AddFriendScreen.tsx

Methods:
- Search by email/phone
- Scan QR code
- Sync contacts
- Generate QR code to share
```

#### Day 4-5: Contact Sync
```typescript
src/services/ContactSyncService.ts

Features:
- Request contact permission
- Sync contacts to backend
- Match contacts with registered users
- Invite non-registered contacts (SMS/WhatsApp)
```

**Important:** Handle iOS/Android permissions separately
```typescript
import * as Contacts from 'expo-contacts';

const { status } = await Contacts.requestPermissionsAsync();
if (status === 'granted') {
  const { data } = await Contacts.getContactsAsync({
    fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
  });
}
```

---

### **Week 7: Receipts & Settlements**

#### Day 1-2: Image Handling
```typescript
src/services/ImageService.ts

Features:
- Take photo (Camera)
- Select from gallery
- Compress image (max 1200px)
- Convert to JPEG 80%
- Upload to backend
```

**Packages needed:**
```bash
yarn add expo-image-picker expo-image-manipulator
```

#### Day 3-4: Simplified Debts
```typescript
src/screens/Home/SimplifiedDebtsScreen.tsx

Algorithm:
- Calculate who owes whom
- Simplify debts (minimize transactions)
- Show as directed graph or list
- "Settle Up" button for each debt
```

#### Day 5: Settle Up Flow
```typescript
src/screens/Settlements/SettleUpScreen.tsx

Flow:
1. Select debt to settle
2. Choose payment method (Cash/UPI/Bank)
3. Enter payment reference (optional)
4. Add note (optional)
5. Record settlement
6. Update balances
```

---

### **Week 8: Activity & Profile**

#### Day 1-2: Activity Timeline
```typescript
src/screens/Activity/ActivityScreen.tsx

Features:
- Chronological feed of all activities
- Filter by type (expense/settlement/group)
- Filter by date range
- Infinite scroll / pagination
```

#### Day 3: Notifications
```typescript
src/screens/Notifications/NotificationsScreen.tsx
src/services/NotificationService.ts

Features:
- Push notification setup (FCM)
- In-app notification list
- Notification preferences
- Mark as read
```

#### Day 4-5: Profile & Settings
```typescript
src/screens/Profile/ProfileScreen.tsx
src/screens/Profile/EditProfileScreen.tsx
src/screens/Profile/SettingsScreen.tsx

Features:
- User avatar
- Name, email, phone
- Total expenses/settlements
- Settings (notifications, currency, language)
- Privacy policy
- Terms of service
- Logout
```

---

### **Week 9: Polish & Performance**

#### Day 1-2: Animations
```typescript
src/animations/

Use:
- react-native-reanimated (better performance)
- Animated API (for simple animations)

Add to:
- Screen transitions
- List item animations
- Loading states
- Success/error feedback
- Pull to refresh
```

#### Day 3: Error Handling
```typescript
src/utils/ErrorHandler.ts
src/components/ErrorBoundary.tsx

Features:
- Global error boundary
- API error handling
- Offline mode detection
- Retry mechanism
- User-friendly error messages
```

#### Day 4: Offline Mode
```typescript
src/services/OfflineService.ts
src/store/slices/offlineSlice.ts

Features:
- Detect network status
- Queue API requests when offline
- Sync when back online
- Show offline indicator
- Cache important data (AsyncStorage/MMKV)
```

#### Day 5: Performance Optimization
```
- Use React.memo() for expensive components
- Use useMemo() / useCallback()
- Optimize FlatList (windowSize, removeClippedSubviews)
- Lazy load images
- Code splitting (if possible)
- Profile with Flipper
```

---

### **Week 10: Testing & Release**

#### Day 1-2: Unit Tests
```typescript
__tests__/
├── components/
│   ├── Button.test.tsx
│   ├── Input.test.tsx
│   └── ExpenseCard.test.tsx
├── hooks/
│   ├── useAuth.test.ts
│   └── useExpenses.test.ts
├── utils/
│   ├── currency.test.ts
│   ├── date.test.ts
│   └── validation.test.ts
└── services/
    └── SplitCalculator.test.ts
```

**Use:** Jest + React Native Testing Library

#### Day 3: Integration Tests
```typescript
e2e/
├── auth.e2e.ts
├── expense.e2e.ts
└── settlement.e2e.ts
```

**Use:** Detox (for E2E testing)

#### Day 4: Device Testing
```
Test on:
- iPhone (iOS 15+)
- Android (API 28+)
- Different screen sizes
- Different OS versions
- Dark mode
- Landscape orientation
```

#### Day 5: App Store Preparation
```
Assets needed:
- App icon (1024x1024)
- Launch screen
- Screenshots (5.5", 6.5" iPhone + Tablet)
- App description
- Privacy policy
- Support URL

Build:
- eas build --platform ios --profile production
- eas build --platform android --profile production
```

---

## 🔥 Priority Implementation Order

If you want to launch faster, build in this order:

1. **✅ Auth (Week 2)** - Must have
2. **✅ Core Components (Week 3)** - Must have
3. **✅ Add Expense (Week 5, Day 1-3)** - CRITICAL
4. **✅ Groups (Week 4)** - Must have
5. **✅ Friends (Week 6, Day 1-3)** - Must have
6. **✅ Balance View (Week 4, Day 1)** - Must have
7. **⚠️ Settlements (Week 7, Day 3-5)** - Important
8. **⚠️ Activity Feed (Week 8, Day 1)** - Important
9. **⚠️ Profile (Week 8, Day 4)** - Important
10. **➕ Contact Sync (Week 6, Day 4-5)** - Nice to have
11. **➕ Receipts (Week 7, Day 1-2)** - Nice to have
12. **➕ Notifications (Week 8, Day 3)** - Nice to have

---

## 📦 Complete Package.json

```json
{
  "name": "splitmacha-mobile",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint .",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\""
  },
  "dependencies": {
    "expo": "~52.0.0",
    "react": "18.3.1",
    "react-native": "0.76.5",
    
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/stack": "^6.3.20",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "@react-navigation/native-stack": "^6.9.17",
    
    "react-native-screens": "~3.35.0",
    "react-native-safe-area-context": "4.12.0",
    "react-native-gesture-handler": "~2.20.2",
    
    "expo-linear-gradient": "~14.0.1",
    "expo-image-picker": "~16.0.3",
    "expo-image-manipulator": "~13.0.2",
    "expo-camera": "~16.0.10",
    "expo-contacts": "~14.0.1",
    "expo-notifications": "~0.29.13",
    "expo-secure-store": "~14.0.0",
    "expo-haptics": "~14.0.0",
    "expo-constants": "~17.0.3",
    
    "@react-native-firebase/app": "^20.5.0",
    "@react-native-firebase/auth": "^20.5.0",
    "@react-native-firebase/messaging": "^20.5.0",
    
    "@reduxjs/toolkit": "^2.0.1",
    "react-redux": "^9.0.4",
    
    "axios": "^1.6.2",
    "miragejs": "^0.1.48",
    
    "react-native-reanimated": "~3.16.1",
    "@react-native-community/netinfo": "11.4.1",
    "@react-native-async-storage/async-storage": "2.0.0",
    
    "date-fns": "^3.0.6",
    "zod": "^3.22.4",
    "react-hook-form": "^7.49.2"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@types/react": "~18.3.12",
    "@types/react-native": "~0.73.0",
    "typescript": "~5.3.3",
    
    "@testing-library/react-native": "^12.4.2",
    "@testing-library/jest-native": "^5.4.3",
    "jest": "^29.7.0",
    "jest-expo": "^52.0.0",
    
    "eslint": "^8.56.0",
    "prettier": "^3.1.1",
    
    "@typescript-eslint/eslint-plugin": "^6.16.0",
    "@typescript-eslint/parser": "^6.16.0"
  }
}
```

---

## 🎯 Next Steps

1. **Review this roadmap**
2. **Set up mock API (Week 2, Day 4-5)**
3. **Build Sign Up screen (Week 2, Day 1-2)**
4. **Start component library (Week 3)**

Ready to start implementing? Let me know which part you'd like to tackle first! 🚀
