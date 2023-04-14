const express = require('express');
require("./connection/config");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const addProduct = require("./routes/add_product");
const getProduct = require("./routes/get_product");
const updateProduct = require("./routes/update_product");
const deleteProduct = require("./routes/delete_product");

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(addProduct);
app.use(getProduct);
app.use(updateProduct);
app.use(deleteProduct);

app.listen(PORT, () => { console.log("App is succsessfully working at port", PORT) });