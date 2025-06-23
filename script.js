function createGrid(num){
    for(let i=0;i<num*num;i++){
        const cell=document.createElement("div");
        cell.classList.add("grid-cell");
        document.querySelector(".grid").appendChild(cell);
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getRandomColor();
          });
    }
}
createGrid(16);
function promptUser(){
    const size = prompt('Enter the grid size (1-50)');
    if(size>=1 && size<=50){
        document.querySelector(".grid").innerHTML='';
        createGrid(size);
        const cells = document.querySelectorAll(".grid-cell");
        cells.forEach(cell => {
            cell.style.width = `${560/size}px`;
            cell.style.height = `${560/size}px`;
        });
        
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

