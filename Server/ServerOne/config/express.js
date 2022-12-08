const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('../middlewares/cors');
const trimBody = require('../middlewares/trimBody');
const cookieSecret = 'PizzaBurgerSpot';

module.exports = (app) => {
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser(cookieSecret));
    app.use(trimBody());
    //session
    app.use('/static', express.static('static'));
};