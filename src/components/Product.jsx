import React from "react";
import { useStateValue } from "../StateProvider.js";

import "../styles/Product.css";

const Product = ({ id, title, image, price, rating }) => {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, index) => {
                            return <p key={index}>⭐️</p>;
                        })}
                </div>
            </div>

            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
};

export default Product;
