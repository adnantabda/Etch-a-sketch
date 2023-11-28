const container = document.querySelector(".container");
const input = document.querySelector("input")
const button = document.querySelector("button")
// let numberOfSquare = 16


function randomColor(){
    const color = ["red" , "blue" , "green" , "yellow" , "pink"]
    let random = Math.floor(Math.random() * 5)
    return color[random]

}


for (let s = 1 ; s<=256 ; s++){
    const square = document.createElement('div')
    container.appendChild(square)
    let side = (400-(2*16))/16
    square.style.color = 'red'
    square.style.width = `${side}px`
    square.style.height = `${side}px`
    square.style.border = '1px solid black'

    square.addEventListener("mouseover" , ()=>{
        let color = randomColor()
        square.style.cursor = "pointer"
        square.style.backgroundColor = `${color}`
    })
    
}
button.addEventListener("click" ,()=>{

    container.innerHTML = ""
    n = input.value

    for (let i = 1 ; i <= n * n; i++){
        const square = document.createElement('div')
        container.appendChild(square)
        let side = (400-(2*n))/n
        square.style.color = 'red'
        // square.setAttribute("class" , ".square")
        square.style.width = `${side}px`
        square.style.height = `${side}px`
        square.style.border = '1px solid gray'

        square.addEventListener("mouseover" , ()=>{
            let color = randomColor()
            square.style.cursor = "pointer"
            square.style.backgroundColor = `${color}`

        })
    }
} )

