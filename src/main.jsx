import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import { createRoot } from 'react-dom/client'
// import './styles/index.css'
import App from './App.jsx'
import { LaunchesProvider } from './context/LaunchesContext';



ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <LaunchesProvider>
    <App />
    </LaunchesProvider>
</React.StrictMode>
);
