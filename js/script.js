 // Aquí tu código

 const agregar = document.getElementById('agregar')  
 const lista = document.getElementById('lista') 


 agregar.addEventListener('click', function(){
    const pregunta = prompt('introducir cosa')
    lista.insertAdjacentHTML('beforebegin',`<li>${pregunta}</li>`)  
 })


 /*const lista = document.getElementById('lista');
 const agregar = document.getElementById('agregar');

 agregar.addEventListener('click', function(){

    let cartel = prompt('Agregar elemento');

    

     let cartelOne = document.createElement('li');
     cartelOne.innerText = cartel;
     lista.appendChild(cartelOne);

    })*/

   /*const agregar = document.getElementById('agregar')  
   const lista = document.getElementById('lista') 


   agregar.addEventListener('click', function(){
      const pregunta = prompt('introducir cosa')
      const li = document.createElement('li');
      li.textContent = pregunta;
      lista.appendChild(li);
   })*/
   /*
   const agregar = document.getElementById('agregar')  
   const lista = document.getElementById('lista') 
   const checkImput = document.getElementById('checkImput')

   agregar.addEventListener('click', function() {
      const pregunta = prompt('introducir cosa')
      const li = document.createElement('li');
      li.innerHTML = `<input type="checkbox">${pregunta}</input>`
      lista.appendChild(li);
   })

checkImput.addEventListener('change', function() {
   if(this.checed) {
      console.log('isChecked')
   } else {
      console.log('noChecked')
   }
})*/