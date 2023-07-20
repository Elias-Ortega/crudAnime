const { actualizarAnime, eliminarAnime } = require('./service/anime');

const express = require('express');


const bodyParser = require('body-parser');


const app = express();


//motor de plantillas
app.set('view engine', 'hbs');

//carpeta para recursos estaticos
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes (rutas)
const animeRoutes = require('./routes/animeRoutes');
app.use('/', animeRoutes);



app.listen(8080);



