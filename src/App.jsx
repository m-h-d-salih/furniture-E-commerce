import { useState } from "react";

import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Userregistrationform from "./user folder/user registration/user registration form";
import Userloginform from "./user folder/user login/userlogin";

import Navbar from "./user folder/components/navbar";
import UserShop from "./user folder/userShop/userShop";
import UserCart from "./userCart/userCart";
import Userhome from "./user folder/userhome/userhomepage";
import UserPayment from "./user folder/userPayment/userPayment";
import AdminSidebar from "./adminFolder/components/adminSidebar";
import AdminHome from "./adminFolder/components/adminHome";
import Userlist from "./adminFolder/components/userlist";

// import CartProvider from "./context/cartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CartProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="shop" element={<UserShop />} />
            <Route path="cart" element={<UserCart />} />
            <Route path="/" element={<Userhome />} />
          </Route>
          <Route path="signup" element={<Userregistrationform />} />
          <Route path="login" element={<Userloginform />} />
          <Route path="payment" element={<UserPayment />} />

          <Route path="admin" element={<AdminSidebar />}>
             <Route index element={<AdminHome />} />
             <Route path="userlist" element={<Userlist/>}/>
    </Route>
        </Routes>
      </BrowserRouter>
      {/* </CartProvider> */}
    </>
  );
}

export default App;
