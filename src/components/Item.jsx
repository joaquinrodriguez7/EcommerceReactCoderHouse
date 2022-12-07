import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import "../App.css";

const Item = ({ id, name, price, image }) => {
    return (
    <Card className="card mt-3 justify-content-center col-md-3">
      <img className='border-0' src={image} alt="" />
      <Card.Body className="position-relative">
        <Card.Text className='text-bold-700'>${price}</Card.Text>
        <Card.Text className="text-bold-700 mb-5">
         {name}
        </Card.Text>
        <Link to={`/item/${id}`}><button className='button position-absolute bottom-0 start-50 translate-middle-x mb-3'>Detalles</button></Link>
      </Card.Body>
    </Card>     
    )
}

export default Item;