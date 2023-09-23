window-addEventListener('load', ()=>{
    //referenciamos a los elementos del DOM 
    const formCrear = document.getElementById('form-crear')
    const listaTareas = document.getElementById('lista-tareas')
    const inputCrear = document.getElementById('crear')
    const inputBuscar = document.getElementById('buscar')

    /* Procedimiento para el ALTA*/
    formCrear.addEventListener('submit', (e) =>{
        e.preventDefault()
        capturarValor()
    })

    const capturarValor = ()=>{
        const tareaNombre = inputCrear.value.trim();
        (tareaNombre.length) ? mostrarTareaHtml(tareaNombre): alert('Debe ingresar una tarea')
    }

    const mostrarTareaHtml = (tarea)=> {
        const liHtml = `<li><strong>${tarea}</strong> <span class="material-symbols-outlined borrar">
        delete
        </span></li>`
        listaTareas.innerHTML += liHtml
    }

    inputBuscar.addEventListener('keyup', ()=>{
        const caracter = inputBuscar.value.trim()
        busqueda(caracter)
    })

    const busqueda =(cadena)=>{
        let arreglo = Array.from(listaTareas.children)  
        arreglo
            .filter(texto => !texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada =>{
                cadenaFiltrada.classList.add('textFiltrado')
            })
        arreglo
            .filter(texto => texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada =>{
                cadenaFiltrada.classList.remove('textFiltrado')
            })
        }
        listaTareas.addEventListener('click', (e)=>{
            if(e.target.classList.contains('borrar')){
                e.target.parentElement.remove()
            }
            inputBuscar.value = ''
        })
})
/* Procedimiento para el BORRAR*/


