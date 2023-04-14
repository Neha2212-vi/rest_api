const express = require("express");
const route = express.Router();
const product_model = require("../connection/config");

route.post("/products", async (req, res) => {
    try {
        let data = await product_model.insertMany(req.body);
        console.log(data)
        res.status(201).json({ data });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})
module.exports = route;