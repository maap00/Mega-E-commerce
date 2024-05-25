import { cartContext } from "./cartContext";
import { useState } from "react";

export default function cartProvider ({children}){
const [cart, setCart] = useState([])

const addToCart = product => setCart ([...cart, product])

const getTotal = () =>{
    const prices = cart.map(item => item.price)
    const total = prices.reduce((acc,current) => acc + current, 0)
    return total 
}

   return (
    <cartContext.Provider value={{cart, addToCart, getTotal}} >
        {children}
    </cartContext.Provider>
   ) 
}