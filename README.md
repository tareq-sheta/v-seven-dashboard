# 🏭 Industrial Manufacturing Execution System (MES) Dashboard

A production-grade, feature-rich **MES Dashboard** built for industrial plant managers, supervisors, and operators. It provides real-time visibility into factory operations, machine performance, OEE (Overall Equipment Effectiveness) metrics, resource consumption (energy and materials), and production loss analysis.

---

## ✨ Key Features

- **Hierarchical Plant Navigation:** Drill down from a plant-wide executive summary to specific factories, production lines, and individual machines using dynamic URL routing.
- **Comprehensive KPI Tracking:** Monitor OEE, SLE (Shop Floor Line Effectiveness), USLE, availability, performance, and quality through custom-animated progress rings and bars.
- **Loss Tree Analysis:** Visual breakdown of operational losses and downtime categories (breakdowns, cleaning, changeovers, idle states, minor stops, speed losses, and quality losses).
- **Interactive Shift Timelines:** Real-time tracking of machine states (`Running`, `Down`, `Idle`, `Setup`) across production shifts.
- **Resource Monitoring Modules:** Dedicated views for **Energy** (electrical loads, power factor, specific energy index) and **Materials** (PET resin granules, preform blanks, scrap rates, and material yields).
- **Advanced Filtering & Date Control:** Custom date range pickers and type filters (SKU vs. Production) driven by URL search parameters and React Router v7.
- **Secure Session Management:** Protected route guards using custom route loaders and local session validation.

---

## 💻 Tech Stack

| Area               | Technology                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------- |
| Core               | React 19, TypeScript                                                                      |
| Build Tool         | Vite                                                                                      |
| Routing            | React Router v7 (lazy loading, protected route loaders)                                   |
| Data Visualization | Recharts, custom SVG progress components                                                  |
| Icons              | Lucide React                                                                              |
| Styling            | SASS / SCSS Modules                                                                       |
| Animations         | Custom hooks using `requestAnimationFrame` and cubic ease-out curves for numeric counters |

---

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components (Navbar, Sidebar, CircularProgress, DateFilter, etc.)
├── pages/
│   ├── Factory/         # Factory-level KPIs, Total Production, Usage, and Current Activity
│   ├── Line/            # Line-level metrics, Loss Tree, Power KPI, and State Timelines
│   ├── Machines/        # Plant-wide machine monitoring, shift timelines, and trend charts
│   ├── Resources/       # Energy and Materials tracking modules
│   ├── Reports/         # Consolidated shift and daily reports
│   ├── Login/           # Authentication view with interactive routing paths
│   └── Overview/        # Plant-wide executive dashboard summary
├── services/            # Custom hooks (useAnimatedCounter, useValidUser)
├── sass/                # Global style sheets and variables
├── App.tsx              # Root router configuration & authentication loaders
└── main.tsx             # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or newer
- **npm**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tareq-sheta/v-seven-dashboard.git
   cd v-seven-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   Go to `http://localhost:5173`. Use the simulated login screen to test the protected route authentication flow.

---

## 🎯 Portfolio Highlights

- **Domain Expertise:** Implements standardized manufacturing KPIs (OEE, Availability, Performance, Quality, SEC) reflective of real-world Industry 4.0 systems.
- **Performance Optimization:** Uses lightweight custom SVG charts and animation loops instead of heavy third-party UI libraries.
- **Clean Architecture:** Strict separation of concerns with modular SCSS, robust TypeScript typing, and lazy-loaded route components.
