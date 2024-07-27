import React, { useState, useContext } from "react";
import toast from "react-hot-toast";

import UserFooter from "../../components/userFooter";
import { MyContext } from "../../context/cartContext";


function UserShop() {
  const { addToCart ,products} = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState('');
  // const[products,setProducts]=useState([])
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
 

  
 

  const  filteredProduct= products.filter(item =>
   item.title ?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
       <div className="w-full flex justify-center mb-4 mt-24 ">
      <input
        type="text"
        placeholder=" Search..."
        className="items-center pl-3 w-1/2 sm:p-2 border border-gray-300 rounded max-w-md"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select
        className="ml-2 p-2 border border-gray-300 rounded"
        // value={selectedCategory}
        onChange={handleSearchChange}
      >
        <option value="">All</option>
        <option value="sofa">Sofa</option>
        <option value="bed">Bed</option>
        <option value="cabord">Cabord</option>
        <option value="chair">Chair</option>
      </select>
    </div>
      <div className="flex flex-wrap justify-evenly items-start  w-full p-4 bg-neutral-100">
        {filteredProduct.map((item, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2  hover:scale-x-105 hover:scale-105" key={index}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col justify-between">
              <img className="w-full h-40 object-cover" src={item.urlimg} alt="" />
              <div className="p-4 flex-grow">
                <div>{item.title}</div>
                <div className="text-red-600">{item.price} Rs</div>
              </div>
              <div className="p-4">
                <button className="bg-blue-700 text-white p-2 rounded w-full hover:bg-slate-900" onClick={() => {addToCart(item);toast(`item added to cart`)}}>
                  Add to cart 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <UserFooter/>
    </>
  );
}

export default UserShop;
