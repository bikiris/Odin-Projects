function createGrid(gridSize){
    const container = document.querySelector('.content');
    container.textContent = "";
    
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.className = "row";
        for(let j = 0; j < gridSize; j++){
            const box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function addHover(){
    const box = document.querySelectorAll(".box");
    box.forEach((element) => {
        element.addEventListener('mouseover', changeColor);
    });
}

function changeColor(event){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function init() {
    const gridSize = prompt("Enter your grid size." , 0);
    if(gridSize > 100){
        alert("Grid size is too large");
        return;
    }
    createGrid(gridSize);
    addHover();
}


const btn = document.querySelector(".btn");
btn.addEventListener('click', init);