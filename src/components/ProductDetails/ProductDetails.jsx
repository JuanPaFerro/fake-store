import React, { useContext } from "react";
import { Context } from "../../Context";
import { useParams } from "react-router-dom";
import { useGetOneProductById } from "../../hooks/useGetOneProductById";

const ProductDetails = () => {
  const params = useParams();
  const { loading, product } = useGetOneProductById(params.productId);
  const { addProductToCart } = useContext(Context);
  const handleAddProductToCart = () => {
    addProductToCart(product);
  };
  if (loading) return;
  return (
    <div className="flex flex-col w-full text-white items-center space-y-24">
      <p className="text-center font-black text-4xl">PRODUCT DETAILS :</p>
      <div className=" flex justify-center border p-4 rounded-sm">
        <div className="h-96 overflow-hidden rounded-sm">
          <img
            src={product.image}
            alt="product image"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col space-y-10 w-[40rem] px-12">
          <p className="font-black text-2xl">{product.title}</p>
          <div className="flex space-x-20 font-bold">
            <div className="flex space-x-2">
              <p>PRICE :</p>
              <p>
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.price)}
              </p>
            </div>
            <div className="flex space-x-2">
              <p>CATEGORY :</p>
              <p>{product.category}</p>
            </div>
          </div>
          <p className="font-medium">{product.description}</p>
          <p className="font-black">{`RATE : ${product.rating?.rate} (${product.rating?.count} votes)`}</p>
          <button
            className="border px-4 py-2 rounded-sm w-fit font-medium hover:bg-white hover:text-black transition"
            onClick={handleAddProductToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
