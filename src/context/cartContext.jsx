import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const id = localStorage.getItem("id");
  const [isLogged,setIsLogged]=useState(false );
  const [userlist,setUserlist]=useState([]);
  const [orderlist,setOrderlist]=useState(['mhg']);
  const [productslist,setProductslist]=useState([]);
 

  useEffect(() => {
   
      axios.get(`http://localhost:8000/user/${id}`).then((res) => {
        // console.log(res.data.cart);
        setCart(res.data.cart);
      })
      .catch(error=>console.log(error));
   
  }, []);

  useEffect(() => {
   
      axios.get(`http://localhost:8000/user`).then((res) => {
        // console.log(res.data);
        setUserlist(res.data);
      })
      .catch(error=>console.log(error));
   
  }, []);
  useEffect(() => {
   
      axios.get(`http://localhost:8000/user`).then((res) => {
        const mapedorder=res.data.filter(item=>item.order.length>0);
        // console.log(mapedorder.length);
        setOrderlist(mapedorder);
      
      })
      .catch(error=>console.log('error'));
   
  }, []);
  useEffect(() => {
   
      axios.get(`http://localhost:8000/products`).then((res) => {
        setProductslist(res.data);
       
      })
      .catch(error=>console.log(error));
      
  }, []);
  
  // const login=()=>{
  //   setIsLogged(true)
  //   console.log(isLogged);
  // }
  // const logout=()=>{
  //   setIsLogged(false)
  //   console.log(isLogged);
  // }

  useEffect(()=>{
    if(id){
      setIsLogged(true)
    }
  },[])
  const addToCart = (item) => {
    const newCart = (prevcart) => {
      let flag = -1;
      prevcart.forEach((cartItem, index) => {
        if (cartItem.id === item.id) flag = index;
      });
      if (flag >= 0) {
        // console.log(flag);
        prevcart[flag] = {
          ...prevcart[flag],
          quantity: prevcart[flag].quantity + 1,
        };
        return prevcart;
      }
      return [...prevcart, item];
    };
    const updatedCart = newCart(cart);
    setCart(updatedCart);
    
    axios.patch(`http://localhost:8000/user/${id}`, {cart :updatedCart})
    .then(res=>console.log('done'))
    .catch(error=>console.log(error))
  };
  const removeCart = (product) => {
    const newList = cart.filter((item) => product.id !== item.id);
    console.log(newList);
    setCart(newList);
    axios.patch(`http://localhost:8000/user/${id}`, {cart :newList})
    .then(res=>console.log('done'))
    .catch(error=>console.log(error))

  };
  const updateQuantity = (product, num) => {
    if (num == -1 && product.quantity === 1) return;
    const newCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + num } : item
    );
    console.log(newCart);
    setCart(newCart);
    
  };

  // console.log(cart);

  return (
    <MyContext.Provider value={{ cart, addToCart, removeCart, updateQuantity,setIsLogged,isLogged,userlist,orderlist,productslist }}>
      {children}
    </MyContext.Provider>
  );
};

export default CartProvider;
