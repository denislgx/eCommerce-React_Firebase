import React from "react";
import Subtotal from "./Subtotal";

import checkoutAd from "../images/amazon_chekout_ad.jpg";
import "../styles/Checkout.css";

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="chekout__left">
                <img className="checkout__ad" src={checkoutAd} alt="" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* BASKET ITEM */}
                    {/* BASKET ITEM */}
                    {/* BASKET ITEM */}
                    {/* BASKET ITEM */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
