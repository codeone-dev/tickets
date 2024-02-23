import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Login from "./pages/Login.js";
import Dashboard from "./pages/admin/Dashboard.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {
            // path="/:userID/dashboard"
          }
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
