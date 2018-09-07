const Express = require('express');
const BodParser = require('body-parser');

const myRoute = Express.Router();

const TestData = require('../testData');

myRoute.use(BodParser.json());

myRoute.get('/', (req, res) => {
    res.status(200);
    res.send({test : 'success'});
});

module.exports = exports = myRoute;

