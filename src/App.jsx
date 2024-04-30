import { useState } from 'react'
import ItemListContainer from './Components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import './App.css'
import NavBar from './Components/Navbar';
import ItemDetailContainer from './Components/ItemDetailContainer';

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
      </Routes>
    </BrowserRouter>  
  )
}

export default App
