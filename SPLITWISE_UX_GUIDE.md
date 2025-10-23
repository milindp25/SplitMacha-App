# 🎨 Splitwise UX Reference Guide

## Why Copy Splitwise UX?

Splitwise has **15+ years** of UX refinement and **millions of users**. Their patterns are:
- ✅ Battle-tested
- ✅ Intuitive
- ✅ Efficient
- ✅ Familiar to users

**Key principle:** Make transitioning to SplitMacha **effortless** for Splitwise users.

---

## 📱 Core UX Patterns to Copy

### 1. **Balance Display (Most Important)**

#### ✅ DO (Splitwise Style):
```
┌──────────────────────────┐
│  YOU OWE                 │
│  ₹4,250.00              │  ← RED, Large, Bold
│  ───────────────────────│
│  Rahul  ₹3,000          │
│  Priya  ₹1,250          │
└──────────────────────────┘

┌──────────────────────────┐
│  YOU ARE OWED            │
│  ₹1,790.00              │  ← GREEN, Large, Bold
│  ───────────────────────│
│  Amit   ₹1,200          │
│  Sneha  ₹590            │
└──────────────────────────┘
```

**Rules:**
- Red = You owe (negative balance)
- Green = You're owed (positive balance)
- Always show total at top in LARGE font
- List breakdown below
- Use white cards with subtle shadows

#### ❌ DON'T:
```
❌ Total Balance: ₹2,460 (confusing - is it owed or owe?)
❌ Using blue for balances (not color-coded)
❌ Hiding the breakdown (users want to see who owes what)
```

---

### 2. **Add Expense Screen (Single Page)**

#### ✅ DO (Splitwise Style):

**Layout:** Everything on ONE scrollable screen

```
┌────────────────────────────────┐
│  [<]  Add Expense        [✓]   │ ← Back & Save buttons
├────────────────────────────────┤
│                                │
│         ₹ 500.00              │ ← CENTERED, LARGE amount
│         ──────────            │
│                                │
├────────────────────────────────┤
│  📝 Description                │
│  ┌──────────────────────────┐ │
│  │ Team lunch               │ │ ← Text input
│  └──────────────────────────┘ │
├────────────────────────────────┤
│  Category                      │
│  ┌─────┬─────┬─────┬─────┐   │
│  │ 🍕  │ 🎬  │ 🚗  │ 🏠  │   │ ← Grid of emoji icons
│  ├─────┼─────┼─────┼─────┤   │
│  │ 🛒  │ ✈️  │ ⚡  │ 🏥  │   │
│  └─────┴─────┴─────┴─────┘   │
├────────────────────────────────┤
│  Paid by                       │
│  [👤 You            ▼]        │ ← Dropdown selector
├────────────────────────────────┤
│  Split among                   │
│  ┌──────────────────────────┐ │
│  │ ✓ You                    │ │
│  │ ✓ Rahul                  │ │ ← Multi-select list
│  │ ✓ Priya                  │ │
│  │ □ Amit                   │ │
│  └──────────────────────────┘ │
├────────────────────────────────┤
│  Split Method                  │
│  ┌──────┬──────┬────┬──────┐ │
│  │Equal │Exact │  % │Shares│ │ ← Tabs
│  └──────┴──────┴────┴──────┘ │
│                                │
│  Split Preview:                │
│  You        ₹166.67           │
│  Rahul      ₹166.67           │ ← Real-time preview
│  Priya      ₹166.66           │
│  ─────────────────────────    │
│  Total      ₹500.00           │
├────────────────────────────────┤
│  📅 Date: Oct 22, 2025        │ ← Date picker
│  🖼️  Add Receipt (Optional)    │ ← Image picker
│  📝 Add Notes (Optional)       │ ← Text area
└────────────────────────────────┘
```

**Key Features:**
1. **Amount first** - Large, centered, editable
2. **Category grid** - Visual emoji icons (no text)
3. **Real-time split preview** - Shows exact amounts
4. **Single screen** - No wizard, no multiple steps
5. **Optional fields last** - Receipt, notes at bottom

#### ❌ DON'T:
```
❌ Multi-step wizard (too many screens)
❌ Amount at bottom (hard to see)
❌ Text-only categories (not visual)
❌ No split preview (users can't verify)
❌ Separate screen for each field
```

---

### 3. **Group List**

#### ✅ DO (Splitwise Style):

