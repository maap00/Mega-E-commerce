import { useState } from 'react'
import ItemListContainer from './Components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import './App.css'
import NavBar from './Components/Navbar'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Cart from './Components/Cart'
import CheckoutForm from './Components/CheckoutForm'

function App() {
  const [count, setCount] = useState(0)

  return (   
    <BrowserRouter>
      <NavBar/>
      <Routes>  
          <Route path='/'  element={  <ItemListContainer/>} />   
          <Route path='/category/:id'  element={  <ItemListContainer/>} />   
          <Route path='/item/:itemId'  element={  <ItemDetailContainer/>} />   
          <Route path='/home' element={  <Home/>} />   
          <Route path='/cart' element={  <Cart/>} /> 
          <Route path='/checkout' element={  <CheckoutForm/>} /> 
      </Routes>
    </BrowserRouter>  
  )
}

export default App
