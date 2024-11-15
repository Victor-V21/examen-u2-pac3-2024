console.log('Contadoaaar');

let numero = 0;

const aumentar = document.getElementById('aumentar');

const contador = document.getElementById('counter')

aumentar.addEventListener('click', (e)=>
{
    numero += 1;
    contador.textContent = numero;
})


const disminuir = document.getElementById('disminiuir');

disminuir.addEventListener('click', (e)=>
{
    numero -= 1;
    contador.textContent = numero
})