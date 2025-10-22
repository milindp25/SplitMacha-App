# ✅ Installation Checklist - Follow Step by Step

## Before You Start

Print or keep this checklist open while setting up!

---

## 🎯 Step 1: Prerequisites (One-Time Setup)

### 1.1 Node.js
- [ ] Go to: https://nodejs.org/
- [ ] Download **LTS version** (v18 or v20)
- [ ] Install it (default settings)
- [ ] Open Terminal/Command Prompt
- [ ] Run: `node --version`
- [ ] Should see: `v18.x.x` or `v20.x.x`

### 1.2 Yarn
- [ ] Open Terminal/Command Prompt
- [ ] Run: `npm install -g yarn`
- [ ] Wait for installation
- [ ] Run: `yarn --version`
- [ ] Should see: `1.22.x` or higher

### 1.3 Expo CLI
- [ ] In Terminal, run: `yarn global add expo-cli`
- [ ] Wait for installation
- [ ] Run: `expo --version`
- [ ] Should see version number

### 1.4 Expo Go App
**For iPhone:**
- [ ] Open App Store
- [ ] Search "Expo Go"
- [ ] Tap "Get" and install
- [ ] Open app once to grant permissions

**For Android:**
- [ ] Open Play Store
- [ ] Search "Expo Go"
- [ ] Tap "Install"
- [ ] Open app once to grant permissions

✅ **Prerequisites Done!**

---

## 📥 Step 2: Extract Project

- [ ] Locate `SplitMacha-Phase1-Complete.zip`
- [ ] Extract/Unzip to a folder you'll remember
- [ ] Example: `/Users/YourName/Projects/SplitMacha`
- [ ] Open Terminal/Command Prompt
- [ ] Navigate to folder: `cd /path/to/SplitMacha`
- [ ] Verify: Run `ls` (Mac/Linux) or `dir` (Windows)
- [ ] Should see: `package.json`, `App.js`, `src/` folder

✅ **Project Extracted!**

---

## 📦 Step 3: Install Dependencies

- [ ] Make sure you're in SplitMacha folder
- [ ] Run: `yarn install`
- [ ] Wait 2-5 minutes (downloading packages)
- [ ] Should see: "Done in X.XXs"
- [ ] Should NOT see any errors

**If you see errors:**
- [ ] Try: `rm -rf node_modules` (Mac/Linux) or `rmdir /s node_modules` (Windows)
- [ ] Then: `yarn install` again

✅ **Dependencies Installed!**

---

## 🚀 Step 4: Start the App

- [ ] Run: `yarn start`
- [ ] Wait 10-30 seconds
- [ ] Should see:
  - "Metro waiting on..."
  - QR code in terminal
  - Web browser might open (DevTools)

**What you should see:**
```
› Metro waiting on exp://192.168.x.x:8081
› Scan the QR code above with Expo Go (Android) or Camera (iOS)
```

✅ **Server Running!**

---

## 📱 Step 5: Open on Phone

### For iPhone:
- [ ] Open **Camera** app (not Expo Go!)
- [ ] Point at QR code in terminal
- [ ] Tap notification that appears
- [ ] Expo Go opens automatically
- [ ] Wait 10-30 seconds for app to load

### For Android:
- [ ] Open **Expo Go** app
- [ ] Tap "Scan QR Code"
- [ ] Point at QR code in terminal
- [ ] Wait 10-30 seconds for app to load

**Troubleshooting:**
- [ ] Phone and computer on **same WiFi**?
- [ ] Try: `yarn start --tunnel` if QR doesn't work

✅ **App Opened on Phone!**

---

## 🎉 Step 6: Test the App

### Test 1: Splash Screen
- [ ] See orange gradient background?
- [ ] See 💰 emoji bouncing?
- [ ] See "SplitMacha" text?
- [ ] See progress bar at bottom?
- [ ] Waits 2 seconds then navigates?

