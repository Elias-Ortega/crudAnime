
const arregloBotonesEliminar = document.querySelectorAll('button.borrar');
arregloBotonesEliminar.forEach((boton) => {
    boton.addEventListener('click', (event) =>{
        const respuesta = prompt('¿Seguro que deseas eliminar?. Digite  Si o haga clic en cancelar');
        if(respuesta != 'Si'){
            event.preventDefault();
        }
    });
})


