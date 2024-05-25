import { useState } from "react"
import { useCart } from '../context/cartContext';


export default function ItemCount ({itemDetails}){
    const [quantity, setQuantity] = useState(0)
    const {addToCart} = useCart()
    
    const add = () =>{
        setQuantity(quantity + 1)
    }

    const remove = () => {
        if(quantity == 0) {return 0}
        setQuantity(quantity - 1)
    }

    return(
        <div>
            <p>Unid:{quantity}</p>
            <button type='buttom' onClick={add}> + </button>
            <button type='buttom' onClick={remove}> - </button>
            <button variant="success"  onClick={() => addToCart({...itemDetails,quantity})}> Add Product</button>
        </div>
    )
}