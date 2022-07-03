import { useState, useEffect } from "react";

export const useGetOneProductById = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setLoading(false);
      });
  }, []);

  return { product, loading };
};
