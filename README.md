# 💰 SplitMacha - React Native App

Bangalore's favorite way to split bills! Built with React Native (Expo) and Yarn.

---

## 🚀 Quick Start Guide

### Prerequisites

1. **Node.js** (v18 or v20 LTS)
   - Download: https://nodejs.org/
   - Check: `node --version`

2. **Yarn** (v1.22+)
   ```bash
   # Install Yarn globally
   npm install -g yarn
   
   # Verify installation
   yarn --version
   ```

3. **Expo CLI**
   ```bash
   # Install Expo CLI globally
   yarn global add expo-cli
   
   # Verify installation
   expo --version
   ```

---

## 📱 Installation Steps

### Step 1: Clone/Navigate to Project

```bash
cd SplitMacha
```

### Step 2: Install Dependencies with Yarn

```bash
# Install all dependencies
yarn install

# This will install:
# - React Native & Expo
# - React Navigation
# - Linear Gradients
# - Safe Area Context
# - All other dependencies
```

### Step 3: Start the Development Server

```bash
# Start Expo development server
yarn start

# OR use specific commands:
yarn android  # Run on Android
yarn ios      # Run on iOS
yarn web      # Run in web browser
```

---

## 📲 How to Test the App

### Method 1: Using Expo Go App (Easiest - Recommended for Beginners)

**For Android:**
1. Download **Expo Go** from Google Play Store
2. Run `yarn start` in terminal
3. Scan the QR code with Expo Go app
4. App will load on your phone!

**For iOS:**
1. Download **Expo Go** from App Store
2. Run `yarn start` in terminal
3. Scan QR code with Camera app (it will open Expo Go)
4. App will load on your iPhone!

### Method 2: Using Android Studio (Android Emulator)

```bash
# Make sure Android Studio is installed
# Create an Android Virtual Device (AVD)
# Start the emulator, then run:
yarn android
```

### Method 3: Using Xcode (iOS Simulator - Mac Only)

```bash
# Make sure Xcode is installed
# Then run:
yarn ios
```

### Method 4: Web Browser (Quick Preview)

```bash
yarn web
# Opens in your default browser
# Note: Some native features won't work on web
```

---

## 🎯 What You'll See

### Screens Built So Far:

1. **Splash Screen** (2 seconds)
   - Animated 💰 emoji
   - SplitMacha logo
   - Progress bar animation
   - Orange gradient background

2. **Login Screen**
   - Beautiful gradient header
   - Google Sign In button (UI only for now)
   - Apple Sign In button (UI only for now)
   - Continue with Email button (working!)
   - Terms & Privacy links

3. **Email Login Screen**
   - Orange gradient header with back button
   - Email input field
   - Password input with show/hide toggle (👁️/🙈)
   - Forgot password link (screen not built yet)
   - Sign in button
   - Sign up link (screen not built yet)

### Test the Navigation:

1. App opens → Splash Screen (2s)
2. Auto navigates → Login Screen
3. Tap "Continue with Email" → Email Login Screen
4. Tap back arrow → Returns to Login Screen
5. Repeat!

---

## 📁 Project Structure

```
SplitMacha/
├── App.js                          # Main entry point
├── package.json                    # Dependencies
├── src/
│   ├── navigation/
│   │   └── AppNavigator.js        # Navigation setup
│   ├── screens/
│   │   ├── SplashScreen.js        # ✅ Built
│   │   ├── LoginScreen.js         # ✅ Built
│   │   └── EmailLoginScreen.js    # ✅ Built
│   ├── theme/
│   │   └── index.js               # ✅ Colors, typography, spacing
│   ├── components/                 # (Next phase)
│   ├── services/                   # (API calls)
│   └── store/                      # (State management)
```

---

## 🛠️ Troubleshooting

### Issue: "Command not found: yarn"

```bash
# Install yarn globally
npm install -g yarn
```

### Issue: "Cannot find module 'expo'"

```bash
# Delete node_modules and reinstall
rm -rf node_modules
yarn install
```

### Issue: Metro bundler cache issues

```bash
# Clear cache and restart
yarn start -c

# OR manually clear
expo start --clear
```

### Issue: Port already in use

```bash
# Kill the process using port 8081 (Mac/Linux)
lsof -ti:8081 | xargs kill -9

# Then restart
yarn start
```

### Issue: "Expo Go connection issues"

1. Make sure phone and computer are on **same WiFi network**
2. Disable VPN if using one
3. Try restarting Expo server: `yarn start -c`
4. Restart Expo Go app on phone

---

## 🎨 Theme & Design System

Your app uses a **Bangalore-inspired design system**:

- **Primary Orange**: `#FF6B35` (Bangalore sunsets)
- **Accent Gold**: `#F7B801` (Marigold flowers)
- **Success Green**: `#06A77D` (Garden City)
- **Error Red**: `#E74C3C`

All colors, spacing, typography are in: `src/theme/index.js`

---

## 📝 Development Commands

```bash
# Start development server
yarn start

# Start with cache cleared
yarn start -c

# Run on Android
yarn android

# Run on iOS
yarn ios

# Run in browser
yarn web

# Install new package
yarn add package-name

# Install dev dependency
yarn add -D package-name

# Remove package
yarn remove package-name
```

---

## 🔥 What's Next?

### Phase 2 Tasks (We'll build together):

1. ✅ Splash Screen - DONE
2. ✅ Login Screen - DONE
3. ✅ Email Login Screen - DONE
4. ⏳ Sign Up Screen - NEXT
5. ⏳ Forgot Password Screen
6. ⏳ Reusable Button Component
7. ⏳ Reusable Input Component
8. ⏳ Home Screen with Bottom Tabs

---

## 💡 Tips for Testing

### While Developing:

1. **Hot Reload**: Save any file and see changes instantly!
2. **Shake Phone**: Open Expo menu on device
3. **Press 'r' in terminal**: Reload app
4. **Press 'd' in terminal**: Open developer menu
5. **Check Console**: Watch terminal for errors

### Best Practices:

- ✅ Test on real device (Expo Go)
- ✅ Test on both Android & iOS if possible
- ✅ Keep terminal open to see errors
- ✅ Use `console.log()` for debugging
- ✅ Restart server if something feels broken

---

## 🎉 Success Checklist

You're ready to develop when:

- ✅ `yarn --version` shows version
- ✅ `yarn install` completes successfully
- ✅ `yarn start` opens Expo DevTools
- ✅ QR code appears in terminal
- ✅ Expo Go app is installed on phone
- ✅ Scanning QR loads the app
- ✅ You see the beautiful splash screen
- ✅ Navigation between screens works

---

## 📞 Need Help?

Common first-time issues:

1. **QR code not working?** → Try `yarn start --tunnel`
2. **App not updating?** → Press 'r' to reload
3. **Stuck on splash?** → Check console for errors
4. **Blank screen?** → Restart Expo server

---

## 🚀 You're All Set!

Run these commands and start developing:

```bash
cd SplitMacha
yarn install
yarn start
```

Then scan the QR code with Expo Go app!

**Happy coding! 💰📱🎉**
