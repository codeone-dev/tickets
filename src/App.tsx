import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login.jsx";

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
