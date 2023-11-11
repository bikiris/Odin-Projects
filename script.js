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
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = "red";
    })
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = "white";
    })
})