import React from "react";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider.js";

import checkoutAd from "../images/amazon_chekout_ad.jpg";
import "../styles/Checkout.css";

const Checkout = () => {
    const [{ user, basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="chekout__left">
                <img className="checkout__ad" src={checkoutAd} alt="" />
                <div>
                    <h3>Hello, {user ? user.email : "Guest!"}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket?.map((product, index) => (
                        <CheckoutProduct
                            id={product.id}
                            price={product.price}
                            title={product.title}
                            image={product.image}
                            rating={product.rating}
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
