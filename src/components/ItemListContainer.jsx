import { useState, useEffect } from "react"
import { products } from "../utils/products"
import fetchData from "../utils/fetchData"
import ItemList from "./ItemList"
import { useParams } from 'react-router';


const ItemListContainer = (props) => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidMount
    useEffect(() => {
        fetchData(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.idCategory === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);
    
    return (
       <div className="row row-cols-1 row-cols-md-2 px-2">
       <ItemList datos={datos} />
       </div>
    )
}

export default ItemListContainer;