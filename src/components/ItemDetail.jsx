const ItemDetail = ({item}) => {
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
                        <h5 className="pb-5">${item.price}</h5>
                        <h3>{item.descriptionTitle}</h3>
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
