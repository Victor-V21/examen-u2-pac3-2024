
const tablaDe = document.getElementById('number');
const limite = document.getElementById('limit');

let num1 = 0, num2 = 0;
let string = '';

const btnGen = document.getElementById('generar-tabla')
const resultado = document.getElementById('result')


btnGen.addEventListener('click', (e) =>
{
    e.stopPropagation();

    for (let i = 0; i <= num2; i++) {
        string += `${num1} x ${i} = ${num1*i}\n`
    }

    resultado.textContent = string;
})

tablaDe.addEventListener('input', (e) =>
{
    e.preventDefault();
    console.log(e.target.value);
    
    num1 = e.target.value;
})

limite.addEventListener('input', (e) =>
{
    e.preventDefault();
    console.log(e.target.value);
    
    num2 = e.target.value;
})

