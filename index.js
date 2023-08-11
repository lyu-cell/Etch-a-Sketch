
const grid = document.querySelector(".grid-size");
grid.addEventListener("click", () => {
    const userInput = prompt("Enter a Number Under 100");

    // the grid creation loops
    for (let i = 0; i < userInput; i++) {

        const container = document.querySelector(".container")
        const div = document.createElement("div");
        div.classList.add("column");
        div.setAttribute("style", " display: flex; flex: 1; border: 1px solid green;");
        container.appendChild(div);
    
        for (let i = 0; i < userInput; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute("style", "flex: 1; background-color: black; border: 1px solid white;");
            div.appendChild(squareDiv)
        }
        
    }
})
