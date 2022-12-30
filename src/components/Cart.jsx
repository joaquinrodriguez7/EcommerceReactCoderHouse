import { useContext } from "react"
import { CartContext } from "./CartContext"
import { collection, increment, serverTimestamp, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Cart = () => {
    const myCartContext = useContext(CartContext);
    const createOrder = () => {
        const order = {
            buyer: {
                name: "Joaquin Rodriguez",
                phone: "123123456",
                email: "joaquinrodriguezgarcia1@gmail.com"
            },
            date: serverTimestamp(),
            items: myCartContext.cartList.map(item => ({
                id: item.id,
                title: item.name,
                price: item.price,
                qty: item.qty,
            })),
            total: myCartContext.calcTotal(),
        }
        const orderDoc = async () => {
            const newOrder = doc(collection(db, "orders"))
            await setDoc(newOrder, order)
            return newOrder
        }
        orderDoc()
            .then(result => {
                swal({
                    title: "!Tu orden ha sido creada con éxito!",
                    text: `En breve nos comunicaremos via email para continuar con la compra. Número de orden: ${result.id}`,
                    icon: "success",
                    button: "Aceptar",
                });
                myCartContext.cartList.forEach(async (item) => {
                    const itemRef = doc(db, "products", item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.qty)
                    });
                })
                myCartContext.deleteAll()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                myCartContext.cartList.length === 0
                    ? <div className="pb-3 d-grid gap-2 col-3 mx-auto"> 
                        <h2 className="text-center py-3 text-bold-700">¡El carrito esta vacio!</h2>
                        <Link to='/'><button className="button">Volver al catálogo</button></Link>
                        </div>
                    : <div className="pt-2 px-5">
                        <h1 className="text-bold-700 fs-2 text-center">TU CARRITO</h1>
                        <div className="d-flex justify-content-between px-1">
                            <Link to='/'><button className="buttonIrCarrito w-175 mb-3">Volver al catálogo</button></Link>
                            <button onClick={myCartContext.deleteAll} className="buttonIrCarrito w-175 mb-3">Vaciar Carrito</button>
                        </div>
                        {myCartContext.cartList.map(item =>

                            <div key={item.id}>
                                <table className="table align-middle table-borderless">
                                    <tbody className="container">
                                        <tr className="row border border-dark d-flex justify-content-center align-items-center">
                                            <th scope="row" className="col-3"><img className="imgCarrito" src={item.image} alt="" /> </th>
                                            <td className="col-5 text-bold-700 fs-5">{item.name}</td>
                                            <td className="col-2 fs-5">{item.qty} unidades</td>
                                            <td className="col text-bold-700 fs-5">$ {myCartContext.calcTotalPerItem(item.id)}</td>
                                            <td className="col pe-3"><button className="button" onClick={() => myCartContext.deleteItem(item.id)}>Eliminar producto</button> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                        <div className="w-50 border border-dark px-3 py-2 mb-3 mx-auto">
                            <div className="d-flex justify-content-between"><span className="text-bold-700 fs-4">RESUMEN DEL PEDIDO</span></div>
                            <div className="d-flex justify-content-between"> <span>{myCartContext.calcItemsQty()} PRODUCTOS </span> <span>$ {myCartContext.calcSubTotal()}</span></div>
                            <div className="d-flex justify-content-between"> <span>ENTREGA</span> <span>GRATIS</span></div>
                            <div className="d-flex justify-content-between"> <span className="text-bold-700">TOTAL <span className="fw-lighter">(IVA incluido ${myCartContext.calcIva()})</span> </span><span className="text-bold-700">$ {myCartContext.calcTotal()}</span></div>
                        </div>
                        <div className="pb-3 d-grid gap-2 col-6 mx-auto">
                            <button onClick={createOrder} className="button">CREAR ORDEN</button>
                        </div>
                    </div>
            }
        </>
    )
}

export default Cart;