const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const URL = process.env.URL;
mongoose.connect(URL,
    {
        useNewUrlParser: true
    }
).then(() => {
    console.log("connected successfully")
}).catch((err) => console.log(err));

const product_schema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String
    },
    discription: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    }
})

const product_model = mongoose.model("products",product_schema);
module.exports = product_model;

