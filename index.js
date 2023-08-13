const grid = document.querySelector(".grid-size");

// responsive grid related functions and loops
const container = document.querySelector(".container")

grid.addEventListener("click", () => {
    let userInput = prompt("Enter a Number Under 100");

    if (userInput <= 100) {

        for (let i = 0; i < userInput; i++) {
            
            const div = document.createElement("div");
            div.classList.add("column");
            div.setAttribute("style", " display: flex; flex: 1;");
            container.appendChild(div);
        
            for (let i = 0; i < userInput; i++) {
                const squareDiv = document.createElement("div");
                squareDiv.classList.add("div1")
                squareDiv.setAttribute("style", "flex: 1; background-color: grey; ;");
                div.appendChild(squareDiv)
                squareDiv.addEventListener("mouseenter", () => {
                    squareDiv.style.cssText = "flex: 1; background-color: white;";
                });
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











    
