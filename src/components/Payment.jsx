import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../StateProvider";
import axios from "../axios";

import "../styles/Payment.css";

const Payment = () => {
    const [{ user, basket }, dispatch] = useStateValue();

    const [succeeded, setSucceeded] = useState(false);
    const [proccessing, setProccesing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    const history = useHistory();

    useEffect(() => {
        // Generate stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProccesing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                // Payment Intent = payment confirmation
                setSucceeded(true);
                setError(null);
                setProccesing(false);

                history.replace("/orders");
            });
    };

    const handleChange = (event) => {
        // Listens the changes on the CardElement
        // Displays any errors as the customer types its cards details
        setDisabled(event.empty); // If the event is empty disable the button
        setError(event.error ? event.error.message : ""); // Show error
    };

    console.log("CLIENT SECRET: ", clientSecret);
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
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
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items & Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket?.map((product, index) => (
                            <CheckoutProduct
                                key={index}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                                rating={product.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <h3 className="payment__title">Payment Method</h3>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    disabled={
                                        proccessing || disabled || succeeded
                                    }
                                >
                                    <span>
                                        {proccessing ? (
                                            <p>Proccessing</p>
                                        ) : (
                                            "Buy Now"
                                        )}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
