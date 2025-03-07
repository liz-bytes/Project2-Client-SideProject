import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { LaunchesProvider } from './context/LaunchesContext';

ReactDOM.createRoot(document.getElementById('root')).render(

<LaunchesProvider>
    <App />
</LaunchesProvider>

);