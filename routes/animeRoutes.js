const express = require('express');

const router = express.Router();
const { leerAnimes, insertarAnimes, actualizarAnime, eliminarAnime, buscarPorId, buscarPorNombre } = require('../service/anime');


//ruta raiz muestra la lista de animes
router.get('/', (req, res) => {
  const listaAnimes = leerAnimes('anime');
  res.render('index', {
    animes: listaAnimes
  });
});

//ruta para insertar
router.post('/animes', (req, res) => {
  const nombre = req.body.nombre;
  const genero = req.body.genero;
  const año = req.body.año;
  const autor = req.body.autor;

  insertarAnimes('anime', nombre, genero, año, autor);
  res.redirect('/');
});

//Ruta para mostrar el formulario en pagina actualizar.hbs
router.get('/actualizar/:id', (req, res) => {
  const id = req.params.id;
  const datosAnime = leerAnimes('anime');
  const anime = datosAnime[id];

  res.render('actualizar', {
    anime: anime,
    id: id
  });

});

//  Ruta actualizar anime 
router.post('/guardar/:id', (req, res) => {
  // Obtener los datos enviados desde el formulario
  const id = req.params.id;
  const nombre = req.body.nombre;
  const genero = req.body.genero;
  const año = req.body.año;
  const autor = req.body.autor;
  
  actualizarAnime('anime', id, nombre, genero, año, autor);
  res.redirect('/');

});


// ruta para eliminar 
router.get('/eliminar/:id', (req, res) => {
  const id = req.params.id;
  eliminarAnime('anime', id);
  res.redirect('/');
});


// ruta buscar por ID 
router.post('/buscar/id', (req, res) => {
  const parametro = req.body.id;
  const animePorId = buscarPorId('anime', parametro);  
  const listaAnimes = leerAnimes('anime');
  res.render('index', {
    animes:listaAnimes,
    animesPorId: animePorId ? [animePorId] : [],
  });
});

// Buscar por nombre 
router.post('/buscar/nombre', (req, res) => {
  const parametro = req.body.nombre;
  const animePorNombre = buscarPorNombre('anime', parametro);
  const listaAnimes = leerAnimes('anime');
  res.render('index', {
    animes:listaAnimes,
    animesPorNombre: animePorNombre ? [animePorNombre] : [],
  });
});





module.exports = router;