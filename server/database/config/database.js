const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const userDB = process.env.DB_USER;
const passwordDB = process.env.DB_PASSWORD;
const nameDB = process.env.DB_NAME;
const hostDB = process.env.DB_HOST;

module.exports = mongoose.connect(`mongodb+srv://${userDB}:${passwordDB}@${hostDB}.mongodb.net/${nameDB}?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true});
