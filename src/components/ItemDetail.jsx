import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0)
    const { addToCart } = useContext(CartContext)
    
    
    const formatMoney = (num) => {
        return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
    const onAdd = (qty) => {
        
        setItemCount(qty);
        addToCart(item, qty)
    }
    // const notify = () => toast("¡Producto agregado al carrito!")
    
    return (
        <>
            {
            item && item.image  
            ?
            <div>
                <div className="d-flex">
                    <div>
                        <img src={item.image} />
                    </div>
                    <div className="px-4 pt-4">
                        <h1 className="text-bold-700">{item.name}</h1>
                        <h5 className="pb-5 text-bold-700">{formatMoney(item.price)}</h5>
                        {
                            itemCount === 0
                            ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                            : <>
                            <Link to='/cart'><button onClick={() => toast("¡Producto agregado al carrito!")} className="buttonIrCarrito">Ir al carrito</button></Link>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss={false}
                                draggable={false}
                                pauseOnHover={false}
                                theme="light"
                                />
                        </>
                        }
                        <p className="fw-lighter mb-5 mt-1">Unidades diponibles: {item.stock} </p>
                        <h3 className="pt-5">{item.descriptionTitle}</h3>
                        <p className="pt-3">{item.description}</p> 
                    </div>
                </div>
            </div>

            :
            <div className="d-flex justify-content-center">
                <div className="spinner-border mt-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            }  
        </>
    );
}

export default ItemDetail;
