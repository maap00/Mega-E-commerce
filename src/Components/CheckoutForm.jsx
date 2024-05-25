import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useCart } from '../context/cartContext';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';

function CheckoutForm() {
    
 const {cart, getTotal} = useCart()

 const handleSubmit = (e) =>{
    e.preventDefault()
    const [name, mail, phone] = e.target
    console.log(name.value, mail.value, phone.value)

    const order = {
        buyer: {
            name: name.value,
            mail: mail.value,
            phone: phone.value
        },
        total: getTotal(),
        Items: cart,
        date: serverTimestamp()
    }

    createOrder(order)
 } 

  return (
    <Form style={{backgroundColor: '#27415f', padding: '20px'}} onSubmit={handleSubmit}>     
        <Form.Group className="mb-3"  as={Col} controlId="formGridEmail">
          <Form.Label style={{color: 'white', justifyContent: 'left', display: 'flex'}}>Name</Form.Label>
          <Form.Control   placeholder="Enter name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label style={{color: 'white', justifyContent: 'left', display: 'flex'}}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label style={{color: 'white', justifyContent: 'left', display: 'flex'}}>Phone number</Form.Label>
            <Form.Control placeholder="Enter number"  required/>
        </Form.Group>     
      <Button variant="primary" type="submit">
        Create order
      </Button>
    </Form>
  );
}

export default CheckoutForm;