# 🎯 START HERE - Your Complete Setup Guide

## 📥 Step 1: Download & Extract

You have the project! Extract the ZIP file to your preferred location.

---

## ⚙️ Step 2: Install Prerequisites (One-Time Setup)

### A. Install Node.js (if not installed)
1. Go to: https://nodejs.org/
2. Download LTS version (v18 or v20)
3. Install it
4. Verify: Open terminal and type `node --version`

### B. Install Yarn
```bash
npm install -g yarn
yarn --version  # Should show version like 1.22.x
```

### C. Install Expo CLI
```bash
yarn global add expo-cli
expo --version  # Should show version
```

### D. Install Expo Go on Your Phone
- **iPhone**: App Store → Search "Expo Go" → Install
- **Android**: Play Store → Search "Expo Go" → Install

---

## 🚀 Step 3: Run the App (3 Commands)

Open terminal/command prompt and run:

```bash
# 1. Navigate to project folder
cd SplitMacha

# 2. Install dependencies (takes 2-3 minutes first time)
yarn install

# 3. Start the app
yarn start
```

---

## 📱 Step 4: View on Your Phone

After `yarn start`:

1. A QR code appears in terminal
2. Open **Expo Go** app on your phone
3. **iPhone**: Use Camera app to scan → Opens Expo Go
4. **Android**: Open Expo Go → Tap "Scan QR code"
5. Wait 10-30 seconds for app to load
6. 🎉 Your app appears!

---

## ✅ What You Should See

### Sequence:
1. **Splash Screen** (2 seconds)
   - Orange gradient
   - 💰 emoji bouncing
   - "SplitMacha" text
   - Progress bar

2. **Login Screen**
   - Orange header
   - Google/Apple/Email buttons
   - Tap "Continue with Email"

3. **Email Login Screen**
   - Back button (←)
   - Email & Password fields
   - Eye icon toggles password visibility
   - Tap back to return

---

## 📖 Read These Files

1. **QUICKSTART.md** - Quick reference commands
2. **README.md** - Full documentation
3. **TESTING_GUIDE.md** - Visual testing checklist

---

## 🐛 Troubleshooting

### "yarn: command not found"
```bash
npm install -g yarn
```

### "QR code not scanning"
Make sure:
- Phone and computer on **same WiFi**
- No VPN active
- Try: `yarn start --tunnel`

### "App not loading"
```bash
# Clear cache and restart
yarn start -c
```

### "Metro bundler error"
```bash
# Delete node_modules and reinstall
rm -rf node_modules
yarn install
yarn start
```

---

## 🎯 Quick Test Checklist

After app loads:
- [ ] Splash screen shows (2s)
- [ ] Login screen appears
- [ ] Tap "Continue with Email" works
- [ ] Email login screen shows
- [ ] Can type in email field
- [ ] Can type in password field
- [ ] Eye icon toggles password
- [ ] Back button returns to login

**All working? You're ready! 🎉**

---

## 💡 Pro Tips

### During Development:
- **Shake phone** → Opens developer menu
- **Press 'r' in terminal** → Reload app
- **Press 'd' in terminal** → Open dev menu
- **Save any file** → Hot reload (instant update)

### Best Practices:
1. Keep terminal open while developing
2. Watch for errors in console
3. Test on real device (better than emulator)
4. Use `console.log()` for debugging

---

## 📁 Project Structure

```
SplitMacha/
├── App.js                    # Entry point
├── package.json              # Dependencies
├── app.json                  # Expo config
├── QUICKSTART.md            # Quick commands
├── README.md                # Full docs
├── TESTING_GUIDE.md         # Visual testing
└── src/
    ├── navigation/          # React Navigation
    ├── screens/             # All screens
    │   ├── SplashScreen.js      ✅ Built
    │   ├── LoginScreen.js       ✅ Built
    │   └── EmailLoginScreen.js  ✅ Built
    ├── theme/               # Colors, spacing
    ├── components/          # (Next phase)
    ├── services/            # (API calls)
    └── store/               # (State)
```

---

## 🎨 What's Built So Far

✅ **Splash Screen**
- Animated emoji
- Progress bar
- Auto-navigation

✅ **Login Screen**
- Social login buttons (UI only)
- Email login (functional)
- Beautiful design

✅ **Email Login Screen**
- Input fields
- Password toggle
- Navigation

✅ **Theme System**
- Bangalore-inspired colors
- Typography scale
- Spacing system

✅ **Navigation**
- Stack navigation
- Screen transitions

---

## 🔥 Next Steps (Phase 2)

Once you confirm everything works, we'll build:

1. **Sign Up Screen**
2. **Forgot Password Screen**
3. **Button Component** (reusable)
4. **Input Component** (reusable)
5. **Home Screen** with tabs
6. **Group List**
7. **Add Expense Screen**

---

## 📞 Common Questions

**Q: Do I need Android Studio or Xcode?**
A: No! Expo Go app is enough for development.

**Q: Can I test on both iOS and Android?**
A: Yes! If you have both devices, use Expo Go on each.

**Q: How do I add new packages?**
A: `yarn add package-name`

**Q: How do I clear cache?**
A: `yarn start -c`

---

## 🎉 Success!

If you see:
- ✅ Terminal shows "Metro waiting on..."
- ✅ QR code visible
- ✅ Expo Go loads the app
- ✅ Screens navigate smoothly
- ✅ No errors in console

**You're ready to develop! Let's build Phase 2 together!**

---

## 📧 Next Actions

1. Run `yarn install`
2. Run `yarn start`
3. Scan QR code
4. Test the app
5. Come back and we'll build Sign Up screen!

**Happy coding! 💰📱🚀**
