import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  getItemsCategory } from '../firebase/db';
  
function ItemListContainer() {

const [items, setItems] = useState([])
const {id} = useParams()
console.log(id)


useEffect(() => { 
    const getAndSetItems = async () =>{
        const products = await getItemsCategory(id)
        setItems(products)
    }
    getAndSetItems()    
    },[id])       
    return(
        <Container fluid>
         <Row style={{paddingInline: '10rem', backgroundColor: '#27415f', paddingTop: '20px'}}>                
           <ItemList products={items}/>
         </Row>
        </Container>
    )
}

export default ItemListContainer