```
┌────────────────────────────────┐
│  Groups                   [+]  │ ← Add group button
├────────────────────────────────┤
│  ┌──────────────────────────┐ │
│  │ 🏖️  Friends Trip to Goa  │ │ ← Group avatar + name
│  │     You owe ₹2,250       │ │ ← Balance (RED if owe)
│  └──────────────────────────┘ │
│  ┌──────────────────────────┐ │
│  │ 🏠  Roommates             │ │
│  │     Settled up           │ │ ← GRAY if zero
│  └──────────────────────────┘ │
│  ┌──────────────────────────┐ │
│  │ 🍽️  Office Lunch Club    │ │
│  │     You are owed ₹600    │ │ ← GREEN if owed
│  └──────────────────────────┘ │
└────────────────────────────────┘
```

**Rules:**
- Show balance status (color-coded)
- Emoji/image avatars
- Large tap target (whole card)
- Sorted by: Active groups first, then recent activity

---

### 4. **Expense Detail**

#### ✅ DO (Splitwise Style):

```
┌────────────────────────────────┐
│  [<]  Team lunch         [⋯]  │ ← Back & More menu
├────────────────────────────────┤
│                                │
│         ₹500.00                │ ← Large amount
│         Food & Drinks          │ ← Category
│         Oct 22, 2025           │ ← Date
│                                │
├────────────────────────────────┤
│  Paid by                       │
│  👤 Rahul Kumar                │
│                                │
│  Split equally                 │
│  👤 You         ₹166.67        │
│  👤 Rahul       ₹166.67        │
│  👤 Priya       ₹166.66        │
├────────────────────────────────┤
│  [View Receipt]                │ ← If receipt exists
│                                │
│  Notes:                        │
│  "Amazing prawn curry!"        │
├────────────────────────────────┤
│  Created by Rahul              │
│  Oct 22, 2025 at 8:00 PM       │
└────────────────────────────────┘
```

**Features:**
- Clear payment breakdown
- Show who paid
- Show split method
- Receipt thumbnail (if exists)
- Edit button (⋯) for creator only

---

### 5. **Activity Feed**

#### ✅ DO (Splitwise Style):

```
┌────────────────────────────────┐
│  Activity                      │
├────────────────────────────────┤
│  Today                         │
│  ┌──────────────────────────┐ │
│  │ 👤 Rahul added            │ │
│  │    "Team lunch"           │ │ ← Activity description
│  │    in Office Lunch Club   │ │
│  │                           │ │
│  │    You owe ₹166.67       │ │ ← Your share
│  │    8:00 PM               │ │ ← Time
│  └──────────────────────────┘ │
│                                │
│  Yesterday                     │ ← Date separators
│  ┌──────────────────────────┐ │
│  │ 💰 Priya settled up       │ │
│  │    ₹2,000 with you        │ │
│  │    6:30 PM               │ │
│  └──────────────────────────┘ │
│                                │
│  Oct 20                        │
│  ┌──────────────────────────┐ │
│  │ 👤 You added              │ │
│  │    "Water sports"         │ │
│  │    in Friends Trip        │ │
│  │                           │ │
│  │    You are owed ₹750     │ │
│  │    2:00 PM               │ │
│  └──────────────────────────┘ │
└────────────────────────────────┘
```

**Rules:**
- Reverse chronological (newest first)
- Group by date (Today, Yesterday, dates)
- Show: Who, What, Where, When, How much
- Color-code balances (red/green)
- Infinite scroll / pagination

---

### 6. **Friends List**

#### ✅ DO (Splitwise Style):

```
┌────────────────────────────────┐
│  Friends              [Search] │
├────────────────────────────────┤
│  Requests (2)         [View]   │ ← Friend requests badge
├────────────────────────────────┤
│  ┌──────────────────────────┐ │
│  │ 👤 Rahul Kumar           │ │
│  │    You owe ₹4,250        │ │ ← RED
│  │    3 groups              │ │
│  └──────────────────────────┘ │
│  ┌──────────────────────────┐ │
│  │ 👤 Priya Sharma          │ │
│  │    You are owed ₹1,250   │ │ ← GREEN
│  │    2 groups              │ │
│  └──────────────────────────┘ │
│  ┌──────────────────────────┐ │
│  │ 👤 Amit Patel            │ │
│  │    Settled up            │ │ ← GRAY
│  │    1 group               │ │
│  └──────────────────────────┘ │
└────────────────────────────────┘
```

**Features:**
- Show balance prominently
- Show number of shared groups
- Sort by: Unsettled first, then recent activity
- Friend requests badge at top
- Search bar for finding friends

