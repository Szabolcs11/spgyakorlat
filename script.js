let elipse1 = document.getElementById("elipse-1")
let elipse2 = document.getElementById("elipse-2")
let elipse3 = document.getElementById("elipse-3")
let elipse4 = document.getElementById("elipse-4")
let elipse5 = document.getElementById("elipse-5")

let images2 = [
    ["url('./aseets/image 14.jpg')", elipse1],
    ["url('./aseets/4541cc99083f618a22b772228f8a9698@2x 1.jpg')", elipse2],
    ["url('./aseets/image 14.jpg')", elipse3],
    ["url('./aseets/victoria-shes-UC0HZdUitWY-unsplash copy@2x 1.jpg')", elipse4],
    ["url('./aseets/80457d7e9d392ee84954d90d13d15d69@2x 1.png')", elipse5]
]
let i = 0;

setTimeout(() => {
    // changeimage()
}, 1000)

function changeimage() {
    if (i==images2.length-1) {
        i=0;
    }
    else {
        i++;
    }
    changed()


    setTimeout(() => {
        changeimage()
    }, 10000)
}

function changed() {
    document.getElementsByClassName("navigation-active")[0].classList.remove("navigation-active")
    images2[i][1].classList.add("navigation-active")
    document.getElementById("slider-container").style.backgroundImage = images2[i][0]
}

function NavigateRight() {
    if (i==images2.length-1) {
        i=0;
    }
    else {
        i++;
    }
    changed()
}

function NavigateLeft() {
    if (i==0) {
        i=4;
    }
    else {
        i=i-1
    }
    changed()
}

function GoTo(value, element) {
    i = value
    changed()
}



// Card Navigation \\
let carddatas = [
    ["Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.", "Maria Kartofeln"],
    ["Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco .", "Halling Tobias"],
    ["Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.", "Rene Weinstein"]

]
let j = 1

function CardLeft() {
    if (j==0) {
        j=2;
    }
    else {
        j--;
    }
    CardChanged()
}

function CardRight() {
    if (j==2) {
        j=0;
    }
    else {
        j++;
    }
    CardChanged()
}



function CardChanged() {
    document.getElementById("main-card-text").innerHTML = carddatas[j][0];
    document.getElementById("main-card-bottom-text").innerHTML = carddatas[j][1];
}




function HamburgerMenuClick() {
    let menu = document.getElementById("hamburgermenu")
    if (menu.classList.contains("toggle")) {
        menu.classList.remove("toggle")
    }
    else {
        menu.classList.add("toggle")
    }
}