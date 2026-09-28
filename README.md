# ByteSpace — Online Course & Learning Platform

<p align="center">
  <strong>A modern, responsive online learning platform built with React, TypeScript, and Vite.</strong>
  Designed and developed as part of a <strong>Jr. Software Engineer (Frontend)</strong> assessment of Doin.tech.
</p>

---

## 📌 About the Project

**ByteSpace** is a modern online course and learning platform designed to provide users with an engaging way to discover courses, explore learning content, and connect with an educational community.

The project was developed by **Nazmus Sakib Nihal** as part of the frontend assessment for the **Jr. Software Engineer (Frontend)** position.

The implementation follows the provided design direction and focuses on translating the visual design into a functional, responsive React application while maintaining reusable components, structured data, and a clean frontend architecture.

---

## ✨ Features

### 🏠 Landing Page

- Interactive hero section with custom visual elements
- Prominent course search interface
- Floating statistics and visual highlights
- Responsive navigation
- Course discovery sections
- Community and creator-focused sections

### 📚 Course Catalog

- Categorized course collections
- Course cards with:
  - Course title
  - Category
  - Lesson count
  - Course duration
  - Student activity

- Filterable course presentation
- Responsive course grid

### 🚀 Creator & Growth Sections

Dedicated sections highlighting:

- Creator opportunities
- Platform management capabilities
- Growth metrics
- Earning opportunities
- Educational content creation

### 💬 Community Testimonials

- Community review cards
- Frosted-glass visual treatment
- Responsive testimonial layout
- Custom gradient effects
- User-focused presentation

### 🔐 Authentication

Responsive authentication interfaces including:

- Sign In
- Registration
- Social authentication UI
- Custom authentication layouts
- Responsive form presentation

### 📱 Responsive Design

The interface is designed to adapt across:

- Desktop
- Laptop
- Tablet
- Mobile

The layout uses responsive CSS Grid, Flexbox, fluid sizing, and breakpoint-based adjustments.

---

## 🛠️ Tech Stack

| Technology       | Purpose                            |
| ---------------- | ---------------------------------- |
| **React 18+**    | UI development                     |
| **TypeScript**   | Type-safe development              |
| **Vite**         | Development server & build tooling |
| **Vanilla CSS**  | Styling and responsive layouts     |
| **Lucide React** | Interface icons                    |
| **Oxlint**       | Code linting                       |

The project intentionally uses **Vanilla CSS** rather than a utility-first CSS framework to maintain direct control over the visual implementation and closely reproduce the provided design.

---

## 🏗️ Project Structure

```text
dointech_bytespace/
├── public/
│   ├── images/
│   │   ├── auth.png
│   │   ├── comm1.png
│   │   ├── comm2.png
│   │   ├── comm3.png
│   │   ├── coursebanner.png
│   │   ├── hero_main1.png
│   │   ├── hero_main2.png
│   │   ├── lime.png
│   │   ├── logoipsum_1.png
│   │   ├── logoipsum_2.png
│   │   ├── logoipsum_3.png
│   │   ├── logoipsum_4.png
│   │   └── logoipsum_5.png
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── components.tsx
│   ├── data.ts
│   ├── index.css
│   ├── main.tsx
│   └── pages.tsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/) **v18 or higher**
- npm

You can verify your installation with:

```bash
node --version
npm --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/nihalxx3dev/dointech_bytespace
cd dointech_bytespace
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### 4. Create a Production Build

```bash
npm run build
```

### 5. Preview the Production Build

```bash
npm run preview
```

---

## 🧩 Development Approach

The project was implemented with an emphasis on:

- Reusable React components
- Type-safe TypeScript code
- Structured application data
- Responsive layouts
- Maintainable CSS
- Component-based page composition
- Separation of UI components and application data
- Close adherence to the provided visual design

The interface is structured so that major sections can be independently maintained and extended as the application grows.

---

## 🎨 Design Implementation

The frontend was developed based on the provided design and progressively refined during implementation.

Particular attention was given to:

- Typography
- Spacing and visual hierarchy
- Responsive behavior
- Card layouts
- Border radius and surface treatments
- Gradient effects
- Hero illustrations
- Authentication layouts
- Course presentation
- Mobile responsiveness

The goal was not simply to reproduce static screenshots, but to translate the design into reusable and functional frontend components.

---

## 🤖 AI Assistance & Development Disclosure

The initial basic version of the project was generated with assistance from **ChatGPT** in a single prompt (22m 45s).

After the initial generation, the implementation was **manually reviewed, modified, structured, and refined** to better match the provided design and assessment requirements.

This included manual work on:

- Layout structure
- Component organization
- Styling
- Responsive behavior
- Visual details
- Content structure
- Asset integration
- Page composition
- Design refinements

AI assistance was therefore used as a development aid rather than as a substitute for the overall implementation and refinement process.

The repository's **Git history** contains the development progression and incremental changes made throughout the project.

---

## 👨‍💻 Developer

### Nazmus Sakib Nihal

This project was designed and developed by **Nazmus Sakib Nihal** specifically for the Jr. Software Engineer (Frontend) assessment of doin.tech company.

**Tracking ID:** `9170f11a-##redacted##-ccb9bd718370`

---

## 📄 License

This project was created for assessment and demonstration purposes.

Unless otherwise specified, the project's source code and assets should not be redistributed or used as a commercial product without permission.
