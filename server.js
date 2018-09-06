const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// HBS ENGINE
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'Andres'
    })
});

app.get('/about', function (req, res) {

    res.render('about')
});

app.get('/data', function (req, res) {

    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});

