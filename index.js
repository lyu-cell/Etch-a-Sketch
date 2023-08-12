const grid = document.querySelector(".grid-size");

grid.addEventListener("click", () => {
    let userInput = prompt("Enter a Number Under 100");

    if (userInput <= 100) {

        for (let i = 0; i < userInput; i++) {
            const container = document.querySelector(".container")
            const div = document.createElement("div");
            div.classList.add("column");
            div.setAttribute("style", " display: flex; flex: 1; border: 1px solid green;");
            container.appendChild(div);
        
            for (let i = 0; i < userInput; i++) {
                const squareDiv = document.createElement("div");
                squareDiv.classList.add("div1")
                squareDiv.setAttribute("style", "flex: 1; background-color: black; border: 1px solid white;");
                div.appendChild(squareDiv)
            }
        }
    } 
    
    else if (userInput > 100) {
        alert("Number Is Too high!")
    } 
    
    else (
        alert("Enter Only Numbers")
    )

});

const div = document.querySelector()
