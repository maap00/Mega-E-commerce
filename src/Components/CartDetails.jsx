import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CartDetails ({item}){
return(
    <Col>
    <Card  style={{ width: 'auto', marginTop:'10px', marginBottom: '10px',  padding: '0'}}>
        <Card.Body style={{display: 'flex', justifyContent: 'center'}}>
            <Row>
            <Col>
              <Card.Img variant="top" style={{width : '190px', borderRadius: '5px', border: '2px solid #232427' }} src={item.img} />
            </Col>
            <Col>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Card.Title>{item.price}$</Card.Title>
            </Col>
            </Row>                
        </Card.Body>
    </Card>
    </Col>  
)
}

export default CartDetails