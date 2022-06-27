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
    <div className="flex h-96 w-10/12 flex-col space-y-2 lg:w-3/12 lg:py-4">
      <div className="h-full border-b-2 bg-gradient-to-b from-black to-stone-900 overflow-auto">
        <img src={image} alt={description} className="h-full w-full object-cover object-top"/>
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
