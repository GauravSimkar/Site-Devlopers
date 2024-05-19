import { createContext, useContext, useEffect, useState } from "react";
import { Authcontext } from "./Authcontext";

export const Cartcontext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart:()=>{}
});

const CartContextProvider = ({ children }) => {
  const [auth]=useContext(Authcontext);
  const [cart, setCart] = useState([]);
  const [saveCart,setsaveCart]=useState(false);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartState(cartData);
  }, []);

  const updateCartState = (cartData, savedQuantity, savedTotalCost) => {
    setCart(cartData);
  };

  const saveCartData = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  if(saveCart){
     saveCartData();
     setsaveCart(false);
  }

  const addToCart = (name, price, description, photo_id) => {
    if(auth?.user){
    const updatedCart = [...cart, {
      user_id:auth?.user?.id,
      name,
      description,
      price,
      photo_id,
      id:Math.random().toString(36).substring(2)
    }];
    setCart(updatedCart);
    setsaveCart(true);
  }
  };

  const removeFromCart=(id)=>{
    let updatedCart=[];
    let  updatedTotalCost;
    cart.forEach((o)=>{
     if(o.id!==id)
     updatedCart.push(o);
    });
    setsaveCart(true);
  }

  const renderCart=cart.filter((cartitem)=>auth?.user&&auth?.user?.id===cartitem.user_id);
  return (
    <Cartcontext.Provider value={{
      renderCart,
      addToCart,
      removeFromCart
    }}>
      {children}
    </Cartcontext.Provider>
  );
}

export default CartContextProvider;
