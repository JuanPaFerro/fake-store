import React from "react";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";
import ProductCard from "../ProductCard/ProductCard";
const ProductsList = () => {
  const { products, loading } = useGetAllProducts();

  if (loading) return;
  return (
    <div className="flex flex-col items-center py-8 space-y-8 lg:flex-row lg:space-x-4 lg:flex-wrap lg:justify-evenly lg:space-y-0">
      {products?.map((product) => (
        <ProductCard key={product.id} {...product}></ProductCard>
      ))}
    </div>
  );
};

export default ProductsList;
