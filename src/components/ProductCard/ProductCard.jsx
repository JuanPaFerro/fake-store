import React from "react";

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <div className="flex h-96 w-10/12 flex-col space-y-2 lg:w-3/12 lg:py-4 relative">
      <button className="absolute w-12 h-12 top-2 right-2 p-1 rounded-full overflow-hidden bg-black">
        <svg viewBox="0 0 172 172">
          <g
            fill="none"
            strokeMiterlimit={10}
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{
              mixBlendMode: "normal",
            }}
          >
            <path d="M0 172V0h172v172z" fill="#000" />
            <path
              d="M11.467 11.467a5.734 5.734 0 100 11.466h10.772c1.295 0 2.376.811 2.744 2.06l24.433 83.067c2.145 7.291 8.889 12.34 16.495 12.34h62.73c7.863 0 14.78-5.399 16.686-13.023v-.011l15.038-60.11a5.734 5.734 0 00-5.565-7.123H41.387L35.99 21.758h-.011c-1.788-6.078-7.41-10.291-13.74-10.291zm86 40.133a5.732 5.732 0 015.733 5.733v17.2h17.2a5.732 5.732 0 015.733 5.734A5.732 5.732 0 01120.4 86h-17.2v17.2a5.732 5.732 0 01-5.733 5.733 5.732 5.732 0 01-5.734-5.733V86h-17.2a5.732 5.732 0 01-5.733-5.733 5.732 5.732 0 015.733-5.734h17.2v-17.2a5.732 5.732 0 015.734-5.733zM68.8 131.867c-6.333 0-11.467 5.133-11.467 11.466 0 6.333 5.134 11.467 11.467 11.467s11.467-5.134 11.467-11.467-5.134-11.466-11.467-11.466zm57.333 0c-6.333 0-11.466 5.133-11.466 11.466 0 6.333 5.133 11.467 11.466 11.467 6.333 0 11.467-5.134 11.467-11.467s-5.134-11.466-11.467-11.466z"
              fill="#fff"
            />
          </g>
        </svg>
      </button>
      <div className="h-full border-b-2 bg-gradient-to-b from-black to-stone-900 overflow-auto">
        <img
          src={image}
          alt={description}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex justify-between text-xl font-black text-white">
        <p>{title}</p>
        <p>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
