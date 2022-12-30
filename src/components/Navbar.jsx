import CartWidget from "./CartWidget";
import { Wrapper, MenuItem, Left, Center, Right } from "./StyledComponents";
import { Link } from "react-router-dom";

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
          <Link to='/cart'><MenuItem><CartWidget /></MenuItem></Link>
        </Right>
      </Wrapper>
    </nav>
  )
}

export default Navbar;