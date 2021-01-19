

function set_Color(num) {
    if(num == 1) {
        document.querySelector("body").style.background = "Black";
        document.querySelector("body").style.color = "White";
    }

    if(num == 2) {
        document.querySelector("body").style.background = "Red";
        document.querySelector("body").style.color = "Initial";
    }

    if(num == 3) {
        document.querySelector("body").style.background = "Initial";
        document.querySelector("body").style.color = "Initial";
    }
}