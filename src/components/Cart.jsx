import { useContext } from "react"
import { Navbar } from "react-bootstrap";
import { CartContext } from "./CartContext"

const Cart = () => {
    const arrayCtx = useContext(CartContext);
    
    return(
        <>
        {
            arrayCtx.cartList.length === 0
            ? <p>El carrito esta vacio.</p>
            : <div className="px-5 pt-2">
                <h1 className="text-bold-700 fs-2">TU CARRITO</h1>
                <button className="buttonIrCarrito w-175 mb-3">Vaciar Carrito</button>   
            {arrayCtx.cartList.map(item => 
                
                <table className="table align-middle table-borderless">
                    <tbody className="container">
                    <tr className="row border border-dark d-flex justify-content-center align-items-center">
                      <th scope="row" className="col-3"><img className="imgCarrito" src={item.image} alt="" /> </th>
                      <td className="col-6 text-bold-700 fs-5">{item.name}</td>
                      <td className="col fs-5">x{item.qty}</td>
                      <td className="col fs-5">${item.price}</td>
                      <td className="col pe-3"><button className="button" onClick={() => arrayCtx.deleteItem(item.id)}>Eliminar producto</button> </td>
                    </tr>
                    </tbody> 
                </table>
                
            )}
            <div><h2 className="text-center text-bold-700 fs-4">TOTAL:</h2></div>
                <div className="pb-3 d-grid gap-2 col-6 mx-auto">
                    <button className="button">Continuar Compra</button>
                </div>
            </div>
        }
        </>
    )
}

export default Cart;