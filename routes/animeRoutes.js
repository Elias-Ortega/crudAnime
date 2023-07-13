const express = require('express');

const router = express.Router();
const { leerAnimes, insertarAnimes } = require('../service/anime');


//ruta raiz muestra la lista de animes
router.get('/', (req, res) => {
  const datosAnime = leerAnimes('anime');
  res.render('index', {
    animes: datosAnime
  });
});

/// Ruta para agregar un nuevo anime
router.post('/animes', (req, res) => {
  const nombre = req.body.nombre;
  const genero = req.body.genero;
  const año = req.body.año;
  const autor = req.body.autor;

  insertarAnimes('anime', nombre, genero, año, autor);
  res.redirect('/');
});

// Ruta para eliminar un anime
router.delete('/animes/:id', (req, res) => {

});

module.exports = router;