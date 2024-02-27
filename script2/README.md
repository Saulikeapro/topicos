# Script 2
## instrucciones
<!-- UL -->
* Usando el script anterior agrega la funcionalidad de
que los colores no se repitan.

*  Seleccione el elemento body del documento HTML

`const body = document.querySelector('body')`

* se define un array de colores

`let colores = ['#000000','#000099','#0000FF','#003366','#0033FF','#006666','#0066FF','#009933','#009999','#00CC00','#330066','#3300FF','#333300','#333366','#336633','#990066','#99FF00','#99FFCC','#FF00FF']`

* Itera 10 veces para crear y agregar divs con colores aleatorios al cuerpo del documento

`for (let i = 0; i < 10; i++) {`

* Crea un nuevo elemento
`const div = document.createElement('div')`

* Se establece la altura del div en 100px

`div.style.height = '100px'`

* Selecciona un índice aleatorio dentro del rango de colores disponibles

`const randomIndex = Math.floor(Math.random() * colores.length)`

* Obtiene el color en el índice aleatorio

`const color = colores[randomIndex]`

* Asigna el color al div

`div.style.backgroundColor = color`

* Elimina el color seleccionado del array para que no se repita

`colores.splice(randomIndex, 1)`

* Si ya no hay más colores disponibles, restablece el array para volver a empezar

`if (colores.length === 0) {`
`colores = ['#000000','#000099','#0000FF','#003366','#0033FF','#006666','#0066FF','#009933','#009999','#00CC00','#330066','#3300FF','#333300','#333366','#336633','#990066','#99FF00','#99FFCC','#FF00FF']`
`}`

* Agrega el div al cuerpo del documento

`body.appendChild(div)`
}