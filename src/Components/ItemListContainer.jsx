import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
  
function ItemListContainer() {

const [items, setItems] = useState([])

const {id} = useParams()
console.log(id)

// https://fakestoreapi.com/docs

useEffect(() => {  
    if(id){
        fetch(`https://dummyjson.com/products/category/${id}`)
        .then(res=>res.json()) 
        .then(data=>setItems(data.products))                      
        // .then(data=>console.log(data))   
    }  
    else{
        fetch('https://dummyjson.com/products/')
        .then(res=>res.json()) 
        .then(data=>setItems(data.products))  
        // .then(data=>console.log(data))   
       }

    },[id])   

    // fetch('https://api.escuelajs.co/api/v1/products')
        // fetch('https://api.escuelajs.co/api/v1/products/?categoryId=2')
    
    return(
        <Container fluid>
         <Row style={{paddingInline: '18rem'}}>                
           <ItemList products={items}/>
         </Row>
        </Container>
    )
}

export default ItemListContainer