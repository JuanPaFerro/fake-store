import React from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Header from "../components/Header/Header";


const Product = () => {
  

  return (
    <div className="h-screen space-y-24">
      <Header />
      <ProductDetails/>
    </div>
  );
};

export default Product;
