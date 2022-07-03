import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

const ProductCard = (product) => {
  const { addProductToCart } = useContext(Context);
  const handleAddProductToCart = () => {
    addProductToCart(product);
  };

  return (
    <div className="flex h-[30rem] w-10/12 flex-col space-y-2 lg:w-96 group relative rounded-sm overflow-hidden">
      <div className="hidden group-hover:flex flex-col border absolute h-full w-full bg-[rgba(0,0,0,.8)] justify-center items-center space-y-4">
        <Link
          to={`/product/${product.id}`}
          className="text-white border w-40 px-4 py-2 font-medium rounded-sm hover:bg-white hover:text-black"
        >{`VIEW DETAILS ->`}</Link>
        <button
          className="text-white border w-40 px-4 py-2 font-medium rounded-sm hover:bg-white hover:text-black"
          onClick={handleAddProductToCart}
        >{`+ ADD TO CART`}</button>
      </div>
      <div className="h-full border-b-2 bg-gradient-to-b from-black to-stone-900 overflow-auto">
        <img
          src={product.image}
          alt={product.description}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex justify-between text-xl font-black text-white">
        <p>{product.title}</p>
        <p>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
