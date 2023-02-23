// Uitklappen sorteer menu

let sort = document.querySelector(".options-title")
let menu = document.querySelector(".sort-filter")

sort.addEventListener("click", menuToggle)

function menuToggle() {
    menu.classList.toggle("sort-filter-show")
}