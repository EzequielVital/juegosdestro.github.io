function loadActionsSearch(){
    const buttonSearch = document.querySelector(".buttonSearch");
const searchContainer = document.querySelector(".searchContainer");
const dropdownMenuBack2 = document.querySelector(".dropdownMenuBack");
const body2 = document.querySelector("body");
const buttonSearchPost = document.querySelector(".buttonSearchPost");
const inputValue = document.querySelector(".inputValue");

dropdownMenuBack2.addEventListener("click", function () {
    searchContainer.classList.remove("is-active");
    dropdownMenuBack2.classList.remove("is-active");
    body2.classList.remove("noScroll");
});

buttonSearch.addEventListener("click", function () {
    searchContainer.classList.toggle("is-active");
    dropdownMenuBack2.classList.toggle("is-active");
    body2.classList.toggle("noScroll");
});

buttonSearchPost.addEventListener("click", function(){
    
    location.href = `https://juegosdestro.com/search/${inputValue.value.replaceAll(" ", "-")}`;
});
}
