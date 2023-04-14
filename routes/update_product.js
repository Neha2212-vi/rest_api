const express = require("express");
const route = express.Router();
const product_model = require("../connection/config");

route.put("/products/:id", async (req, res) => {
    try {
        let data = await product_model.updateOne(
            {
                id : req.params.id
            },
            {
                $set: req.body
            }
        );
        console.log(data)
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})
module.exports = route;