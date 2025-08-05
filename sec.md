# FusionBowl - A Modern React Food Delivery App

Welcome to **FusionBowl**, a feature-rich food delivery application built with React. This project demonstrates a comprehensive understanding of modern frontend development, showcasing advanced concepts like state management with Redux Toolkit, performance optimization, and a responsive user interface.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Technologies Used](#technologies-used)
4. [Architecture and Design](#architecture-and-design)
5. [Getting Started](#getting-started)
6. [Available Scripts](#available-scripts)
7. [Project Structure](#project-structure)
8. [Future Enhancements](#future-enhancements)

## Project Overview

FusionBowl is a single-page application (SPA) that emulates a food ordering platform like Swiggy or Zomato. It allows users to browse restaurants, view menus, add items to their cart, and manage their orders. The application is designed with a focus on clean code, scalability, and performance.

## Key Features

- **Dynamic Restaurant Listing**: Fetches and displays a list of restaurants from a live API.
- **Search and Filter**: Users can search for restaurants by name and filter them based on ratings.
- **Restaurant Menu**: Detailed menu page for each restaurant, with categorized item listings.
- **State Management with Redux Toolkit**: Centralized state management for the shopping cart, including adding, removing, and clearing items.
- **Accordion-style Menu**: Menu categories are displayed in an accordion-style, allowing users to expand and collapse sections.
- **Lazy Loading**: Components like `Grocery`, `About`, and `Cart` are lazy-loaded to improve initial load time.
- **Shimmer UI**: A shimmer effect is displayed while fetching data to enhance user experience.
- **Higher-Order Components (HOCs)**: Used to add promotional labels to restaurant cards.
- **Custom Hooks**:
  - `useFetchRestaurant`: Fetches restaurant data.
  - `useFetchRestaurantMenu`: Fetches restaurant menu data.
  - `useInternetStatus`: Checks for online/offline status.
- **Context API**: Manages user-related data, such as login information.
- **Responsive Design**: The UI is designed to be responsive and works well on different screen sizes.

## Technologies Used

- **React**: Core library for building the user interface.
- **React Router**: For client-side routing and navigation.
- **Redux Toolkit**: For efficient and predictable state management.
- **Parcel**: For bundling and development server with HMR.
- **Tailwind CSS**: For utility-first styling.
- **Jest**: For testing (setup is in place).

## Architecture and Design

- **Component-Based Architecture**: The application is built using a modular, component-based architecture, promoting reusability and maintainability.
- **Separation of Concerns**: The code is well-organized, with a clear separation between UI components, state management logic, and utility functions.
- **Single Responsibility Principle**: Each component and function has a single, well-defined responsibility.
- **Custom Hooks for Reusability**: Custom hooks are used to encapsulate and reuse stateful logic.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your-username/FusionBowl.git
   ```
2. Navigate to the project directory
   ```sh
   cd FusionBowl
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open [http://localhost:1234](http://localhost:1234) to view it in the browser.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm test`: Launches the test runner in the interactive watch mode.

## Project Structure

```
FusionBowl/
├── .gitignore
├── .postcssrc
├── index.css
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.js
    ├── Components/
    │   ├── About.js
    │   ├── Body.js
    │   ├── Cart.js
    │   ├── Contact.js
    │   ├── Error.js
    │   ├── Grocery.js
    │   ├── Header.js
    │   ├── ItemList.js
    │   ├── RestaurantCard.js
    │   ├── RestaurantCategory.js
    │   ├── RestaurantMenu.js
    │   ├── Shimmer.js
    │   ├── User.js
    │   ├── UserCard.js
    │   └── UserClass.js
    └── utils/
        ├── appStore.js
        ├── cartSlice.js
        ├── constants.js
        ├── UserContext.js
        ├── useFetchRestaurant.js
        ├── useFetchRestaurantMenu.js
        └── useInternetStatus.js
```

## Future Enhancements

- **User Authentication**: Implement user login and registration.
- **Order Placement**: Add functionality to place orders.
- **Payment Gateway Integration**: Integrate a payment gateway to complete the order flow.
- **Improved Testing**: Add more comprehensive tests for components and Redux logic.
- **Backend API**: Develop a dedicated backend API for more robust data management.
