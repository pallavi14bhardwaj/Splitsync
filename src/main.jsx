// React imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Global styles
import "./index.css";

// Main application
import App from "./App.jsx";

// Global expense context
import ExpenseProvider from "./Context/ExpenseContext";

createRoot(document.getElementById("root")).render(

  <StrictMode>

    {/* Global state provider */}
    <ExpenseProvider>

      <App />

    </ExpenseProvider>

  </StrictMode>

);