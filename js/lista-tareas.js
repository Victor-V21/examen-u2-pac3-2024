
const tarea = document.getElementById('taskInput');
const li = document.createElement('li');
const ul = document.getElementById('taskList');


let tareaNueva = '';

tarea.addEventListener('input', (e) =>
    {
        e.preventDefault();
        tareaNueva = e.target.value;
    })

const btnagg = document.getElementById('agregar');


btnagg.addEventListener('click', () =>{

    if ( tareaNueva === ''){
        console.log('Ingrese una tarea para agregarla');
        return;

    }else{

        li.textContent = tareaNueva;
        
        ul.insertBefore(li, ul.children[0])
    }
})