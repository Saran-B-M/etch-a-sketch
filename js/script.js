//Create a webpage that has a 16X16 grid of divs
//When hovered over the grid should change the color of the hovered element
//Add a button that prompts user for the no. of grids per side
//Instead of changing the color to a single color, randomly select colors for 
//each div and add 10% black to passed over div so that after 10 passes only 
//that div completely changes to black

//Create a function named createCanvas
function createCanvas(gridSize){
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
            columnDiv.style.cssText = `width: ${size}px; height: ${size}px;`;
            eventListener(columnDiv);
            rowDiv.appendChild(columnDiv);
        }
        canvas.appendChild(rowDiv);
    }
    
    const body = document.querySelector("body");
    body.appendChild(canvas);

}

//Create a function that add event listener when the mouse rolls over a div
//add event listener that detects a mouse roll over an element and changes the
//bg color
//add another event listener that detects when the mouse left the div element
//and change the bg color back
function eventListener(element){
    element.addEventListener("mouseover", e => {
       e.target.style.setProperty('background-color','white');
       
    });
    element.addEventListener("mouseout", e => {
        e.target.style.backgroundColor = 'black';
    });
}
//add a prompt that asks user for the number of squares
//use that to define square size
//max no. of squares is 100
function gridSize(){
    let size;
    do {
        size = Number.parseInt(prompt("Enter the grid size: "));
    }
    while(!size);
  
    return size;
}
createCanvas(gridSize());




