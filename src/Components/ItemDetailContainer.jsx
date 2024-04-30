import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetails from "./ItemDetails"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



export default function ItemDetailContainer(){

const [itemDetails, setItemsDetails] = useState([])

const{itemId} = useParams()

useEffect(()=>{
    fetch(`https://dummyjson.com/products/${itemId}`)
    .then(res => res.json())
    .then(data => setItemsDetails(data))
    //   .then(data=>console.log(data)) 
}, [itemId])

    return(
        <Container >
        <Row style={{paddingInline: '18rem', paddingTop: '1rem'}} >  
            <ItemDetails itemDetails={itemDetails}  />
        </Row>
       </Container>
    
    )
}