const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');

const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3139;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routes);

dotenv.config();

app.listen(port, () => {
    console.log(`Listen on port: ${port}`);
})