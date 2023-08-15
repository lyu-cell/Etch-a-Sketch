const grid = document.querySelector(".grid-size");
const container = document.querySelector(".container");
const subcontainer = document.createElement("div");
subcontainer.setAttribute("style", "display: flex; width: 440px; height: 440px; flex-direction: column; background-color: white;")
container.appendChild(subcontainer)

let counter = 0;

grid.addEventListener("click", () => {

    let userInput = prompt("Enter a Number Under 100");

    

    if (userInput <= 100) {
        
        while(subcontainer.firstChild) {
            subcontainer.removeChild(subcontainer.firstChild)
         }

        for (let i = 0; i < userInput; i++) {
            
            const div = document.createElement("div");
            div.classList.add("column");
            counter += 1;
            div.setAttribute("style", " display: flex; flex: 1;");
            subcontainer.appendChild(div);

            for (let i = 0; i < userInput; i++) {
             
                const squareDiv = document.createElement("div");
                squareDiv.classList.add("div1")
                squareDiv.setAttribute("style", "flex: 1; background-color: grey; ;");
                div.appendChild(squareDiv)
                
                // event listener for hover effect
                squareDiv.addEventListener("mouseenter", () => {
                    squareDiv.style.cssText = "flex: 1; background-color: white;";
                });

                // event listener for the reset button
                const reset = document.querySelector(".reset")
                reset.addEventListener("click", () => {
                    squareDiv.setAttribute("style", "flex: 1; background-color: grey;")
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


