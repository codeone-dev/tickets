import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";

// components

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
