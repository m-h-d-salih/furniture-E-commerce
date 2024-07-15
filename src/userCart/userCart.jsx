import React, { useContext, useState } from "react";
import { MyContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

function UserCart() {
  const { cart, removeCart, updateQuantity } = useContext(MyContext);
  const [quantity, setQuantity] = useState(1);
  const navigate=useNavigate();
 
  return (
    <div className="bg-neutral-100">
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div
            key={index}
            className=" flex justify-center flex-wrap mt-24 ml-4 mb-32 border-black bg-neutral-100"
          >
            <div className="w-full sm:w-1/2">
              <div className="w-full sm: bg-slate-100 shadow-md rounded-lg overflow-hidden h-full flex flex-col justify-between">
                <img
                  className=" w-full md:w-full h-40 object-contain mt-2"
                  src={item.urlimg}
                  alt=""
                />
                <div className="p-2">
                  <div className="font-bold">{item.title}</div>
                  <div className="">{item.description}</div>
                  <div className="text-red-600">
                    {item.price * item.quantity} Rs
                  </div>
                  <span>
                    {item.quantity} X {item.price}
                  </span>
                </div>
                <div className="flex justify-end p-2">
                  <button
                    className="bg-gray-200  text-dark p-2 rounded hover:bg-slate-900 hover:text-white"
                    onClick={() => updateQuantity(item, 1)}
                  >
                    +
                  </button>
                  <span className="m-1">Qty:{item.quantity}</span>
                  <button
                    className="bg-gray-200  text-dark p-2 rounded hover:bg-slate-900 hover:text-white mr-5"
                    onClick={() => updateQuantity(item, -1)}
                  >
                    -
                  </button>

                  <button
                    className="bg-red-500 text-white p-2 rounded hover:bg-slate-900 "
                    onClick={() => removeCart(item)}
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-red-600 text-2xl text-center mt-56">cart is Empty</p>
      )}

      <div className="fixed bottom-0 left-0 right-0 p-2 flex items-center justify-center bg-white shadow-md">
        <span className="mr-2 ">
          Total Price :
          {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)}
        </span>
        <button
          className="bg-orange-500 text-white p-2 rounded hover:bg-slate-900"
          onClick={() => {navigate('/payment')}}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default UserCart;
