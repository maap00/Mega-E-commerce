import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


 function NavBar(){
    return(
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to='/' style={{textDecoration: 'overline'}}>MEGA e-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <NavDropdown title="Catalog" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/'>All</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='category/smartphones'>Smartphones</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='category/laptops'>Laptops</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='category/fragrances'>Fragrances</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='category/skincare'>Skincare</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='category/groceries'>Groceries</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='category/home-decoration'>home-decoration</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='/home'>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar