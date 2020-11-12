import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue, getBasketTotal } from "../StateProvider.js";

import "../styles/Subtotal.css";

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal&nbsp;
                            {basket.length === 0
                                ? "(0 items)"
                                : basket.length === 1
                                ? "(1 item)"
                                : `(${basket.length} items)`}
                            :<strong> {value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={() => history.push("/payment")}>
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Subtotal;
