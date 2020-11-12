import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

import "../styles/Payment.css";

const Payment = () => {
    const [{ user, basket }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                {/* PS DELIVERY ADDRESS */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Main Street</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/* PS REVIEW ITEMS */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items & Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket?.map((product) => (
                            <CheckoutProduct
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                                rating={product.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* PS PAYMEN METHOD */}
                <div className="payment__section">
                    <h3 className="payment__title">Payment Method</h3>
                    <div className="payment__details"></div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
