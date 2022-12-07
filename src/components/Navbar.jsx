import CartWidget from './CartWidget';
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './StyledComponents';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="bg-dark">
        <Wrapper>
            <Left>
                <Link to='/' className="text-decoration-none py-1"><img src="https://i.ibb.co/v3VhZFh/adidasblanco123-removebg-preview.png" width="75px" alt="" /></Link>
            </Left>
            <Center>
              <Link to='/category/1' className="text-decoration-none text-white"><MenuItem>Remeras</MenuItem></Link>
              <Link to='/category/2' className="text-decoration-none text-white"><MenuItem>Pantalones</MenuItem></Link>
              <Link to='/category/3' className="text-decoration-none text-white"><MenuItem>Camperas</MenuItem></Link>  
              <Link to='/category/4' className="text-decoration-none text-white"><MenuItem>Accesorios</MenuItem></Link>                  
            </Center>
            <Right>
              <MenuItem className="text-secondary">REGISTRARSE</MenuItem>
              <MenuItem className="text-secondary">INICIAR SESIÓN</MenuItem>
              <MenuItem><CartWidget /></MenuItem>
            </Right>
            </Wrapper>
        </nav>
    )
}

export default Navbar;