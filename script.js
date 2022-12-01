const canvas = document.querySelector(".canvas")

function createCanvas(param) {
    for (let i = 0; i < param; i++) {
        canvas.appendChild(document.createElement("div")).classList.add("square", "row")

        for (let i = 0; i < param; i++) {
        }   
    }
    const rows = Array.from(document.querySelectorAll(".row"))
    rows.forEach(square => {

        for (let i = 0; i < param; i++) {

            square.appendChild(document.createElement("div")).classList.add("square", "col")
        }
    });

    squares = Array.from(document.querySelectorAll(".col"))
    squares.forEach(square => {
        square.addEventListener("mouseenter", (e) => {
            square.classList.add("hover");
        })
    });
}

createCanvas(50)