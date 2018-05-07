const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const axios = require('axios');

const PORT = process.env.PORT || 5000;

// *** SERVER CONFIGURATION ***

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// Set static path
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
	app.use(express.static('client/build'));
} else {
	app.use(express.static(__dirname + '/../client/build'));
}


// Start server
http.listen(PORT);
