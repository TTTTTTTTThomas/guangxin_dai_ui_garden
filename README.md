# Guangxin Dai UI Garden - React Component Library

A comprehensive React component library built with TypeScript, Storybook, and styled-components. This library provides a collection of reusable UI components with full responsive design, accessibility features, and comprehensive testing.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Docker (for containerized deployment)

### Installation
```bash
npm install
```

### Development
```bash
# Start Storybook development server
npm run storybook

# Run tests
npm test

# Build for production
npm run build
```

## 🐳 Docker Deployment

### Building and Running with Docker

1. **Build the Docker image:**
```bash
docker build -t dai_guangxin_coding_assignment12 .
```

2. **Run the container:**
```bash
docker run -d -p 8083:8083 --name dai_guangxin_coding_assignment12 dai_guangxin_coding_assignment12
```

3. **Access the application:**
Open your browser and navigate to: `http://localhost:8083` or `http://127.0.0.1:8083`

### Container Details
- **Container Name:** `dai_guangxin_coding_assignment12`
- **Working Directory:** `/guangxin_dai_ui_garden`
- **Port:** `8083`
- **Base Image:** `nginx:alpine`

## 📦 Components

This library includes all required components with comprehensive features:

### 🔘 Button ✅
- **Variants:** primary, secondary, danger
- **Sizes:** small, medium, large
- **States:** default, disabled
- **Features:** Custom colors, responsive design, hover effects

### 🏷️ Label ✅
- **Variants:** default, required, optional
- **Sizes:** small, medium, large
- **Features:** Custom colors, font weights, accessibility support

### 📝 Text ✅
- **Elements:** p, span, div, h1-h6
- **Sizes:** xs, sm, md, lg, xl, 2xl
- **Features:** Text alignment, line height, truncation, responsive typography

### 📊 Table ✅ (with all sub-components)
- **Components:** Table, TableHeader, TableRow, TableCell, TableFooter
- **Variants:** default, striped, bordered
- **Features:** Responsive design, clickable rows, custom styling

### 📋 Dropdown ✅
- **Features:** Selectable options, disabled states, custom colors
- **Sizes:** small, medium, large
- **States:** Loading, error handling, keyboard navigation

### ⚪ RadioButton ✅
- **Features:** Grouped selections, custom colors, label positioning
- **Sizes:** small, medium, large
- **States:** Checked, disabled, hover effects

### 🖼️ Img ✅
- **Features:** Lazy loading, fallback images, object-fit options
- **States:** Loading, error, disabled
- **Features:** Border radius, hover effects, responsive scaling

### 🌄 HeroImage ✅
- **Features:** Background positioning, overlay effects, content alignment
- **Customization:** Custom overlays, responsive heights, clickable areas

### 🗂️ Card ✅
- **Variants:** default, outlined, elevated, filled
- **Features:** Hover effects, clickable states, custom padding
- **Sizes:** small, medium, large

---

**Author:** Guangxin Dai  
**Assignment:** Component Library with React and Storybook  
**Date:** July 2025

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
