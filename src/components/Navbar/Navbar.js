import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Milogo from '../../Assets/Logo/AndeanCeramics400x80.png';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink, Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MiNav(){
    return (
      <header >
        <Navbar className='navbar_container'  bg="light" expand="lg">
          <Container >
            <Navbar.Brand as={NavLink} to="/">
            <img 
                src={Milogo}
              className=" navbar_img d-inline-block align-top "
              alt="AndeanCeramics logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

              <Nav  variant="tabs" defaultActiveKey="/home">
  
                 <Nav.Item>
                  <Nav.Link   as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  as={Link} to="/productos">Products</Nav.Link>
                </Nav.Item>
              
              
                <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/category/Iglesias">Iglesias</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/Nacimientos">Nacimientos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/Lamparas">Lamparas</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/Arcas">Arcas</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/Variados">Variados</NavDropdown.Item>
           
              
                </NavDropdown>

                <Nav.Item>
                  <Nav.Link  as={Link} to="/cart"><CartWidget /></Nav.Link>
                </Nav.Item>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      

        
      </header>
    );
}

export default MiNav;