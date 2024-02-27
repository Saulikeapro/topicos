//Martinez Monge Saul Guillermo

const body = document.querySelector('body')

let colores = ['#000000','#000099','#0000FF','#003366','#0033FF','#006666','#0066FF','#009933','#009999','#00CC00','#330066','#3300FF','#333300','#333366','#336633','#990066','#99FF00','#99FFCC','#FF00FF']

for (let i = 0; i < 10; i++) {
    const div = document.createElement('div')
    div.style.height = '100px'

    const randomIndex = Math.floor(Math.random() * colores.length)

    const color = colores[randomIndex]

    div.style.backgroundColor = color

    colores.splice(randomIndex, 1)

    if (colores.length === 0) {
        colores = ['#000000','#000099','#0000FF','#003366','#0033FF','#006666','#0066FF','#009933','#009999','#00CC00','#330066','#3300FF','#333300','#333366','#336633','#990066','#99FF00','#99FFCC','#FF00FF']
    }

    body.appendChild(div)
}