import React from "react";

function App() {
  return (
    <div className="h-full w-full bg-black">
      <div className="flex items-center justify-between border-slate-700 py-4 px-6">
        <div className="font-sans text-4xl font-black text-white">b.</div>
        <div className="flex space-x-3">
          <div className="rounded-full border-2 py-2 px-6 font-black text-white">
            CART (1)
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-6xl font-black text-white">BASEMENT</p>
        <div className="flex items-center">
          <p className="rounded-full border-2 px-4 text-xs font-bold text-white">
            EST
          </p>
          <p className="text-6xl font-black text-white">SUPPLY</p>
          <p className="rounded-full border-2 px-3.5 text-xs font-bold text-white">
            2K19
          </p>
        </div>
      </div>
      <div className="relative mt-2 flex h-8 overflow-hidden border-y-2">
        <div className="animate-infinite-scroll absolute flex justify-center whitespace-nowrap">
          <p className="text-xl font-black text-white">
            - A man can't have enough basement. swag
          </p>
        </div>
        <div className="animate-infinite-scroll2 absolute left-full flex justify-center whitespace-nowrap">
          <p className="text-xl font-black text-white">
            - A man can't have enough basement. swag
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        {/* <!-- cards --> */}
        <div className="flex h-96 w-11/12 flex-col">
          <div className="h-full border-b-2 bg-gradient-to-b from-black to-stone-900"></div>
          <div className="flex justify-between text-xl font-black text-white">
            <p>Black t-shirt</p>
            <p>$7.95</p>
          </div>
        </div>
        <div className="flex h-96 w-11/12 flex-col">
          <div className="h-full border-b-2 bg-gradient-to-b from-black to-stone-900"></div>
          <div className="flex justify-between text-xl font-black text-white">
            <p>Black t-shirt</p>
            <p>$7.95</p>
          </div>
        </div>
        {/* <!-- end of cards --> */}
        <div className="mt-12 flex flex-col">
          <div className="flex justify-between">
            <div className="w-2/5 border"></div>
            <p className="text-6xl font-black text-white">WEAR</p>
          </div>
          <p className="text-6xl font-black text-white">EVERYDAY</p>
        </div>
      </div>
      {/*cart*/}
      <div className="hidden absolute top-0 z-10 flex h-screen w-full flex-col items-center bg-black">
        <div className="flex h-fit w-full justify-end px-4 font-black text-white">
          {"-> "}CLOSE
        </div>
        <div className="flex flex-col text-8xl font-black text-white">
          <p>YOUR</p>
          <p>CART</p>
        </div>
        <div className="w-full py-8 px-4">
          <div className="flex h-36 w-full space-x-4 border p-2">
            <div className="h-full w-2/5 bg-gradient-to-b from-black to-stone-900"></div>
            <div className="flex w-full flex-col space-y-1">
              <p className="font-black text-white">BLACK T-SHIRT</p>
              <p className="text-xs text-gray-400">
                Unisex Basic Softstyle T-Shirt
              </p>
              <div className="flex w-full space-x-4">
                <p className="font-black text-white">QUANTITY:</p>
                <div className="flex items-center space-x-2 rounded-full border px-2 text-xs font-black text-white">
                  <button>-</button>
                  <p>3</p>
                  <button>+</button>
                </div>
              </div>
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
              <p className="font-black text-white">$12.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
