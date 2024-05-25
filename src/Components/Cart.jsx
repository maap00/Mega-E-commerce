import { useCart } from "../context/cartContext"
import { Link } from "react-router-dom"
import CartDetails from "./CartDetails"

export default function Cart(){
    const {cart, getTotal} = useCart()
    return(
        <div>
            {cart.map(item => (
            <CartDetails item={item} key={item.id}/>
            ))}
            {cart.length ?  <p style={{backgroundColor: 'white'}}><b>TOTAL: {getTotal()} $</b></p> : <h1 style={{color: 'white'}}>Empty car</h1>}
            {cart.length ?   <Link style={{color: 'white'}} to='/checkout'>Go to Checkout</Link>   :  ''}
                   
        </div>
    )
}
