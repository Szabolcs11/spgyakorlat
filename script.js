function HamburgerMenuClick() {
    let menu = document.getElementById("hamburgermenu")
    if (menu.classList.contains("toggle")) {
        menu.classList.remove("toggle")
    }
    else {
        menu.classList.add("toggle")
    }
}