---

### 7. **Settle Up Flow**

#### ✅ DO (Splitwise Style):

**Step 1: Simplified Debts Screen**
```
┌────────────────────────────────┐
│  Simplified Debts              │
├────────────────────────────────┤
│  ┌──────────────────────────┐ │
│  │ You owe Rahul            │ │
│  │ ₹4,250.00                │ │ ← Large, RED
│  │                          │ │
│  │ [Settle Up]              │ │ ← Primary button
│  └──────────────────────────┘ │
│  ┌──────────────────────────┐ │
│  │ Priya owes You           │ │
│  │ ₹1,250.00                │ │ ← Large, GREEN
│  │                          │ │
│  │ [Record Payment]         │ │
│  └──────────────────────────┘ │
└────────────────────────────────┘
```

**Step 2: Record Settlement Modal**
```
┌────────────────────────────────┐
│  Record Payment                │
│                          [✕]   │ ← Close button
├────────────────────────────────┤
│  Amount                        │
│  ┌──────────────────────────┐ │
│  │ ₹4,250.00                │ │ ← Pre-filled
│  └──────────────────────────┘ │
│                                │
│  Payment Method                │
│  ┌────┬────┬────┬────┬────┐  │
│  │Cash│UPI │Bank│PTM │GPay│  │ ← Icon grid
│  └────┴────┴────┴────┴────┘  │
│                                │
│  Reference (Optional)          │
│  ┌──────────────────────────┐ │
│  │ TXN123456                │ │
│  └──────────────────────────┘ │
│                                │
│  Notes (Optional)              │
│  ┌──────────────────────────┐ │
│  │ Settled Goa trip         │ │
│  └──────────────────────────┘ │
│                                │
│  [Record Payment]              │ ← Save button
└────────────────────────────────┘
```

**Rules:**
- Show simplified debts (minimize transactions)
- Pre-fill amount
- Payment method icons (visual)
- Quick and easy flow (3 taps: Settle Up → Select Method → Record)

---

## 🎨 Design System (Match Splitwise)

### Colors

```typescript
const colors = {
  // Primary
  primary: '#FF6B35',      // Orange (matches your theme)
  primaryDark: '#E85A28',
  primaryLight: '#FF8555',
  
  // Semantic Colors
  success: '#06A77D',      // Green (you're owed)
  error: '#E74C3C',        // Red (you owe)
  warning: '#F7B801',      // Amber
  info: '#3498DB',         // Blue
  
  // Neutral
  neutral: {
    50: '#F8F9FA',
    100: '#F1F3F5',
    200: '#E9ECEF',
    300: '#DEE2E6',
    400: '#CED4DA',
    500: '#95A5A6',       // Settled up
    600: '#7F8C8D',
    700: '#495057',
    800: '#343A40',
    900: '#212529',
  },
  
  // Background
  background: '#FFFFFF',
  cardBackground: '#FFFFFF',
  
  // Text
  textPrimary: '#2D3436',
  textSecondary: '#636E72',
  textTertiary: '#95A5A6',
  textInverse: '#FFFFFF',
};
```

### Typography

```typescript
const typography = {
  // Amount displays
  amountLarge: {
    fontSize: 42,
    fontWeight: '700',
    letterSpacing: -1,
  },
  amountMedium: {
    fontSize: 28,
    fontWeight: '600',
  },
  amountSmall: {
    fontSize: 18,
    fontWeight: '600',
  },
  
  // Headers
  h1: {
    fontSize: 32,
    fontWeight: '700',
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
  },
  
  // Body
  body: {
    fontSize: 16,
    fontWeight: '400',
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400',
  },
  
  // Caption
  caption: {
    fontSize: 12,
    fontWeight: '400',
  },
};
```

### Spacing

```typescript
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};
```

### Border Radius

```typescript
const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999, // For circles
};
```

### Shadows

```typescript
const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
};
```

---

## 📐 Component Patterns

### Balance Card Component

```typescript
// src/components/organisms/BalanceCard/BalanceCard.tsx
interface BalanceCardProps {
  type: 'OWE' | 'OWED';
  amount: number;
  breakdown: Array<{
    userId: string;
    name: string;
    avatar: string;
    amount: number;
  }>;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ type, amount, breakdown }) => {
  const isOwe = type === 'OWE';
  const color = isOwe ? colors.error : colors.success;
  const title = isOwe ? 'YOU OWE' : 'YOU ARE OWED';

  return (
    <Card style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.amount, { color }]}>
        {formatCurrency(amount)}
      </Text>
      
      <View style={styles.divider} />
      
      {breakdown.map(item => (
        <View key={item.userId} style={styles.breakdownItem}>
          <View style={styles.userInfo}>
            <Avatar source={{ uri: item.avatar }} size={32} />
            <Text style={styles.userName}>{item.name}</Text>
          </View>
          <Text style={[styles.breakdownAmount, { color }]}>
            {formatCurrency(item.amount)}
          </Text>
        </View>
      ))}
    </Card>
  );
};
```

