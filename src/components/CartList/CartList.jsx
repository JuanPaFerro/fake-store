import React, { useContext } from "react";
import { Context } from "../../Context";
import CartCard from "../CartCard/CartCard";

const CartList = () => {
  const { cartContent } = useContext(Context);
  return (
    <div className="flex flex-col space-y-4 w-1/2 h-[30rem] overflow-scroll items-center py-8">
      {cartContent.map((el) => (
        <CartCard data={el} key={el.id} />
      ))}
    </div>
  );
};

export default CartList;
