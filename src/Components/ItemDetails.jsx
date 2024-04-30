import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState } from 'react'


function ItemDetails ({itemDetails}){
  const [count, setCount] = useState(0)
return(
    <Col sm={12}>
    <Card style={{ width: '44rem' }}>
        <Card.Img variant="top"
            src={itemDetails?.images} />
        <Card.Body>
            <Card.Title>{itemDetails?.title}</Card.Title>
            <Card.Text>
                {itemDetails?.description}
            </Card.Text>
            <Card.Title>{itemDetails?.price}$</Card.Title>
            <Button variant="success" as={Link}  onClick={() => setCount((count) => count + 1)}> Add Product {count}</Button>
        </Card.Body>
    </Card>
    </Col>
)
}

export default ItemDetails