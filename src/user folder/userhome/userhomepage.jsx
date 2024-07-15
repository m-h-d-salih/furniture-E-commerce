import { Link } from "react-router-dom";
import homeimg from "../../assets/home.jpg";
import './banner.css';

const Userhome=()=>{
    return(
        <>
 <div
  className="bg-cover bg-center min-h-screen flex flex-col md:flex-row items-center flex-wrap justify-around text-center text-black bg-neutral-100 overflow-y-hidden"
  //   style={{ backgroundImage: `url(${homeimg})` }}
> 
  <div className=" ml-0 mb-0 md:ml-8 mt-8 md:mt-0 pb-52">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Wooden Furniture</h1>
    <p className="text-base md:text-lg max-w-lg font-bold text-black ">
      Discover the timeless elegance and craftsmanship of our exquisite wooden furniture collection.
    </p>
  </div>
  <img src={homeimg} className="block  mb-20 md:mt-0 w-full md:w-1/2 object-cover" alt="Furniture" />
</div>


      </>
    )
}
export default Userhome;