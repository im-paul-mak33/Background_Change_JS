const changeBG = document.querySelector('button')
const bgcolor = document.querySelector('body')
const color = ['red','green', 'blue','yellow', 'pink', 'purple']

bgcolor.style.backgroundColor = 'violet'

let backgroundChange = () => {
    const colorIndex = parseInt(Math.random() * color.length)
    bgcolor.style.backgroundColor = color[colorIndex]
}

changeBG.addEventListener('click', backgroundChange)