### Test 2: Login Screen
- [ ] See orange gradient at top?
- [ ] See 💰 emoji?
- [ ] See "SplitMacha" title?
- [ ] See Google Sign In button?
- [ ] See Apple Sign In button? (iOS only)
- [ ] See "Continue with Email" button (orange)?
- [ ] Tap "Continue with Email" → Goes to next screen?

### Test 3: Email Login Screen
- [ ] See orange gradient header?
- [ ] See back arrow (←) on left?
- [ ] See "Sign in" title?
- [ ] Tap in "Email" field → Can type?
- [ ] Tap in "Password" field → Can type?
- [ ] Tap eye icon (👁️) → Password shows/hides?
- [ ] Tap back arrow → Returns to Login screen?

✅ **All Tests Passed!**

---

## 🔧 Step 7: Development Setup

### Terminal Commands:
- [ ] Keep terminal open while developing
- [ ] Watch for errors in terminal
- [ ] Press 'r' to reload app
- [ ] Press 'd' to open dev menu

### Phone Controls:
- [ ] Shake phone → Opens dev menu
- [ ] In dev menu → "Reload" to refresh
- [ ] In dev menu → "Debug Remote JS" for advanced debugging

### Making Changes:
- [ ] Open any file in `src/` folder
- [ ] Make a change (add a space, change text)
- [ ] Save the file
- [ ] App should auto-reload (hot reload)
- [ ] See your changes instantly!

✅ **Development Environment Ready!**

---

## 📚 Step 8: Read Documentation

Now that everything works, read these files:

1. [ ] **START_HERE.md** - Overall guide
2. [ ] **QUICKSTART.md** - Quick command reference
3. [ ] **README.md** - Full documentation
4. [ ] **TESTING_GUIDE.md** - Visual testing
5. [ ] **PROJECT_SUMMARY.md** - What's included

✅ **Documentation Read!**

---

## 🎯 Final Verification

### All Green?
- [ ] Node.js installed and working
- [ ] Yarn installed and working
- [ ] Expo CLI installed
- [ ] Expo Go app on phone
- [ ] Project extracted
- [ ] Dependencies installed (`node_modules` folder exists)
- [ ] Server starts (`yarn start` works)
- [ ] QR code appears
- [ ] App loads on phone
- [ ] Splash screen shows
- [ ] Can navigate between screens
- [ ] No errors in terminal
- [ ] Hot reload works

### 🎉 If all checked:
**YOU'RE READY TO DEVELOP!**

---

## 🚨 If Something Doesn't Work

### Issue: Can't install Yarn
```bash
# Try this instead:
npm install -g yarn
```

### Issue: `yarn install` fails
```bash
# Clear cache and try again:
yarn cache clean
yarn install
```

### Issue: QR code doesn't scan
```bash
# Try tunnel mode:
yarn start --tunnel
```

### Issue: Metro bundler error
```bash
# Clear everything and restart:
rm -rf node_modules
yarn install
yarn start -c
```

### Issue: App shows blank screen
1. Check terminal for errors
2. Try `yarn start -c`
3. Restart Expo Go app
4. Check phone and computer on same WiFi

---

## 📞 Common Questions

**Q: How long does first install take?**
A: 2-5 minutes for `yarn install`

**Q: Do I need to install every time?**
A: No! Only first time. After that just `yarn start`

**Q: Can I use VS Code?**
A: Yes! Any code editor works

**Q: What if I close terminal?**
A: Just run `yarn start` again

**Q: Will this work offline?**
A: No, phone needs to connect to your computer's server

---

## ✅ You're Done When...

✅ You see the splash screen  
✅ You see the login screen  
✅ You can navigate between screens  
✅ No red errors anywhere  
✅ You're excited to build more! 🎉

---

## 🎯 Next Steps

1. ✅ Complete this checklist
2. ✅ Test the app thoroughly
3. ✅ Take screenshots (optional)
4. 🎉 Come back for **Phase 2: Sign Up Screen**!

**Welcome to React Native development!** 🚀📱💰
