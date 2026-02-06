# How to Use Personal Notion

## Quick Start (No Server Needed!)

The app is **already serverless** - it runs entirely on your local machine with no server required.

### To run the app:
```bash
cd personal-notion
npm start
```

That's it! The app will launch in its own window. All your data is saved locally to the `data/` folder.

## About Building an .exe

There's currently a Windows permission issue with electron-builder that prevents creating a standalone .exe file. This is a known issue with symbolic links on Windows.

**Workaround options:**

1. **Use `npm start`** (Recommended for now)
   - Fast and simple
   - No build needed
   - Works perfectly offline

2. **Create a shortcut** to make it easier:
   - Create a `.bat` file with:
     ```bat
     cd "c:\Games\projects\personal site\personal-notion"
     npm start
     ```
   - Save as `Personal Notion.bat` on your desktop
   - Double-click to launch

3. **Fix the permission issue** (Advanced):
   - Run PowerShell as Administrator
   - Enable Developer Mode in Windows Settings
   - Or run: `npm run build` from an Administrator terminal

## Key Points

✅ **No server runs in the background** - Electron apps are desktop applications
✅ **Works 100% offline** - All data stored locally  
✅ **No network needed** - Everything is on your computer
✅ **Close the window = app closes** - Nothing keeps running

The app is already exactly what you wanted - offline-first with no server!
