# Practical 3: REST API Integration & Dynamic React Application

A responsive modern React web application built with **Vite** demonstrating REST API consumption, asynchronous state management, multi-page client-side routing, and interactive UI states.

---

## 📌 Project Overview

This project satisfies the objectives of **Practical 3** for Advanced Web Development Frameworks (AWDF):
- **API Integration**: Fetching real-world public data from GitHub REST APIs (`https://api.github.com/users/{username}/repos`).
- **Asynchronous Data Handling**: Managing API lifecycle states including **loading spinners**, **error messages / retries**, and **empty / successful results**.
- **User Interactions**: Dynamic username switching, live repo search filtering, and real-time form state previewing.
- **Routing**: Multi-page navigation using React Router v6 (`/`, `/projects`, `/contact`, and 404 fallback).
- **Theme Support**: Seamless Dark Mode / Light Mode toggle with custom CSS design tokens.

---

## ✨ Features

- **Dynamic GitHub Repository Viewer**:
  - Fetches latest public repositories for any GitHub username.
  - Live client-side search filtering by repository name.
  - Star count badges, repository descriptions, primary language tags, and direct repository links.
  - Error fallback card with retry option and fallback to default username.
- **Interactive Home Page**:
  - Highlights core technical competencies and skills tags.
  - Dynamic bio card toggle powered by React `useState`.
- **Reactive Contact Form**:
  - Real-time side-by-side preview powered by controlled input state.
  - Character counter and submission feedback.
- **Clean Responsive UI**:
  - CSS custom variables (design tokens).
  - Glassmorphic card styling, fluid grids, and accessible interactive elements.
  - Dark / Light mode toggle saved in state.

---

## 🛠️ Tech Stack

- **Core**: React 18
- **Tooling / Bundler**: Vite 5
- **Routing**: React Router DOM (v6)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Data Source**: GitHub REST API v3

---

## 📁 Project Structure

```
Practical-3/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx             # React entry point with BrowserRouter
    ├── App.jsx              # App layout, Theme state, Routing setup & Footer
    ├── index.css            # Design tokens, themes (dark/light), typography & components
    └── components/
        ├── NavBar.jsx       # Navigation bar with active route highlighting & theme toggle
        ├── Home.jsx         # Hero profile, bio toggle & skills overview
        ├── Projects.jsx     # GitHub REST API fetcher, search filter & error handling
        ├── Contact.jsx      # Controlled contact form with real-time live preview
        └── NotFound.jsx     # 404 Not Found fallback page
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v16 or higher recommended).

### 1. Installation

Clone or open the repository directory in your terminal and install dependencies:

```bash
npm install
```

### 2. Run Development Server

Start the local Vite development server:

```bash
npm run dev
```

Then open the URL shown in your terminal (typically `http://localhost:5173`) in your web browser.

### 3. Build for Production

To create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---
