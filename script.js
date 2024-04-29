function ontoggle() {
    const menu = document.querySelector(".hamburger-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", ontoggle);
/*
CODE FLOW

1. Nav bar (Desktop)
2. Nav bar for mobile devices (Hamburger)

*/

/* 
STANDARDS

1. Divide CSS in commented segments.

*/

/* 
BUGS TO FIX LATER

1. THE hamburger when open does not open as it should. Make the icon stick to it's position and nav links expand below it.
*/