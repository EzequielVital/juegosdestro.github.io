function loadActionsDropdownMenu(){
    const button = document.querySelector(".containerButtonCategories");
const dropdownMenu = document.querySelector(".dropdownMenu");
const dropdownMenuBack = document.querySelector(".dropdownMenuBack");
const body = document.querySelector("body");

dropdownMenuBack.addEventListener("click", function () {
    dropdownMenu.classList.remove("is-active");
    dropdownMenuBack.classList.remove("is-active");
    body.classList.remove("noScroll");
});

button.addEventListener("click", function () {
    dropdownMenu.classList.toggle("is-active");
    dropdownMenuBack.classList.toggle("is-active");
    body.classList.toggle("noScroll");
});
}