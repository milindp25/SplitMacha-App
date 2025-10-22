# 📸 Visual Testing Guide - What You Should See

## Flow: Splash → Login → Email Login

---

## 1️⃣ SPLASH SCREEN (Shows for 2 seconds)

**What to expect:**
```
┌─────────────────────────────┐
│    Orange Gradient BG       │
│                             │
│         💰                  │
│    (animated bounce)        │
│                             │
│     SplitMacha             │
│   (big white text)          │
│                             │
│  Bangalore's favorite       │
│  way to split bills         │
│  (small white text)         │
│                             │
│    ▬▬▬▬▬▬▬▬▬▬▬            │
│   (progress bar filling)    │
│                             │
└─────────────────────────────┘
```

**Colors:**
- Background: Orange → Red gradient
- Text: White
- Progress bar: White

**Animation:**
- Emoji bounces up and down
- Progress bar fills from 0% to 100%
- Auto-navigates after 2 seconds

---

## 2️⃣ LOGIN SCREEN

**What to expect:**
```
┌─────────────────────────────┐
│   Orange Gradient Header    │
│                             │
│         💰                  │
│     SplitMacha             │
│  Split bills with friends,  │
│    Bangalore style          │
│                             │
├─────────────────────────────┤ ← Rounded white card
│ ┌─────────────────────────┐ │
│ │   G  Continue with      │ │ ← White button
│ │      Google             │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │   🍎  Continue with     │ │ ← Black button
│ │       Apple             │ │
│ └─────────────────────────┘ │
│                             │
│     ───── OR ─────          │
│                             │
│ ┌─────────────────────────┐ │
│ │  Continue with Email    │ │ ← Orange button
│ └─────────────────────────┘ │
│                             │
│  By continuing, you agree   │
│  to our Terms & Privacy     │
│                             │
└─────────────────────────────┘
```

**Interactive Elements:**
- Tap "Continue with Email" → Goes to Email Login
- Other buttons are UI only (not functional yet)

---

## 3️⃣ EMAIL LOGIN SCREEN

**What to expect:**
```
┌─────────────────────────────┐
│   Orange Gradient Header    │
│  ←  Sign in                 │ ← Back button + title
│                             │
├─────────────────────────────┤
│                             │
│  Email                      │
│ ┌─────────────────────────┐ │
│ │ Enter your email        │ │ ← Input field
│ └─────────────────────────┘ │
│                             │
│  Password                   │
│ ┌──────────────────────┬──┐ │
│ │ Enter password       │👁️│ │ ← Input with eye icon
│ └──────────────────────┴──┘ │
│                             │
│          Forgot password? → │
│                             │
│ ┌─────────────────────────┐ │
│ │      Sign in            │ │ ← Orange button
│ └─────────────────────────┘ │
│                             │
│  Don't have an account?     │
│         Sign up             │ ← Orange link
│                             │
└─────────────────────────────┘
```

**Interactive Elements:**
- Tap back arrow (←) → Returns to Login Screen
- Tap eye icon (👁️) → Toggles password visibility
  - Closed eye (🙈) = password hidden
  - Open eye (👁️) = password shown
- Type in email/password fields
- "Sign in" button (logs to console for now)

---

## ✅ Testing Checklist

### Splash Screen Tests:
- [ ] Orange gradient background appears
- [ ] 💰 emoji bounces
- [ ] "SplitMacha" text is visible
- [ ] Progress bar animates
- [ ] Auto-navigates after ~2 seconds

### Login Screen Tests:
- [ ] Orange gradient at top
- [ ] White rounded card below
- [ ] Google button has "G" icon
- [ ] Apple button is black
- [ ] Orange "Continue with Email" button works
- [ ] Tap email button → Email Login appears

### Email Login Screen Tests:
- [ ] Orange header with back button
- [ ] "Sign in" title centered
- [ ] Email input field works (can type)
- [ ] Password input field works (can type)
- [ ] Eye icon toggles password visibility
- [ ] Back button returns to Login
- [ ] Layout looks good (no overflow)

---

## 🐛 Common Issues & Fixes

### Issue: Splash screen doesn't auto-navigate
**Fix:** Check console for errors. Timer should be 2000ms.

### Issue: Can't see text in inputs
**Fix:** Make sure you're typing. Text color is dark gray.

### Issue: Navigation doesn't work
**Fix:** Check that React Navigation is installed:
```bash
yarn install
```

### Issue: Orange colors look wrong
**Fix:** Check theme file. Primary should be #FF6B35

### Issue: Back button doesn't work
**Fix:** Restart app with `yarn start -c`

---

## 🎨 Design Validation

### Color Check:
- Primary Orange: #FF6B35 ✓
- Text on white: Dark gray #2D3436 ✓
- Placeholder text: Light gray #95A5A6 ✓
- Button text: White #FFFFFF ✓

### Spacing Check:
- Card padding: 24px ✓
- Button padding: 16px vertical ✓
- Input margin bottom: 24px ✓

### Typography Check:
- App name: 42px bold ✓
- Button text: 16px semibold ✓
- Input text: 16px regular ✓

---

## 📱 Device-Specific Notes

### iOS:
- Should show both Google & Apple buttons
- Status bar should be light (white text)
- Smooth animations

### Android:
- Should show only Google button (Apple is iOS-only)
- Status bar light
- Ripple effect on button taps

### Both:
- Keyboard should push content up, not overlap
- Safe areas respected (notch, home indicator)
- No text cutoff

---

## 🎉 Success Indicators

You're good if:
✅ All three screens render correctly
✅ Navigation works smoothly
✅ Animations are smooth (no lag)
✅ Colors match design spec
✅ Keyboard doesn't break layout
✅ No console errors
✅ Can type in input fields
✅ Eye icon toggles password

---

## Next Steps After Testing

Once everything works:
1. ✅ Take screenshots
2. ✅ Test on both iOS & Android if possible
3. ✅ Try different screen sizes
4. ✅ Ready for Phase 2 (Sign Up Screen)!
