const express = require('express');

const app = express();

const bodyParser = require('body-parser');

//motor de plantillas
app.set('view engine', 'hbs');

//carpeta para recursos estaticos
app.use(express.static('public'));

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Routes (rutas)
const animeRoutes = require('./routes/animeRoutes');
app.use('/', animeRoutes);




app.listen(8080);