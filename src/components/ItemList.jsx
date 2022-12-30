import Item from "./Item";

const ItemList = (props) => {
    return (
        <>
            {
                props.datos.map(item => <Item key={item.id} id={item.id} descriptionTitle={item.descriptionTitle} description={item.description} name={item.name} price={item.price} image={item.image} idCategory={item.idCategory} />)
            }
        </>
    )
}

export default ItemList;