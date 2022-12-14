const canvas = document.querySelector(".canvas")

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


function createCanvas(param) {
    let todo = Array.from(document.querySelectorAll(".square"))
    todo.forEach(square => {
        square.remove();
    });

    for (let i = 0; i < param; i++) {
        canvas.appendChild(document.createElement("div")).classList.add("square", "row")
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
            let color = random_rgba();
            square.style.background = color;
        })
    });
}
createCanvas(16)

const btn = document.querySelector(".fill")

btn.addEventListener("click", () => {
    let numS = prompt("How many squares do you want? Limit = 100")
    if (numS > 100) {
        alert("The limit is 100x100 squares!")
    } else {
        createCanvas(numS)
    }
})
