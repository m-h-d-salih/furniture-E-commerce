import React, { useContext } from 'react'
import { MyContext } from '../../context/cartContext';

function UserPayment() {
  const { cart } = useContext(MyContext);

  return (
    
    <div className="max-w-md mx-auto mt-20 p-4 border border-gray-300 rounded-md shadow-lg">
      <form>
        <h2 className='text-2xl font-bold mb-6 text-center'>Payment</h2>
        
        <div>
          <label className='mb-2 mt-2 block' htmlFor="accNumber">ACC NUMBER:</label>
          <input
            placeholder='ACC NUMBER'
            type="text"
            id="accNumber"
            name="accNumber"
            className="w-full px-3 py-2 mb-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className='mb-2 mt-2 block' htmlFor="price">TOTAL PRICE:</label>
        <div className='text-center text-2xl font-bold'>
        {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)} .Rs
        </div>
        </div>

        <div>
          <label className='mb-2 mt-2 block' htmlFor="securityCode">Security Code:</label>
          <input
            placeholder='Security Code'
            type="password"
            id="securityCode"
            name="securityCode"
            className="w-full px-3 py-2 mb-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <button
          className="w-full bg-red-600 text-white p-2.5 rounded mt-4 hover:bg-slate-900 font-medium"
          type="submit"
        >
          Pay Now!
        </button>
      </form>
    </div>
    
 


  )
}

export default UserPayment;
