import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useCart } from '../context/cartContext';
import ItemCount from './ItemCount';

function ItemDetails ({itemDetails}){
  const {cart, getTotal} = useCart()
return(
    <Col sm={12}>
    <Card style={{ width: '44rem' }}>
        <Card.Img variant="top"
            src={itemDetails?.img} />
        <Card.Body>
            <Card.Title>{itemDetails?.name}</Card.Title>
            <Card.Text>
                {itemDetails?.description}
            </Card.Text>
            <Card.Title>{itemDetails?.price}$</Card.Title>
            <ItemCount itemDetails={itemDetails}/>
            {cart.length ?   <Link style={{color: 'black', paddingTop : '10px'}} to='/cart'>My Orders</Link>   :  ''}
        </Card.Body>
    </Card>
    </Col>
)
}

export default ItemDetails