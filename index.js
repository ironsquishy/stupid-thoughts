require('dotenv').config;

const Express = require('express');
const BodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const App = Express();

const Http = require('http').Server(App);

const PORT = 8080;

App.use(compression());

App.use(BodyParser.urlencoded({
	extended: false
}));
App.use(BodyParser.json());

App.use(Express.static('public'));

App.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

Http.listen(PORT, () => {
	console.log('Listening on ', PORT);
});
