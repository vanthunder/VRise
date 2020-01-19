var aufgeklappt = false;
var menüpunkte = document.getElementsByClassName("menüpunkt");
function sandwichClick() {

       if (aufgeklappt == false) {
            for(var i =0; i<3; i++){
                menüpunkte[i].setAttribute("style", "display: block");
            }
            document.getElementsByClassName("background")[0].setAttribute("style", "grid-row-start: 1; grid-row-end: 5; height: 225px;");
            aufgeklappt = true;
       }
       else {
            for(var i =0; i<3; i++){
                menüpunkte[i].setAttribute("style", "display: ;");
            }
            document.getElementsByClassName("background")[0].setAttribute("style", "grid-row-start: 1; grid-row-end: 2; height: 75px;");
            aufgeklappt = false;
       }
}

function resize() {
    if(screen.width > 754 && aufgeklappt == true){
        
        sandwichClick();
    }
}