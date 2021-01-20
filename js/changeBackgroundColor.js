

function set_Color(num) {
    if(num == 1) {
        document.querySelector(".all").style.background = "Black";
        // document.querySelector("body").style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(53, 53, 53))";
    }

    if(num == 2) {
        document.querySelector(".all").style.background = "Red";
        // document.querySelector("body").style.background = "linear-gradient(to right, rgb(174, 0, 0), rgb(228, 65, 65))";
    }

    if(num == 3) {
        document.querySelector(".all").style.background = "Purple";
        // document.querySelector("body").style.background = "linear-gradient(to right, rgb(72, 0, 79), rgb(107, 41, 130))";
    }
}