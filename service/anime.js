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


const actualizarAnime = (nombreArchivo, id, nombre, genero, año, autor) => {
  const arregloAnimes = leerAnimes(nombreArchivo);
  arregloAnimes[id] = { nombre, genero, año, autor };
  const datos = JSON.stringify(arregloAnimes);
  fs.writeFileSync(`./data/${nombreArchivo}.json`, datos, 'utf-8');
};


const eliminarAnime = (nombreArchivo, id) => {
  const arregloAnimes = leerAnimes(nombreArchivo);
  delete arregloAnimes[id];//elimina directo 
  const datos = JSON.stringify(arregloAnimes);
  fs.writeFileSync(`./data/${nombreArchivo}.json`, datos, 'utf-8');
};



const buscarPorId = (nombreArchivo, id) => {
  try {
    const arregloAnimes = leerAnimes(nombreArchivo);
    const animeBuscado = arregloAnimes[id];
    if (animeBuscado) {
      animeBuscado.id = id;
    }
    return animeBuscado;
  } catch (error) {
    console.log('El id ingresado no existe');
  }
}

const buscarPorNombre = (nombreArchivo, nombre) => {
  try {
    const arregloAnimes = leerAnimes(nombreArchivo);
    const animeBuscado = Object.values(arregloAnimes).find((anime) => anime.nombre.toLowerCase() === nombre.toLowerCase());
    if (animeBuscado) {
      animeBuscado.id = Object.keys(arregloAnimes).find((id) => arregloAnimes[id] === animeBuscado);
    }
    return animeBuscado;
  } catch (error) {
    console.log('Anime no encontrado');
  }
}


module.exports = {
  leerAnimes,
  insertarAnimes,
  actualizarAnime,
  eliminarAnime,
  buscarPorId,
  buscarPorNombre
};