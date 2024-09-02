import React, { useState, useContext } from "react";
import toast from "react-hot-toast";

import UserFooter from "../../components/userFooter";
import { MyContext } from "../../context/cartContext";
import ItemDetails from "./Modal/detailsOfTheItem";


function UserShop() {
  const { addToCart, products } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);



  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(item =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const categorychange=(event)=>{
    setSearchTerm(event.target.value);
  }
  const modalopen = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const modalclose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
 
// console.log(filteredProducts.length)
  return (
    <>
    {/* <div className=" bg-neutral-100"> */}

   
      <div className="w-full flex justify-center mb-4 mt-24  ">
        <input
          type="text"
          placeholder=" Search..."
          className="items-center pl-3 w-1/2 sm:p-2 border border-gray-300  max-w-md rounded-3xl"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          className="ml-2 p-1 border border-gray-300 rounded-3xl"
          onChange={categorychange}
        >
          <option value="">All</option>
          <option value="sofa">Sofa</option>
          <option value="bed">Bed</option>
          <option value="cabord">Cabord</option>
          <option value="chair">Chair</option>
        </select>
      </div>
      <div className="w-full bg-neutral-100">
      {filteredProducts.length===0?<div className="h-screen bg-neutral-400  text-5xl text-center font-bold"><p className="mt-14">No items</p></div>:(
          <div className="ml-10 mr-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4  " >
          {filteredProducts.map((item, index) => (
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between hover:scale-x-105 hover:scale-105 hover:duration-100 "  key={index}>
              <img className="w-full h-40 object-cover" src={item.urlimg} alt="" onClick={() => modalopen(item)} />
              <div className="p-4 flex-grow"  onClick={() => modalopen(item)}>
                <div>{item.title[0].toUpperCase()}{item.title.slice(1)}</div>
                <div className="text-black text-xl font-bold">$ {item.price} </div>
              </div>
              <div className="p-4 text-left items-end">
                <button className="bg-blue-700 text-white p-2 rounded hover:bg-slate-900" onClick={() => { addToCart(item); toast(`Item added to cart`) }}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        

)}
</div>
    
      {/* </div> */}
      <ItemDetails isOpen={isModalOpen} modalclose={modalclose} item={selectedItem} />
      {/* <UserFooter /> */}
    </>
  );
}

export default UserShop;
