import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const { calcItemsQty } = useContext(CartContext);
    return (
        <button type="button" className="btn position-relative">
            <BsCart2 className="iconoCarrito" />
            <span className="position-absolute top-0 start-100 translate-middle-x badge rounded-pill badge bg-light text-dark">
                {calcItemsQty()}
            </span>
        </button>
    )
}

export default CartWidget;