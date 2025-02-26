import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";

import "../styles/Orders.css";

const Orders = () => {
    const [{ user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            database
                .collection("users")
                .doc(user?.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot((snapshot) =>
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
                );
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map((order, index) => (
                    <Order order={order} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Orders;
