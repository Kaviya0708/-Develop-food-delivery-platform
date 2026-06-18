const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let foods = [
    { id: 1, name: "Pizza", price: 199 },
    { id: 2, name: "Burger", price: 99 },
    { id: 3, name: "Sandwich", price: 79 }
];

let orders = [];

// Get Food Menu
app.get("/api/menu", (req, res) => {
    res.json(foods);
});

// Place Order
app.post("/api/order", (req, res) => {
    const { foodName, quantity } = req.body;

    const order = {
        id: Date.now(),
        foodName,
        quantity
    };

    orders.push(order);

    res.json({
        message: "Order Placed Successfully",
        order
    });
});

// Get Orders
app.get("/api/orders", (req, res) => {
    res.json(orders);
});

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});