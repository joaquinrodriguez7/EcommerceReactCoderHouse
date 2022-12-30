import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router";
import { db } from "../utils/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const fetchFirestore = async () => {
            let q;
            if (idCategory) {
                q = query(collection(db, "products"), where("idCategory", "==", parseInt(idCategory)))
            } else {
                q = query(collection(db, "products"))
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            })
            )
            return dataFromFirestore
        }
        fetchFirestore()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    return (
        <div className="row row-cols-1 row-cols-md-2 px-2">
            <ItemList datos={datos} />
        </div>
    )
}

export default ItemListContainer;