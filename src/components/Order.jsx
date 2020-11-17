import React from "react";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

import "../styles/Order.css";

const Order = ({ order }) => {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("DD/MM/YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map((product, index) => (
                <CheckoutProduct
                    key={index}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                    hiddenButton={true}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3 className="order__total">Order Total: {value}</h3>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    );
};

export default Order;
