import React, { useContext } from "react";
import { Context } from "../../Context";

const Header = () => {
  const { cartContent } = useContext(Context);
  return (
    <div className="flex items-center justify-between border-slate-700 py-4 px-6">
      <div className="font-sans text-4xl font-black text-white">Fs.</div>
      <div className="flex space-x-3">
        <div className="rounded-full border-2 py-2 px-6 font-black text-white">
          CART ({cartContent.length})
        </div>
      </div>
    </div>
  );
};

export default Header;
