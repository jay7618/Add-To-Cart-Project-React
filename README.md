# ShopVibe

ShopVibe is a modern e-commerce storefront built with React, Vite, Bootstrap, and React Router. It features a responsive shopping experience with product discovery, filtering, cart functionality, and a simple authentication flow.

## Overview

This project is a front-end demo for an online store with:

- Product catalog browsing
- Search, category filtering, and sorting
- Pagination for product listings
- Protected pages for authenticated users
- Login and signup flows
- Shopping cart with quantity controls and summary
- Checkout modal with shipping address form
- Responsive layout for desktop and mobile

## Tech Stack

- React 19
- Vite
- JavaScript
- Bootstrap 5
- React Router DOM
- Font Awesome icons

## Features

### Storefront

- Hero section and promotional layout
- Responsive product cards with pricing and categories
- Search across product name, category, and description
- Filter sidebar for category and sort options
- Page-based product navigation

### Authentication

- Login and signup pages
- Protected routes for home and cart screens
- User session stored in localStorage

### Cart and Checkout

- Add/remove products to cart
- Adjust item quantity
- Order summary with item totals and shipping information
- Checkout address modal with validation
- Checkout success state after placing an order

## Project Structure

```bash
src/
├── components/
│   ├── FilterSidebar.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Pagination.jsx
│   ├── ProductCard.jsx
│   └── Toast.jsx
├── context/
│   └── AppContext.jsx
├── data/
│   └── products.js
├── pages/
│   ├── About.jsx
│   ├── Cart.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Services.jsx
│   └── Signup.jsx
├── App.jsx
├── index.css
├── main.jsx
└── assets/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically:

```bash
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Notes

- This is a front-end demo project; authentication and cart state are mock implementations using browser localStorage.
- The app is designed to showcase e-commerce UI and user flow rather than a full backend-integrated store.
- Product data is defined in `src/data/products.js` and can be customized easily.

## Scripts

```bash
npm run dev     # starts the Vite development server
npm run build   # builds the app for production
npm run preview # previews the production build locally
npm run lint    # runs ESLint checks
```

## License

This project is for educational/demo purposes and does not include a formal license file.

