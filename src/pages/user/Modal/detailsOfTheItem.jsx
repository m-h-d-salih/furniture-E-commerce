import React, { useContext } from "react";
import { MyContext } from "../../../context/cartContext";
import toast from "react-hot-toast";

function ItemDetails({ isOpen, modalclose, item }) {
  const { addToCart } = useContext(MyContext);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={modalclose}
    >
      <div className="bg-white w-full max-w-3xl mx-4 md:mx-auto rounded-lg overflow-hidden flex shadow-lg">
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src={item.urlimg}
            alt={item.title}
          />
        </div>

        <div className="w-1/2 p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {item.title[0].toUpperCase()}
              {item.title.slice(1)}
            </h2>
            <p className="text-lg text-gray-700 mb-4">${item.price}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>

          <div className="flex justify-between mt-auto">
            <button
              className="  bg-blue-700 text-white py-2 px-4 rounded hover:bg-slate-900"
              onClick={() => {
                addToCart(item);
                toast(`Item added to cart`);
                modalclose();
              }}
            >
              Add to Cart
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={modalclose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
