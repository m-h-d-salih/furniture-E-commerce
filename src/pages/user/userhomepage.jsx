import { Link, useNavigate } from "react-router-dom";
import homeimg from "../../assets/home.jpg";
import { useContext } from "react";
import { MyContext } from "../../context/cartContext";
import UserFooter from "../../components/userFooter";
import './userhome.css';

const Userhome=()=>{
  const {products}=useContext(MyContext);
const  navigate=useNavigate();
const filteredproduct=products.filter((item,index)=>index<5)
// console.log(filteredproduct);
    return(
        <>
 <div
  className="bg-cover bg-center min-h-screen flex flex-col md:flex-row items-center flex-wrap justify-around text-center text-black bg-neutral-100 overflow-y-hidden"
  //   style={{ backgroundImage: `url(${homeimg})` }}
> 
  <div className=" ml-0 mb-0 md:ml-8 mt-8 md:mt-0 pb-52 w-full">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 ">Wooden Furniture</h1>
    <p className="font-bold text-black text-center text-xl">
      Discover the timeless elegance and craftsmanship of our exquisite wooden furniture collection.
    </p>
    <button className="bg-black mt-3 text-white p-2 rounded hover:bg-blue-700" onClick={()=>navigate(`/shop`)}>Shop Now!</button>
  </div>
  {/* <img src={homeimg} className="block  mb-20 md:mt-0 w-full md:w-1/2 object-cover" alt="Furniture" /> */}
</div>
<div className="flex flex-wrap justify-evenly items-starti w-full p-4 bg-neutral-100">
        {filteredproduct.map((item, index) => (
          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 " key={index}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden  flex flex-col justify-center">
              <img className="w-full h-40 object-fit" src={item.urlimg} alt="" />
              
             
            </div>
          </div>
        ))}
      </div>
        <UserFooter/>
      </>
    )
}
export default Userhome;