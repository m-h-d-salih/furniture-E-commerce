import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const id = localStorage.getItem("id");
  const [isLogged, setIsLogged] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [orderlist, setOrderlist] = useState(["mhg"]);
  const [order, setOrder] = useState([]);
  const [productslist, setProductslist] = useState([]);
  const [products, setProducts] = useState([]);
  const [revenue, setRevenue] = useState(0);

  useEffect(()=>{
    axios.get(`http://localhost:8000/products`)
    .then(res=>setProducts(res.data))
      
    },[])
  useEffect(()=>{
    axios.get(`http://localhost:8000/user/${id}`)
    .then(res=>setUser(res.data))
      
    },[])
  useEffect(()=>{
    axios.get(`http://localhost:8000/user/${id}`)
    .then(res=>setOrder(res.data.order))
      
    },[])
    useEffect(() => {
      const totalRevenue = users.reduce((acc, user) => 
        acc + user.order?.reduce((orderAcc, order) => orderAcc + order.totalprice, 0) || 0
      , 0);
      setRevenue(totalRevenue);
    }, [users]);
    
    // console.log(revenue);
    
  
    // console.log(revenue);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/${id}`)
      .then((res) => {
        // console.log(res.data.cart);
        setCart(res.data.cart);
      })
      .catch((error) => console.log(error));
  }, []);
  const totalprice = cart.reduce((acc, item) => acc + item, 0);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/user`)
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/user`)
      .then((res) => {
        const mapedorder = res.data.filter((item) => item.order.length > 0);
        // console.log(mapedorder.length);
        setOrderlist(mapedorder);
      })
      .catch((error) => console.log("error"));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/products`)
      .then((res) => {
        setProductslist(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const removeproduct = (product) => {
    const removedproduct = productslist.filter((item) => item.id != product.id);
    axios.delete(`http://localhost:8000/products/${product.id}`)
    setProducts(removedproduct);
    // console.log(removedproduct);
  };
 



  useEffect(() => {
    if (id) {
      setIsLogged(true);
    }
  }, []);
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

    axios
      .patch(`http://localhost:8000/user/${id}`, { cart: updatedCart })
      .then((res) => console.log("done"))
      .catch((error) => console.log(error));
  };
  const removeCart = (product) => {
    const newList = cart.filter((item) => product.id !== item.id);
    console.log(newList);
    setCart(newList);
    axios
      .patch(`http://localhost:8000/user/${id}`, { cart: newList })
      .then((res) => console.log("done"))
      .catch((error) => console.log(error));
  };
  const updateQuantity = (product, num) => {
    if (num == -1 && product.quantity === 1) return;
    const newCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + num } : item
    );
    console.log(newCart);
    setCart(newCart);
  };
  const deleteuser = (userId) => {
    console.log(userId);
    // const deleteduser=users.filter(item=>item.id!=userId)
    axios
      .delete(`http://localhost:8000/user/${userId}`)
      .then((res) => console.log("done"))
      .catch((error) => console.log("error"));
    setUsers(users.filter((item) => item.id != userId));
  };
  const editProduct = () => {
    

  };

  // console.log(cart);

  return (
    <MyContext.Provider
      value={{
        cart,
        addToCart,
        removeCart,
        updateQuantity,
        setIsLogged,
        isLogged,
        users,
        orderlist,
        productslist,
        deleteuser,
        totalprice,
        removeproduct,
        products,
        setOrder,
        order,
        revenue,
        user
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default CartProvider;
