import { useEffect, useState } from "react";

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {setCount(initial)},[]);
    
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
            console.log("asdasd")
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return(
       <>
       <div className="d-flex">
            <button onClick={decrement} className="buttonItemCount">-</button>
            <span className="mx-2 text-bold-700"> {count} </span>
            <button onClick={increment} className="buttonItemCount">+</button> 
        </div>
        <div>
            <button onClick={() => onAdd(count)} className="button">Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount