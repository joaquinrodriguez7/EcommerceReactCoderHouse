import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    const addToCart = (item, qty) => {
        setCartList([...cartList, {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            qty: qty,
        }])
    }

    const deleteItem = (id) => {
        const arrayCarrito = cartList.filter(item => item.id !== id)
        setCartList(arrayCarrito)
    }

    const deleteAll = () => {

    }

    return(
        <CartContext.Provider value={{cartList, addToCart, deleteItem, deleteAll}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider