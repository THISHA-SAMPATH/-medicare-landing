# 🏥 Medicare - Premium Medical Care Landing Page

Medicare is a state-of-the-art, fully responsive, and highly interactive medical services landing page designed to connect patients with top-tier consultants and virtual healthcare. 

Designed with modern UI/UX principles, Medicare features custom glassmorphism, sleek transitions, a custom-built responsive layout, and a global theme engine.

---

## ✨ Key Features

*   **🌓 Full Global Theme Engine**: Seamlessly switch between Light and Dark mode globally from the Navbar. Themes are fully synchronized and persist via `localStorage`.
*   **🎨 Premium Glassmorphic Design**: Curated color palettes with HSL-tailored variables, smooth CSS gradients, custom micro-animations, and high-impact typography.
*   **📱 Responsive Layout**: Fully optimized and pixel-perfect across desktop, tablet, and mobile breakpoints.
*   **🛠️ Smarter Utility Styling**: A robust custom styling resolver (`cn` function) designed to prevent tailwind style clashes between text-color and font-size rules.
*   **💎 High-Converting UI Components**:
    *   **Hero Section**: Eye-catching call-to-actions, live statistics, and animated pill badges.
    *   **Interactive Partner Marquee**: Smooth infinite-scroll marquee highlighting trusted healthcare organizations.
    *   **Bento Grid Services Section**: Structured and beautifully spaced bento layout describing key services with custom state interactions.
    *   **Doctor Availability Finder**: Map and localized indicators with premium availability badges.
    *   **Consultants Carousel**: Showcases professional doctors with clear availability states and customized CTA options.
    *   **Newsletter & CTA Banner**: Fully custom-styled forms with absolute positioning, custom focus borders, and interactive transitions.
    *   **Clean Footer Navigation**: Well-structured footer links, contact fields, and social media handles.

---

## 🚀 Tech Stack

*   **Core Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (Ultra-fast Hot Module Replacement)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS (`src/index.css`)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Theme Management**: React Context API (`ThemeContext`) + LocalStorage API

---

## 📁 Project Structure

```text
medicare-landing/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI & Layout Components
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, Features, Consultants, CTABanner, MapFeatures, TrustedBy
│   │   └── ui/             # Button, Badge
│   ├── context/            # Global Theme Context Providers
│   │   └── ThemeContext.jsx
│   ├── constants/          # Static content definitions & metadata
│   │   └── data.js
│   ├── utils/              # Helper functions (e.g. cn.js class merger)
│   │   └── cn.js
│   ├── App.jsx             # Root layout and section compiler
│   ├── index.css           # Global theme variables, animations, and Tailwind imports
│   └── main.jsx            # Entrypoint wrapping App in ThemeProvider
├── index.html              # HTML shell & SEO configuration
├── package.json            # Configuration and dependencies
└── vite.config.js          # Vite custom build config
```

---

## 🛠️ Setup & Development

Follow these steps to run the application locally on your machine:

### 1. Clone & Navigate
```bash
git clone https://github.com/THISHA-SAMPATH/-medicare-landing.git
cd medicare-landing
```

### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended):
```bash
npm install
```

### 3. Run Development Server
Start the local Vite dev server (usually launches on `http://localhost:5173/` or `http://localhost:5174/`):
```bash
npm run dev
```

### 4. Build for Production
To bundle and optimize the codebase for a production release:
```bash
npm run build
```

---

## 🎨 UI Guidelines & Best Practices

1.  **Tailwind Class Merging**: Always use the `cn(...)` utility helper when combining conditional classes or extending utility styles:
    ```javascript
    import { cn } from '../utils/cn';
    
    // Will merge padding and resolve color conflicts cleanly:
    const classes = cn("px-4 py-2 text-white bg-blue-500", customClass);
    ```
2.  **Custom Pill/Oval Padding**: To keep the design feeling premium and aligned, avoid using default button sizes on customized pills. Prefer standard padding pairs:
    *   **Buttons (Medium)**: `px-8 py-4`
    *   **Buttons (Small)**: `px-6 py-3`
    *   **Badges / Info Pills**: `px-4 py-1.5`
3.  **Theme Selection**: CSS variables (`--background`, `--foreground`, etc.) are declared inside `src/index.css` and are automatically updated whenever the `dark` class is toggled on the main `<html>` tag.
