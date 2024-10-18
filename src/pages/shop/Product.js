import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
    const { id, productName, productImage, price } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    const isInCart = cartItems?.some((item) => item.id === id);
    return (
        <div className="col-3 mt-3">
            <div className='card'>
                <img src={productImage} className="card-img-top" style={{width: '100%', height: '250px'}} />
                <div className="card-body">
                    <h5> {productName}</h5>
                    <p>price : {price}$</p>
                    <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>
                        +
                    </button>
                    <span className="mx-1">
                        {cartItems?.filter((row) => row.id === id)[0]?.count}
                    </span>
                    {isInCart && (
                        <button
                            className="btn btn-info btn-sm"
                            onClick={() => removeFromCart(id)}
                        >
                            -
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};
export default Product;