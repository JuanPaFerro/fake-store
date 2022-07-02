import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-full w-full bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
