// import { createContext, useState, useEffect } from "react";
// import useFetch from "../hooks/useFetch.js";

// const LaunchesContext = createContext();
//Global State for Launches

// //Example
// import React from "react";
// const LaunchDetailsContext = React.createContext({details: {}, setDetails: () => {}})
// export default LaunchDetailsContext;


// Understanding createContext in React

// createContext is part of React's Context API, which allows you to share state across components without prop drilling (passing props through multiple components manually).
//  When to Use createContext

// Use createContext when:

//     Multiple components need access to the same state (e.g., user authentication, themes, API data).
//     Avoiding prop drilling (passing data through many components).
//     Centralizing state management without using a third-party library like Redux.