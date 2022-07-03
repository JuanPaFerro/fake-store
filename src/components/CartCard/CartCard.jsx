import React, { useContext } from "react";
import { Context } from "../../Context";

const CartCard = ({product}) => {
  const { addProductToCart, removeProductFromCart } = useContext(Context);
  const handleAddProduct = () => {
    addProductToCart(product);
  };
  const handleSubstractProduct = () => {
    removeProductFromCart(product.id);
  };

  return (
    <div className="w-96 px-4 ">
      <div className="flex w-full space-x-4 border p-2">
        <div className="h-full w-2/5 bg-gradient-to-b from-black to-stone-900 object-cover">
          <img
            src={product.image}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="flex w-full flex-col space-y-1">
          <p className="font-black text-white">{product.title}</p>
          <div className="flex w-full space-x-4">
            <p className="font-black text-white">QUANTITY:</p>
            <div className="flex items-center space-x-2 rounded-full border px-2 text-xs font-black text-white">
              <button onClick={handleSubstractProduct}>-</button>
              <p>{product.amount}</p>
              <button onClick={handleAddProduct}>+</button>
            </div>
          </div>
          {product.category.includes("clothing") && (
            <div className="flex space-x-4 font-black text-white">
              <p>SIZE:</p>
              <div className="flex space-x-1">
                <button className="h-6 w-6 font-black hover:rounded-full hover:border">
                  S
                </button>
                <button className="h-6 w-6 font-black hover:rounded-full hover:border">
                  M
                </button>
                <button className="h-6 w-6 font-black hover:rounded-full hover:border">
                  L
                </button>
                <button className="h-6 w-6 font-black hover:rounded-full hover:border">
                  XL
                </button>
              </div>
            </div>
          )}
          <p className="font-black text-white">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
