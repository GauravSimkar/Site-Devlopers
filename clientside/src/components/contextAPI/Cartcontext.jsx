import { createContext, useEffect, useState } from "react";

export const Cartcontext = createContext({
  cart: [],
  quantity: 0,
  totalCost: 0,
  addToCart: () => {},
  removeFromCart:()=>{}
});

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [saveCart,setsaveCart]=useState(false);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const savedQuantity = JSON.parse(localStorage.getItem('quantity')) || 0;
    const savedTotalCost = JSON.parse(localStorage.getItem('totalCost')) || 0;

    updateCartState(cartData, savedQuantity, savedTotalCost);
  }, []);

  const updateCartState = (cartData, savedQuantity, savedTotalCost) => {
    setCart(cartData);
    setQuantity(savedQuantity);
    setTotalCost(savedTotalCost);
  };

  const saveCartData = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantity', JSON.stringify(quantity));
    localStorage.setItem('totalCost', JSON.stringify(totalCost));
  };

  if(saveCart){
     saveCartData();
     setsaveCart(false);
  }

  const addToCart = (name, price, description, photo_id) => {
    const updatedCart = [...cart, {
      name,
      description,
      price,
      photo_id,
      id:Math.random().toString(36).substring(2)
    }];

    const updatedQuantity = quantity + 1;
    const updatedTotalCost = totalCost + price;

    setCart(updatedCart);
    setQuantity(updatedQuantity);
    setTotalCost(updatedTotalCost);
    setsaveCart(true);
  };

  const removeFromCart=(id)=>{
    let updatedCart=[];
    let  updatedTotalCost;
    cart.forEach((o)=>{
     if(o.id!==id)
     updatedCart.push(o);
    else updatedTotalCost = totalCost - o.price;
    });
    const updatedQuantity = quantity - 1;
    setCart(updatedCart);
    setQuantity(updatedQuantity);
    setTotalCost(updatedTotalCost);
    setsaveCart(true);
  }

  return (
    <Cartcontext.Provider value={{
      cart,
      quantity,
      totalCost,
      addToCart,
      removeFromCart
    }}>
      {children}
    </Cartcontext.Provider>
  );
}

export default CartContextProvider;
