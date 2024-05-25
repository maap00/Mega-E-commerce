import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartBuyer from './CartBuyer';


 function NavBar(){
    return(
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to='/' style={{textDecoration: 'overline'}}>MEGA e-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-self-center" style={{alignItems: 'center'}}>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <NavDropdown title="Catalog" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/'>All</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='category/accesories'>Accesories</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='category/game'>Games</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='category/console'>Consoles</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='category/phone'>Phone</NavDropdown.Item>                    
              </NavDropdown>
              <Nav.Link as={Link} to='/cart'>My Ordes</Nav.Link>
              <Nav.Link as={Link} to='/cart'><CartBuyer/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar