const container = document.querySelector("#container");

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${100 / size}%`;

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = getRandomColor();
                if (square.style.opacity < 1) {
                square.style.opacity  = +square.style.opacity + 0.1
            }
            })
            container.appendChild(square);
        }
    }
}

let input = 16;

createGrid(input);

const restart = document.querySelector("#restart");

restart.addEventListener("click", () => {
    do {
    input = prompt("How many squares per side do you want? ")
    } while (input > 100)
    
    container.replaceChildren();
    createGrid(input);
})