// Traer botón por id
document.getElementById('button-equals').addEventListener('click', () => {
    alert('Clic en igual');
});


// Otra forma de traer botón por id
document.querySelector('#button-divide').addEventListener('click', () => {
    alert('Clic en división');
});


// Traer todos los botones
const allBtn = document.querySelectorAll('.calc-button');

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', (event) => {
        const element = event.target; // Elemento .calc-button que dispara el evento
    
        console.log(`Clic en ${element.textContent}`);
    });
}