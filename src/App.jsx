import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <div className="h-full w-full bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
