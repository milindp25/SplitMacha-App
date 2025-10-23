// src/@types/index.ts
/**
 * Global TypeScript type definitions for SplitMacha
 */

// ============================================
// USER TYPES
// ============================================

export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    avatarUrl?: string;
    firebaseUid: string;
    isActive: boolean;
    preferredCurrency: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CreateUserRequest {
    name: string;
    email: string;
    phone?: string;
    avatarUrl?: string;
    firebaseUid: string;
    preferredCurrency?: string;
  }
  
  export interface UpdateUserRequest {
    name?: string;
    phone?: string;
    avatarUrl?: string;
    preferredCurrency?: string;
  }
  
  // ============================================
  // GROUP TYPES
  // ============================================
  
  export interface Group {
    id: string;
    name: string;
    description?: string;
    avatarUrl?: string;
    createdBy: string;
    members: string[];
    memberDetails?: GroupMember[];
    totalExpenses: number;
    currency: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface GroupMember {
    userId: string;
    name: string;
    avatarUrl?: string;
  }
  
  export interface CreateGroupRequest {
    name: string;
    description?: string;
    avatarUrl?: string;
    members: string[];
  }
  
  // ============================================
  // EXPENSE TYPES
  // ============================================
  
  export type SplitMethod = 'EQUAL' | 'EXACT' | 'PERCENTAGE' | 'SHARES';
  export type ExpenseStatus = 'ACTIVE' | 'DELETED';
  
  export interface Expense {
    id: string;
    groupId: string;
    groupName: string;
    description: string;
    amount: number;
    currency: string;
    category: string;
    categoryIcon: string;
    paidBy: string;
    paidByName: string;
    paidByAvatar?: string;
    splitMethod: SplitMethod;
    splitAmong: string[];
    splitDetails: SplitDetail[];
    expenseDate: string;
    notes?: string;
    receiptUrl?: string;
    status: ExpenseStatus;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface SplitDetail {
    userId: string;
    name: string;
    amount: number;
    percentage: number;
  }
  
  export interface CreateExpenseRequest {
    groupId: string;
    description: string;
    amount: number;
    currency: string;
    category: string;
    paidBy: string;
    splitMethod: SplitMethod;
    splitAmong: string[];
    splitDetails?: SplitDetail[];
    expenseDate: string;
    notes?: string;
  }
  
  // ============================================
  // FRIEND TYPES
  // ============================================
  
  export type FriendStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED';
  export type BalanceStatus = 'OWE' | 'OWED' | 'SETTLED';
  
  export interface Friend {
    id: string;
    userId: string;
    friendId: string;
    friendName: string;
    friendEmail: string;
    friendAvatar?: string;
    status: FriendStatus;
    balance: number;
    balanceStatus: BalanceStatus;
    sharedGroups: string[];
    createdAt: string;
    acceptedAt?: string;
    rejectedAt?: string;
  }
  
  // ============================================
  // SETTLEMENT TYPES
  // ============================================
  
  export type PaymentMethod = 'CASH' | 'UPI' | 'BANK_TRANSFER' | 'PAYTM' | 'PHONEPE' | 'GPAY' | 'OTHER';
  export type SettlementStatus = 'COMPLETED' | 'PENDING' | 'CANCELLED';
  
  export interface Settlement {
    id: string;
    groupId: string;
    groupName: string;
    fromUserId: string;
    fromUserName: string;
    fromUserAvatar?: string;
    toUserId: string;
    toUserName: string;
    toUserAvatar?: string;
    amount: number;
    currency: string;
    paymentMethod: PaymentMethod;
    paymentReference?: string;
    notes?: string;
    status: SettlementStatus;
    settledAt?: string;
    createdAt: string;
  }
  
  export interface RecordSettlementRequest {
    groupId: string;
    fromUserId: string;
    toUserId: string;
    amount: number;
    currency: string;
    paymentMethod: PaymentMethod;
    paymentReference?: string;
    notes?: string;
  }
  
  // ============================================
  // CATEGORY TYPES
  // ============================================
  
  export interface ExpenseCategory {
    id: string;
    name: string;
    icon: string;
    color: string;
  }
  
  // ============================================
  // BALANCE TYPES
  // ============================================
  
  export interface Balance {
    userId: string;
    userName: string;
    userAvatar?: string;
    amount: number;
    currency: string;
    balanceStatus: BalanceStatus;
  }
  
  export interface SimplifiedDebt {
    fromUserId: string;
    fromUserName: string;
    fromUserAvatar?: string;
    toUserId: string;
    toUserName: string;
    toUserAvatar?: string;
    amount: number;
    currency: string;
  }
  
  // ============================================
  // ACTIVITY TYPES
  // ============================================
  
  export type ActivityType = 'EXPENSE_ADDED' | 'EXPENSE_UPDATED' | 'EXPENSE_DELETED' | 'SETTLEMENT' | 'GROUP_CREATED' | 'MEMBER_ADDED';
  
  export interface Activity {
    id: string;
    type: ActivityType;
    description: string;
    amount?: number;
    currency?: string;
    timestamp: string;
    metadata: Record<string, any>;
  }
  
  // ============================================
  // NOTIFICATION TYPES
  // ============================================
  
  export interface Notification {
    id: string;
    title: string;
    body: string;
    type: string;
    isRead: boolean;
    createdAt: string;
  }
  
  // ============================================
  // AUTH TYPES
  // ============================================
  
  export interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User | null;
    token: string | null;
    error: string | null;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface SignUpData {
    name: string;
    email: string;
    phone?: string;
    password: string;
  }
  
  // ============================================
  // NAVIGATION TYPES
  // ============================================
  
  export type RootStackParamList = {
    // Auth Stack
    Login: undefined;
    EmailLogin: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    
    // Main Stack
    MainTabs: undefined;
    Home: undefined;
    Friends: undefined;
    Activity: undefined;
    Profile: undefined;
    
    // Other Screens
    AddExpense: { groupId?: string };
    ExpenseDetail: { expenseId: string };
    GroupDetail: { groupId: string };
    SettleUp: { friendId: string };
  };
  
  // ============================================
  // API RESPONSE TYPES
  // ============================================
  
  export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
  }
  
  export interface ApiError {
    error: string;
    message: string;
    statusCode?: number;
  }
  
  // ============================================
  // COMPONENT PROP TYPES
  // ============================================
  
  export interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    fullWidth?: boolean;
  }
  
  export interface InputProps {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'phone' | 'number' | 'currency';
    error?: string;
    disabled?: boolean;
    required?: boolean;
  }
  
  // ============================================
  // UTILITY TYPES
  // ============================================
  
  export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
  
  export type Nullable<T> = T | null;
  
  export type AsyncState<T> = {
    data: Nullable<T>;
    loading: boolean;
    error: Nullable<string>;
  };