### Expense Card Component

```typescript
// src/components/organisms/ExpenseCard/ExpenseCard.tsx
interface ExpenseCardProps {
  expense: Expense;
  onPress: () => void;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense, onPress }) => {
  const userShare = expense.splitDetails.find(s => s.userId === currentUserId);
  const isUserPayer = expense.paidBy === currentUserId;
  
  // Calculate balance change for user
  const balanceChange = isUserPayer
    ? expense.amount - userShare.amount  // Paid more than share
    : -userShare.amount;                 // Owes their share
  
  const balanceColor = balanceChange > 0 ? colors.success : colors.error;

  return (
    <Card onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.categoryIcon}>{expense.categoryIcon}</Text>
        <View style={styles.headerText}>
          <Text style={styles.description}>{expense.description}</Text>
          <Text style={styles.paidBy}>
            {expense.paidByName} paid {formatCurrency(expense.amount)}
          </Text>
        </View>
        <Text style={[styles.userShare, { color: balanceColor }]}>
          {balanceChange > 0 ? '+' : ''}
          {formatCurrency(Math.abs(balanceChange))}
        </Text>
      </View>
      
      <Text style={styles.date}>
        {formatExpenseDate(expense.expenseDate)}
      </Text>
    </Card>
  );
};
```

---

## ✅ UX Checklist

Use this checklist to ensure you're matching Splitwise:

### Home Screen
- [ ] Balance cards show total in LARGE font
- [ ] Red for "you owe", green for "you're owed"
- [ ] White cards with subtle shadows
- [ ] Groups list below balances
- [ ] FAB for quick add expense
- [ ] Pull to refresh

### Add Expense
- [ ] Single screen (not wizard)
- [ ] Amount input centered and LARGE
- [ ] Category grid with emoji icons
- [ ] Real-time split preview
- [ ] Save button in header (not bottom)
- [ ] All fields on one scrollable screen

### Expense Detail
- [ ] Large amount at top
- [ ] Clear "paid by" indication
- [ ] Split breakdown visible
- [ ] Receipt thumbnail if exists
- [ ] Edit button (⋯) for creator

### Activity Feed
- [ ] Reverse chronological order
- [ ] Date separators (Today, Yesterday, dates)
- [ ] Color-coded balances
- [ ] Clear activity descriptions
- [ ] Infinite scroll

### Friends List
- [ ] Balance prominently displayed
- [ ] Color-coded (red/green/gray)
- [ ] Shared groups count
- [ ] Friend requests badge
- [ ] Search functionality

### Settle Up
- [ ] Simplified debts view
- [ ] Pre-filled amounts
- [ ] Payment method icons
- [ ] Quick 3-tap flow
- [ ] Success confirmation

---

## 🎯 Key Takeaways

1. **Color Coding is Critical**
   - Red = Debt (you owe)
   - Green = Credit (you're owed)
   - Gray = Settled
   - Use consistently everywhere

2. **Single Screen > Wizard**
   - Add expense should be ONE screen
   - Scroll, don't paginate
   - Real-time preview

3. **Visual > Text**
   - Emoji category icons
   - Payment method icons
   - Avatar everywhere
   - Large amounts

4. **Balances First**
   - Always show balance prominently
   - Large font for amounts
   - Breakdown below total

5. **Familiar Patterns**
   - If Splitwise does it, copy it
   - Don't reinvent the wheel
   - Users know Splitwise patterns

---

## 🚀 Implementation Priority

Focus on these screens first (in order):

1. **Add Expense** (highest priority - core feature)
2. **Home Screen** (balance display)
3. **Expense List** (in group detail)
4. **Friends List** (with balances)
5. **Settle Up** (simplified debts)
6. **Activity Feed**
7. **Profile & Settings**

Match Splitwise UX **exactly** for these screens. This makes adoption effortless for users familiar with Splitwise.

---

**Remember:** Splitwise has spent 15+ years perfecting their UX. Don't try to be clever - just copy what works! 🎯
