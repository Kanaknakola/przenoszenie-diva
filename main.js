const div = document.querySelector("div");
let divX;
let divY;
let insertDivX;
let insertDivY;
let moveDiv = false;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = "gray";
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    moveDiv = !moveDiv;
})

div.addEventListener('mousemove', (e) => {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    if (moveDiv) { 
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = "black";
    moveDiv = !moveDiv;
})