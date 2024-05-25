import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetails from "./ItemDetails"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { getItem } from "../firebase/db";


export default function ItemDetailContainer(){

const [itemDetails, setItemsDetails] = useState([])

const{itemId} = useParams()

useEffect(()=>{

    const getAndSetItemUnit = async () =>{
        const item = await getItem(itemId)
        setItemsDetails(item)        
    }
    getAndSetItemUnit()

}, [itemId])

    return(
        <Container >
        <Row style={{paddingInline: '18rem', paddingTop: '1rem'}} >  
            <ItemDetails itemDetails={itemDetails}  />
        </Row>
       </Container>
    
    )
}