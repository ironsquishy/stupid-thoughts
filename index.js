require('dotenv').config;

const Express = require('express');
const BodyParser = require('body-parser');

const App = Express();

const Http = require('http').Server(App);

const PORT = 3000;

App.use(BodyParser.urlencoded({
    extended: false
}));
App.use(BodyParser.json());

App.use(Express.static('public'));

App.get('/', (req, res) => {
    res.send(path.resolve(__dirname, 'public/index.html'));
});

Http.listen(PORT, () => {
    console.log('Listening on ', PORT);
})