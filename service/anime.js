const fs = require('fs');

//lista los animes en la vista principal
const leerAnimes = (nombreArchivo) => {
  let datos = fs.readFileSync(`./data/${nombreArchivo}.json`, 'utf-8');
  const arreglo = JSON.parse(datos);
  return arreglo;
}; 


const insertarAnimes = (nombreArchivo, nombre, genero, año, autor) => {
  const arregloAnimes = leerAnimes(nombreArchivo);

  // Nuevo Id en base al ultimo id del arreglo existente + 1
  const nuevoId = String(Object.keys(arregloAnimes).length + 1);

  const nuevoAnime = { nombre, genero, año, autor };
  arregloAnimes[nuevoId] = nuevoAnime;

  const datos = JSON.stringify(arregloAnimes);
  fs.writeFileSync(`./data/${nombreArchivo}.json`, datos, 'utf-8');
};



const actualizarAnime = (nombreArchivo, id, nombre, genero, año, autor) => {
  const arregloAnimes = leerAnimes(nombreArchivo);
  arregloAnimes[id] = { nombre, genero, año, autor };
  const datos = JSON.stringify(arregloAnimes);
  fs.writeFileSync(`./data/${nombreArchivo}.json`, datos, 'utf-8');
};




const eliminarAnime = (nombreArchivo, id) => {
  const arregloAnimes = leerAnimes(nombreArchivo);
  // Elimina directamente la propiedad del objeto  
  delete arregloAnimes[id];

  const datos = JSON.stringify(arregloAnimes);
  fs.writeFileSync(`./data/${nombreArchivo}.json`, datos, 'utf-8');
};



const leerPorId = (id, nombreArchivo) => {

}
const leerPorNombre = (nombre) => {

}

module.exports = {
  leerAnimes,
  insertarAnimes,
  actualizarAnime,
  eliminarAnime
};