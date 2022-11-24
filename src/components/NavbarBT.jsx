import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavbarBT = () => {
    return (
    <Navbar bg="primary" variant="dark">
    <Container className="container-fluid">
      <Navbar.Brand href="#index" className="ps-4 fs-2 navbar fixed-top">TiendaOnline</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link className="fs-5 px-3 text-white" href="#Nike">Nike</Nav.Link>
          <Nav.Link className="fs-5 px-3 text-white" href="#Adidas">Adidas</Nav.Link>
          <Nav.Link className="fs-5 px-3 text-white" href="#Puma">Puma</Nav.Link>   
      </Nav>
      <Nav>
        <Nav.Link href="#carrito"> <CartWidget/> </Nav.Link> 
      </Nav>
    </Container>
    </Navbar>
    
    )
}

export default NavbarBT;