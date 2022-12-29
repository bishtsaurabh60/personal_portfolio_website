import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeUiProvider from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeUiProvider>
      <App />
    </ThemeUiProvider>
  </React.StrictMode>
);