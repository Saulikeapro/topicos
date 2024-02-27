# Script 1 
## instrucciones
<!-- UL -->
* Elabora un script que genere 10 contenedores de
tamaño 100 y les agregue un color aleatorio.



*  Seleccione el elemento body del documento HTML

`const body = document.querySelector('body')`

* se define un array de colores

`const colores = ['red', 'purple', 'green', 'orange', 'blue', 'brown', 'grey', 'black']`

* Itera 10 veces para crear y agregar divs con colores aleatorios al cuerpo del documento

`for (let i = 0; i < 10; i++) {`
 * Crea un nuevo elemento

` const div = document.createElement('div')`
* Se establece la altura del div en 100px

` div.style.height = '100px'`

* Asigna un color aleatorio del array de colores al fondo del div

 ` div.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)]`

* Agrega el div creado al final del cuerpo del documento

` body.appendChild(div)`

`}`

