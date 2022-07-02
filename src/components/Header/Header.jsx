import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

const Header = () => {
  const { cartContent } = useContext(Context);
  return (
    <div className="flex items-center justify-between border-slate-700 py-4 px-6">
      <Link to="/" className="font-sans text-4xl font-black text-white">
        Fs.
      </Link>
      <div className="flex space-x-3">
        <Link
          to="/cart"
          className="rounded-full border-2 py-2 px-6 font-black text-white"
        >
          CART ({cartContent.length})
        </Link>
      </div>
    </div>
  );
};

export default Header;
