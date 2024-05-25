import { Link } from 'react-router-dom'
import reactLogo from '../assets/car.svg'
import '../App.css'
import { useCart } from '../context/cartContext'

export default function CartBuyer(){
    const {cart} = useCart()
    return(
        <Link to='/cart'>
            <button type="button" className="btn position-relative"> 
                   <div className=''>
                        <a className='Count'  target="_blank">
                        {cart.length}
                        </a>
                        <img src={reactLogo} className="logo react" alt="React logo" />                
                   </div>  
            </button>
       </Link>
    )
}