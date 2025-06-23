function createGrid(num){
    for(let i=0;i<num*num;i++){
        const cell=document.createElement("div");
        cell.classList.add("grid-cell");
        document.querySelector(".grid").appendChild(cell);
        cell.opacityLevel = 0;
        cell.color = null;
        cell.addEventListener("mouseover", () => {
            if(!cell.color){
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                cell.color = `${r}, ${g}, ${b}`;
            }
            if(cell.opacityLevel<1){
                cell.opacityLevel+=0.1;
            }
            cell.style.backgroundColor = `rgba(${cell.color}, ${cell.opacityLevel})`;
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

