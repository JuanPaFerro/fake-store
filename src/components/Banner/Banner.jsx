import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-6xl font-black text-white">F-STORE</p>
        <div className="flex items-center">
          <p className="rounded-full border-2 px-4 text-xs font-bold text-white">
            NTH
          </p>
          <p className="text-6xl font-black text-white">SUPPLY</p>
          <p className="rounded-full border-2 px-3.5 text-xs font-bold text-white">
            2K22
          </p>
        </div>
      </div>
      <div className="relative mt-2 flex h-8 overflow-hidden border-y-2">
        <div className="animate-infinite-scroll absolute flex justify-center whitespace-nowrap">
          <p className="text-xl font-black text-white">
            - Find your unique style. swag
          </p>
        </div>
        <div className="animate-infinite-scroll2 absolute left-full flex justify-center whitespace-nowrap">
          <p className="text-xl font-black text-white">
            - Find your unique style. swag
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
