const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { stripe_secret_key } = require("./keys");
const stripe = require("stripe")(stripe_secret_key);

// App Config

const app = express();

// App Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API Routes

app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    console.log("PAYMENT REQ RECEIVED: ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen

exports.api = functions.https.onRequest(app);
