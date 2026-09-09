const container = document.querySelector("#container");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }
}

let input = 16;

createGrid(input);

const grid = document.querySelectorAll(".square")

grid.forEach(element => 
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "blue"
    }))

const restart = document.querySelector("#restart");

restart.addEventListener("click", () => {
    input = prompt("How many squares per side do you want? ")
    grid.remove();
    createGrid(input);
})

