# Redux Counter Application

A simple yet powerful counter application built with React and Redux to demonstrate core Redux concepts and state management.

## Features

-  Increment counter
-  Decrement counter
-  Reset counter
-  Increment by custom amount
-  State management with Redux
-  Clean and modern UI
-  Real-time state updates

## Tech Stack

-  React 18+
-  Redux Toolkit
-  Vite
-  CSS Modules
-  ESLint for code quality

## Getting Started

### Prerequisites

-  Node.js (version 14 or higher)
-  npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/shivraj-roy/redux-counter.git
cd redux-counter
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Redux Implementation

This project demonstrates several key Redux concepts:

1. **Store**: Central state management for the counter value
2. **Actions**:

   -  INCREMENT
   -  DECREMENT
   -  RESET
   -  INCREMENT_BY_AMOUNT

3. **Reducers**: Pure functions handling state updates
4. **Selectors**: Efficient state access
5. **Dispatch**: Triggering state changes

## Project Structure

```
src/
├── components/         # React components
├── store/             # Redux store configuration
│   ├── index.js       # Store setup
│   └── counterSlice.js# Counter reducer and actions
├── App.jsx            # Main application component
└── main.jsx          # Application entry point
```

## Learning Objectives

This project serves as a practical example for learning:

-  Redux store setup and configuration
-  Creating and managing reducers
-  Dispatching actions
-  Connecting React components to Redux
-  State management best practices
-  Redux DevTools usage

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for learning and development.
