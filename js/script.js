//Create a webpage that has a 16X16 grid of divs
//When hovered over the grid should change the color of the hovered element
//Add a button that prompts user for the no. of grids per side
//Instead of changing the color to a single color, randomly select colors for 
//each div and add 10% black to passed over div so that after 10 passes only 
//that div completely changes to black

//Create a function named createCanvas
function createCanvas(gridSize=16){
//Create a div container named canvas that contains the grid
    const canvas = document.createElement("div");
    canvas.classList.add("canvas");
    canvas.style.maxWidth = "960px";
//Loop through the number and create a row div that contains the column elements
//and append it to the canvas;
    for(let i=0; i<gridSize; i++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        rowDiv.style.display = "flex";
//inside the loop create an inner loop and that creates column elements and 
//appends them to the rows
        for(let i=0; i<gridSize; i++){
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("column");
            let size = 960/gridSize;
            let myStyle = `
            background-color: black; 
            border-color: 2px solid white;
            flex: 1; 
            width: ${size}px; 
            height: ${size}px;
            `
            columnDiv.style.cssText = myStyle;
            rowDiv.appendChild(columnDiv);
        }
        canvas.appendChild(rowDiv);
    }
    
    const body = document.querySelector("body");
    body.appendChild(canvas);
    body.style.cssText = "display:flex; justify-content:center; align-items: center";

}

createCanvas();




