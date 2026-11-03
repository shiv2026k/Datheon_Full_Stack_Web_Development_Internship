# Datheon Full Stack Web Development Internship

This repository contains the engineering core deliverables completed during the **4-Week Full Stack Web Development Internship**. The solutions showcase responsive UI components, cross-browser compatibility, component isolation, asynchronous-ready architectures, and local state management with persistent storage routines.

---

## 📂 Project Architecture

```text
Datheon_Full_Stack_Web_Development_Internship/
│
├── index.html               # Task 1: Portfolio Structure & Dynamic Scripts
├── portfolio-style.css      # Task 1: Portfolio System Layout Rules
│
├── task-manager.html        # Task 2: Productivity CRUD Interface Layout
├── task-style.css           # Task 2: Task Manager Dark/Light Theme Engine
├── task-script.js           # Task 2: Storage Sync Engine & CRUD Operations
└── README.md                # Technical Documentation & User Setup Guide
```

---

## 🌐 Task 1: Personal Developer Portfolio & Project Showcase (`index.html`)

A high-performance, single-page modular developer tracking sheet built with Semantic HTML5, CSS Variables, and optimized responsive layouts.

### 🌟 Advanced Technical Features
* **Dynamic Theme Switcher Engine:** Utilizes CSS Custom Properties (`:root` / `.dark-theme`) wired to a JavaScript toggle, retaining zero visual stutter during shifts.
* **Fluid Layout System:** Blends multi-column layouts via **CSS Grid and Flexbox Matrixes** that scale naturally across mobile, tablet, and 4K displays.
* **Component Optimization:** Leverages smooth hardware-accelerated document scrolling via declarative CSS configurations (`scroll-behavior: smooth`).
* **Interactive Navigation:** Implements an optimized mobile hamburger drawer overlay with self-closing listeners attached to individual navigation triggers.

---

## 📝 Task 2: Dynamic Task Manager App (`task-manager.html`)

A standalone JavaScript productivity tool that operates completely browser-side, implementing a robust transactional engine with persistent storage data models.

### ⚙️ Core Engineering Frameworks Implemented
1. **Create (C):** Tracks input data parameters (Title, Date, Category Tags) from localized forms into structured Object arrays, dynamically binding random unique ID stamps.
2. **Read (R):** Rebuilds execution loops on every state modification, systematically scanning active filters to display items without UI blocking.
3. **Update (U):** Evaluates state element modifications synchronously to safely toggle structural completion classes and change internal completion states.
4. **Delete (D):** Sanitizes and drops tracked items from memory arrays before refreshing active system render states.

### 🌟 Technical Highlights
* **Automated Data Persistence:** Intercepts storage updates using serialized **JSON LocalStorage Engine Syncing**, ensuring user data persists across page reloads.
* **State Filter Middleware:** Offers live real-time visual sorting (All, Active, Completed tasks) via declarative `data-filter` dataset parameters.
* **Fail-Safe Sanitization:** Form input fields block missing strings, ensuring data structure formats remain valid.

---

## 💻 Technical Environment Matrix
* **Frontend Markup:** HTML5 (Semantic Structure Elements)
* **Styling Framework:** CSS3 (Variable Layout System / Responsive Breakpoints)
* **Logic Architecture:** Vanilla JavaScript (ES6+ Module Architecture)
* **Data Storage Cache:** Web Storage API (`window.localStorage`)

---

## 🛠️ Verification Setup & Deployment Guide

Follow these configuration steps to spin up and review the projects locally:

### 1. Initialize Local Project Environment
```bash
# Clone the remote public portal setup
git clone https://github.com

# Move into the project directory
cd Datheon_Full_Stack_Web_Development_Internship
```

### 2. File Verification & Live Testing
* Locate `index.html` inside your file system and double-click to launch it inside your web browser.
* Test the **Theme Switcher Mode** button to confirm dark/light background variable assignments invert perfectly.
* Click the **Open Project →** link under the featured projects container or launch `task-manager.html` independently.
* Input dummy test tasks into the form, check the filter toggles, reload the web page, and confirm your entries persist successfully through the storage engine.

---

## 🎓 Internship Evaluation Blueprint

This repository is aligned with the submission guidelines of the **Datheon Technical Directorate**. Code structure configurations strictly implement separation of concerns (HTML layouts isolated from style layouts and logic structures) to fulfill credential verification audit parameters.
