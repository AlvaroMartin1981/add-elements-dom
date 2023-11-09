 // Aquí tu código


 const lista = document.getElementById('lista');
 const agregar = document.getElementById('agregar');

 agregar.addEventListener('click', function(){

    let cartel = prompt('Agregar elemento');

    

     let cartelOne = document.createElement('li');
     cartelOne.innerText = cartel;
     lista.appendChild(cartelOne);

    })



