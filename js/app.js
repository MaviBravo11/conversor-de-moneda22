const moneda_one = document.getElementById('moneda-uno');
const moneda_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');



const calcular = () => {
    const moneda_elegida = moneda_one.value;
    const moneda_elegida_2 = moneda_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_elegida}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_elegida_2];
       
       cambioEl.innerText = `1 ${moneda_elegida} = ${taza} ${moneda_elegida_2}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

    } );
    
}

moneda_one.addEventListener('change', calcular);
cantidadEl_one.addEventListener('input', calcular);
moneda_two.addEventListener('change', calcular);
cantidadEl_two.addEventListener('input', calcular);

taza.addEventListener('click', () =>{
    const temp = moneda_one.value;
    moneda_one.value = moneda_two.value;
    moneda_two.value = temp;
    calcular();
} );


calcular();