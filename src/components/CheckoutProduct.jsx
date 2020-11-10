import React from "react";
import { useStateValue } from "../StateProvider";

import "../styles/CheckoutProduct.css";

const CheckoutProduct = ({ id, title, price, rating, image }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, index) => {
                            return <p key={index}>⭐️</p>;
                        })}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
