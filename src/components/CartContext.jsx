import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.id === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    qty: qty,
                }
            ]);
        } else {
            found.qty += qty;
            setCartList([
                ...cartList
            ]);
        }
    }

    const formatMoney = (num) => {
        return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    const deleteItem = (id) => {
        const arrayCarrito = cartList.filter(item => item.id !== id)
        setCartList(arrayCarrito)
    }

    const deleteAll = () => {
        setCartList([]);
    }

    const calcTotalPerItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return (cartList[index].price * cartList[index].qty);
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return Math.round(calcSubTotal() * 1.21)
    }
    const calcIva = () => {
        return Math.round(calcSubTotal() * 0.21)
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, deleteItem, deleteAll, calcTotalPerItem, calcSubTotal, calcTotal, calcItemsQty, calcIva, formatMoney }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider