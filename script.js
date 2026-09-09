const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}