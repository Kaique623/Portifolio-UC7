let container = document.getElementById("FormularioMainContainer");
let addButton = document.getElementById("addButton");
var currentRow = 3;

function createDay(){
    let entry = document.createElement("input");
    entry.setAttribute("class", "entryColumn");
    
    container.appendChild(entry);
    
    for (let i = 0; i < 10; i++){
        let input = document.createElement("input");
        input.type = "checkbox"
        input.class = "checkboxes";
        container.appendChild(input);
    }

    currentRow++;
    if (screen.width >= 320 && screen.width <= 767){
        addButton.style.gridColumn = currentRow;
        addButton.style.gridRow = "1/-1";
        container.style.maxWidth = "max-content + 200px";
    }
    else{
        addButton.style.gridRow = currentRow;
        addButton.style.gridColumn = "1/-1"
    }
}

function resizeScreen(){
    if (screen.width >= 320 && screen.width <= 767){
        addButton.style.gridColumn = currentRow;
        addButton.style.gridRow = "1/-1"
    }
    else{
        addButton.style.gridRow = currentRow;
        addButton.style.gridColumn = "1/-1"
    }
}

window.onresize = resizeScreen;