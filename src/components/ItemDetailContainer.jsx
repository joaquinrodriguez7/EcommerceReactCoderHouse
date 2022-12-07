import ItemDetail from "./ItemDetail";
import fetchData from "../utils/fetchData";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { products } from  "../utils/products";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        fetchData(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;