# 🐉 Dragon News

A responsive news portal web application built with React, featuring category-based news browsing, Firebase authentication, and a fully responsive design for mobile, tablet, and desktop.

**Live Site:** [https://dragon-news-breaking-de231.web.app](https://dragon-news-breaking-de231.web.app/category/1)
**Repository:** [https://github.com/Zannat02/Dragon-news-firebase](https://github.com/Zannat02/Dragon-news-firebase)

---

## 📖 About

Dragon News is a digital news platform delivering timely and organized news across multiple categories — Business, Technology, Health, Sports, Entertainment, Science, Politics, and more. The project features secure user authentication, a clean category-based browsing experience, and a fully responsive layout that adapts smoothly across mobile, tablet, and desktop screens.

---

## ✨ Features

- 📰 **Category-based News Browsing** — Browse news by category (All News, Breaking News, Business, Technology, Health, Sports, Entertainment, Science, Politics, Education, Lifestyle)
- 🔐 **Authentication** — Email/password registration & login, plus Google sign-in via Firebase
- 🔒 **Protected Routes** — News details page requires login to access
- 📱 **Fully Responsive** — Optimized layouts for mobile, tablet, and desktop with collapsible side panels
- 📢 **Live News Ticker** — Scrolling marquee for latest headlines
- 🎨 **Modern UI** — Built with Tailwind CSS and DaisyUI components
- 🔔 **Toast Notifications** — User-friendly feedback using react-hot-toast
- 👤 **User Profile** — Displays logged-in user's photo and email in the navbar
- 📄 **Static Pages** — About and Career pages with responsive layouts

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm
- A Firebase project with Authentication enabled (Email/Password and Google providers)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/Zannat02/Dragon-news-firebase.git
   cd Dragon-news-firebase
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up Firebase configuration**

   Create a Firebase project at [Firebase Console](https://console.firebase.google.com/), enable **Authentication** (Email/Password and Google sign-in methods), and add your Firebase config to `src/firebase/firebase_config.js`:

```js
   import { initializeApp } from "firebase/app";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   export default app;
```

4. **Run the development server**
```bash
   npm run dev
```

   The app will be available at `http://localhost:5173`

---

## 📦 Build & Deployment

### Build for production
```bash
npm run build
```

### Deploy to Firebase Hosting
```bash
firebase login
firebase deploy
```

> If Firebase Hosting hasn't been initialized yet, run `firebase init` first, select **Hosting**, choose your Firebase project, set `dist` as the public directory, and configure it as a single-page app.

---

## 🔐 Authentication Flow

- Users can register with **name, photo URL, email, and password**
- Users can log in with **email/password** or **Google**
- Attempting to view a news article's details without logging in redirects to the login page, and after successful login, the user is redirected back to the article they intended to view
- Logged-in users see their profile picture and can log out from the navbar

---

## 📱 Responsive Design

The application adapts across three breakpoints:

- **Mobile** — Side panels (categories & social/widgets) are hidden behind toggle icons that open as slide-in drawers
- **Tablet** — Similar to mobile with adjusted spacing and font sizes
- **Desktop (lg and above)** — Full three-column layout with category sidebar, main content, and social/widget sidebar always visible

---

## 📄 License

This project is for educational purposes.