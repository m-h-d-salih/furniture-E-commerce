import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../context/cartContext";
import axios from "axios";


function UserShop() {
  const { addToCart ,products} = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState('');
  // const[products,setProducts]=useState([])
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
 

  // const product = [
  //   {
  //     id:'1',
  //     urlimg: 'https://shop.gkwretail.com/cdn/shop/products/Designer-Sofa-Set-in-Fabric-L-Shape_2.png?v=1651899140',
  //     title: "Designer Sofa Set in Fabric",
  //     price: 800,
  //     category:'sofa'
  //     ,quantity:1,
  //     description:'Furniture refers to household equipment that serves various purposes. It can be made from materials such as wood, metal, plastics, marble, glass, fabrics, or related materials.'
  //   },
  //   {
  //     id:'2',
  //     urlimg: "https://images.woodenstreet.de/image/data/bed-with-storage-mdf/harper-bed-with-box-storage/exotic-teak/updated/1.jpg",
  //     title: "Harper Bed with Box ",
  //     price: 800,
  //     category:'bed'
  //     ,quantity:1,
  //     description:'Furniture refers to household equipment that serves various purposes. It can be made from materials such as wood, metal, plastics, marble, glass, fabrics, or related materials.'

  //   },
  //   {
  //     id:'3',
  //     urlimg: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?cs=srgb&dl=pexels-mikebirdy-116910.jpg&fm=jpg",
  //     title: "Stylish Living Room Setup",
  //     price: 800,
  //     category:'chair'
  //     ,quantity:1,
  //     description:'Furniture refers to household equipment that serves various purposes. It can be made from materials such as wood, metal, plastics, marble, glass, fabrics, or related materials.'

  //   },
  //   {
  //     id:'4',
  //     urlimg: "https://t4.ftcdn.net/jpg/02/57/64/17/360_F_257641770_4eAFTJQK3QiEoymyVYyKdXMBRocN1eKw.jpg",
  //     title: "Modern Office Desk",
  //     price: 800,
  //     category:'cabord'
  //     ,quantity:1,
  //     description:'Furniture refers to household equipment that serves various purposes. It can be made from materials such as wood, metal, plastics, marble, glass, fabrics, or related materials.'

  //   },
  // ];
// useEffect(()=>{
// axios.get(`http://localhost:8000/products`)
// .then(res=>setProducts(res.data))
  
// },[])
 

  const  filteredProduct= products.filter(item =>
   item.title ?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
       <div className="w-full flex justify-center mb-4 mt-24 ">
      <input
        type="text"
        placeholder="Search..."
        className="items-center w-1/2 sm:p-2 border border-gray-300 rounded max-w-md"
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
      <div className="flex flex-wrap justify-evenly items-start h-screen w-full p-4 bg-neutral-100">
        {filteredProduct.map((item, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2" key={index}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col justify-between">
              <img className="w-full h-40 object-cover" src={item.urlimg} alt="" />
              <div className="p-4 flex-grow">
                <div>{item.title}</div>
                <div className="text-red-600">{item.price} Rs</div>
              </div>
              <div className="p-4">
                <button className="bg-blue-700 text-white p-2 rounded w-full hover:bg-slate-900" onClick={() => addToCart(item)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserShop;
