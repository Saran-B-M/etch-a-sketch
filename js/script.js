//Create a webpage that has a 16X16 grid of divs
//When hovered over the grid should change the color of the hovered element
//Add a button that prompts user for the no. of grids per side
//Instead of changing the color to a single color, randomly select colors for 
//each div and add 10% black to passed over div so that after 10 passes only 
//that div completely changes to black
const body = document.querySelector("body");

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
    body.appendChild(canvas);

}

//Create a function that add event listener when the mouse rolls over a div
//add event listener that detects a mouse roll over an element and changes the
//bg color
//add another event listener that detects when the mouse left the div element
//and change the bg color back
events = []
function eventListener(element){
    element.addEventListener("mouseover", e => {
       let hue = Math.floor(Math.random()*361);
       let sat = Math.floor(Math.random()*101);
       let light = Math.floor(Math.random()*101);
       e.target.style.setProperty('background-color',`hsl(${hue}, 
        ${sat}%, ${light}%)`);
       events.push([e.target, hue, sat, light, light/10]);
       events.forEach(element => {
           element[3] = element[3]-element[4];
           element[0].style.backgroundColor = `hsl(${element[1]}, 
            ${element[2]}%, ${element[3]}%)`;
       });
       
       
    });
    element.addEventListener("mouseout", e => {
        
    });
}

//add a button that prompts user for the number of squares
const btn = document.createElement("button");
btn.textContent = "New canvas";
body.appendChild(btn);

btn.addEventListener("click", function(){

    const canvas = document.querySelector(".canvas");
    //if the canvas already exists remove it
    if(canvas) body.removeChild(canvas);
    //create new canvas
    createCanvas(gridSize());
})

function gridSize(){
    let size;
    do {
        size = Number.parseInt(prompt("Enter the grid size: "));
    }
    while(!size);
//max no. of squares is 100
    return size>100?100:size;
}





