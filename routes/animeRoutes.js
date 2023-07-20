const express = require('express');

const router = express.Router();
const { leerAnimes, insertarAnimes, actualizarAnime, eliminarAnime } = require('../service/anime');


//ruta raiz muestra la lista de animes
router.get('/', (req, res) => {
  const datosAnime = leerAnimes('anime');
  res.render('index', {
    animes: datosAnime
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

// Ruta para eliminar 
router.get('/eliminar/:id', (req, res) => {
  const id = req.params.id;
  eliminarAnime('anime', id);
  res.redirect('/');
});

//Ruta para mostrar el formulario de actualizacion
router.get('/actualizar/:id', (req, res) => {
  const id = req.params.id;
  const datosAnime = leerAnimes('anime');
  const anime = datosAnime[id];

  res.render('actualizar', {
    anime: anime,
    id: id 
  });

});



// funcion para actualizar anime 
router.post('/guardar/:id', (req, res) => {
  // Obtener los datos enviados desde el formulario
  const id = req.params.id;
  const nombre = req.body.nombre;
  const genero = req.body.genero;
  const año = req.body.año;
  const autor = req.body.autor;

  // Llamar a la función para guardar los cambios en el anime
  actualizarAnime('anime', id, nombre, genero, año, autor);

  res.redirect('/');
 
  
});




module.exports = router;