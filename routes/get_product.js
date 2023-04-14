const express = require("express");
const route = express.Router();
const product_model = require("../connection/config");

route.get("/products", async (req, res) => {
    try {
        let data = await product_model.find();
        // console.log(data)
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})
route.get("/products/:id", async (req, res) => {
    try {
        let data = await product_model.find({id : req.params.id});
        // console.log(req.params.id)
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})
module.exports = route;