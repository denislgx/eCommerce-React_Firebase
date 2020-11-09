import React from "react";

import "../styles/Product.css";

const Product = ({ id, title, image, price, rating }) => {
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
            <button>Add to Basket</button>
        </div>
    );
};

export default Product;
