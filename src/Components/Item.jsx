import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Item ({product}){
return(
    <Col>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top"
            src={product.images[2]} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Card.Title>{product.price}$</Card.Title>
            <Button variant="primary" as={Link} to={`/item/${product.id}`} >Go Description</Button>
        </Card.Body>
    </Card>
    </Col>
)
}

export default Item