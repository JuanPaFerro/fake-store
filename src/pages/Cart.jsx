import React, { useContext } from "react";
import { Context } from "../Context";
import CartList from "../components/CartList/CartList";
import Header from "../components/Header/Header";

const Cart = () => {
  const { totalPrice, clearCart, cartContent } = useContext(Context);
  return (
    <div className="h-screen">
      <Header />
      <div className="text-center text-6xl font-black text-white w-full border-b-2 pb-2 ">
        <p>YOUR-CART</p>
      </div>
      <div className="flex w-11/12 mx-auto">
        {cartContent.length > 0 ? (
          <CartList />
        ) : (
          <div className="text-white py-8 w-1/2 flex flex-col justify-center items-center space-y-6">
            <p className="font-black text-2xl">Your cart is empty.</p>
            <p className="font-semibold">( Add some products before making a purchase. )</p>
          </div>
        )}
        <div className="flex flex-col h-[30rem] w-1/2 items-center py-8 justify-evenly">
          <div className="flex text-white text-2xl font-black space-x-2">
            <p>TOTAL-PRICE :</p>
            <p>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                cartContent.reduce(
                  (acc, el) =>
                    acc +
                    Math.round(
                      Math.round((el.price * el.amount * 10000) / 100) / 100
                    ),
                  0
                )
              )}
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-white px-2 border py-1 rounded-sm hover:text-black hover:bg-white"
          >
            Purchase All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
