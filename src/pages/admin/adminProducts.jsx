import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../context/cartContext";
import ProductModal from "./modal/productModal";
import ProductEditModal from "./modal/productEditmodal";


function AdminProducts() {
  
  const { removeproduct,products,editProduct } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);    
  const [iseditModalOpen, seteditModalOpen] = useState(false);    
  const [selectedProduct, setSelectedProduct] = useState(null);
    const initialValues = {
    urlimg: '',
    title: '',
    price: '',
    category: '',
    quantity: '',
    description: '',
  };
  // const[products,setProducts]=useState([])
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleEditClick = (product) => {
    setSelectedProduct(product);
    seteditModalOpen(true);
  };
 


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
       <button className="bg-black text-white p-2  rounded w-1/8 mr-7 hover:bg-blue-700" onClick={() => setModalOpen(true)}>
                  Add Products
                </button>
                {isModalOpen && (
        <ProductModal
          initialValues={initialValues}
          onClose={() => setModalOpen(false)}
        />
      )}

      <input
        type="text"
        placeholder=" Search..."
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
      <div className="flex flex-wrap justify-evenly items-start h-full w-full p-4 bg-neutral-100">
        {filteredProduct.map((item, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 " key={index}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col justify-between ">
              <img className="w-full h-40 object-cover" src={item.urlimg} alt="" />
              <div className="p-4 flex-grow">
                <div className="text-2xl font-bold ">{item.title}</div>
                <div className="h-40">{item.description}</div>
                <div className="text-red-600">{item.price} Rs</div>
              </div>
              <div className="p-4 flex justify-between">
                <button className="bg-black text-white p-2  rounded w-1/3 hover:bg-blue-700" onClick={() => {handleEditClick(item)}}>
                  Edit
                </button>
                {iseditModalOpen && selectedProduct && (
        <ProductEditModal
          onClose={() => seteditModalOpen(false)}
          product={selectedProduct}
        />
      )}
                <button className="bg-black text-white p-2 rounded w-1/3 hover:bg-blue-700 " onClick={() => removeproduct(item)}>
                  Delete
                </button>
              </div>
              {/* <div className="p-4">
               
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminProducts;
