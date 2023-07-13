const fs = require('fs');


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



const actualizar = () => {

}

const eliminar = () => {

}

const leerPorId = (id, nombreArchivo) => {

}
const leerPorNombre = (nombre) => {

}

module.exports = {
  leerAnimes,
  insertarAnimes
};