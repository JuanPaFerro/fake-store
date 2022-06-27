import React from "react";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";
import ProductCard from "../ProductCard/ProductCard";
const ProductsList = () => {
  const { products, loading } = useGetAllProducts();

  if (loading) return;

  return <ul>{products?.map(product => <ProductCard key={product.id} {...product}></ProductCard> )}</ul>;
};

export default ProductsList;
