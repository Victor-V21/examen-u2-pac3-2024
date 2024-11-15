
const tarea = document.getElementById('taskInput');
const li = document.createElement('li');
const ul = document.getElementById('taskList');

let string = '';

let tareaNueva = '';

tarea.addEventListener('input', (e) =>
    {
        e.preventDefault();
        console.log(e.target.value);
        tareaNueva = e.target.value;
    })

const btnagg = document.getElementById('agregar');


btnagg.addEventListener('click', () =>{

    if ( tareaNueva === ''){
        console.log('Ingrese una tarea para agregarla');
        return;

    }else{

        li.textContent = tareaNueva;
        string += li.textContent;
        
        console.log(string);
    
        // ul.textContent = string
        ul.appendChild(li)
    }
})