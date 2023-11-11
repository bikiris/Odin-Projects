function createGrid(){
    const container = document.querySelector(".content");
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}

for(let i = 0; i < 16; i++){
    createGrid();
}

const box = document.querySelectorAll(".box");
box.forEach((element) => {
    element.addEventListener('mouseover', ()=> {
        element.style.backgroundColor = "red";
    })
    element.addEventListener('mouseout', ()=> {
        element.style.backgroundColor = "white";
    })
})

const btn = document.querySelector(".btn");
let gridSize = 0;
btn.addEventListener('click', ()=> {
    gridSize = prompt("Enter a number less than 100." , 0);
});