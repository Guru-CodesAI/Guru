# Setup and Running Instructions

To complete the setup of your **Futuristic AI Engineer Portfolio** and run the development server, please execute the following commands in your local Windows terminal.

## 1. Deploy the Soldier centerpiece image
Copy the centerpiece image asset from the system cache to your project's `public/` directory by running this PowerShell command:

```powershell
Copy-Item "C:\Users\gurunathan\.gemini\antigravity\brain\3cc4a8e3-cab5-4208-97e6-4c51fcfd13b7\futuristic_soldier_1782022571013.png" "e:\GHOST\public\futuristic_soldier.png"
```

## 2. Initialize dependencies and start the development server
Change directory to your project root, install all required Next.js, React, and GSAP/Framer Motion packages, and run the local development server:

```powershell
cd e:\GHOST
npm install
npm run dev
```

Once started, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view your high-end cinematic AI portfolio!
