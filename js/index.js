const head = document.head;
const header = document.querySelector("header");
const dropdownMenu = document.querySelector(".dropdownMenu");
const about = document.querySelector(".about");
const footer = document.querySelector("footer");

function loadHead(){
    if(head != null){
        return fetch("/templates/head.html")
        .then(response => response.text())
        .then(data => {
            const template = document.createElement('template');
            template.innerHTML = data;
    
            head.appendChild(template.content);
        }).catch(error => {
            console.log("Error al cargar la plantilla head: " + error);
        });
    }else{
        console.log("head is null");
    }
}

function loadHeader(){
    if(header != null){
        return fetch("/templates/header.html")
        .then(response => response.text())
        .then(data => {
            const template = document.createElement('template');
            template.innerHTML = data;
    
            header.appendChild(template.content);
            loadActionsDropdownMenu();
            loadActionsSearch();
        }).catch(error => {
            console.log("Error al cargar la plantilla header: " + error);
        });
    }else{
        console.log("Header is null");
    }
}

function loadDropdownMenu(){
    if(dropdownMenu != null){
        return fetch("/templates/dropdownMenu.html")
        .then(response => response.text())
        .then(data => {
            const template = document.createElement('template');
            template.innerHTML = data;
    
            dropdownMenu.appendChild(template.content);
        }).catch(error => {
            console.log("Error al cargar la plantilla dropdownMenu: " + error);
        });
    }else{
        console.log("dropdownMenu is null");
    }
}

function loadAbout(){
    if(about != null){
        return fetch("/templates/about.html")
        .then(response => response.text())
        .then(data => {
            const template = document.createElement('template');
            template.innerHTML = data;
    
            about.appendChild(template.content);
        }).catch(error => {
            console.log("Error al cargar la plantilla about: " + error);
        });
    }else{
        console.log("about is null");
    }
}

function loadFooter(){
    if(footer != null){
        return fetch("/templates/footer.html")
        .then(response => response.text())
        .then(data => {
            const template = document.createElement('template');
            template.innerHTML = data;
    
            footer.appendChild(template.content);
        }).catch(error => {
            console.log("Error al cargar la plantilla footer: " + error);
        });
    }else{
        console.log("footer is null");
    }
}

const changeLanguage = async (lang) =>{
    const textsToChange = document.querySelectorAll("[data-section]");
    if(lang == null){
        localStorage.setItem("lang",navigator.language.charAt(0) + navigator.language.charAt(1));
        lang = localStorage.getItem("lang");
    }
    let lenguaje = lang;
    
    if(lenguaje != "es" && lenguaje != "en" && lenguaje != "ru" && lenguaje != "pt" && lenguaje != "de" && lenguaje != "fr"){
        lenguaje = "en";
    }
    const jsonLang = await fetch(`../json/translations/${lenguaje}.json`);
    const textsJSON = await jsonLang.json();
    localStorage.setItem("lang",lenguaje);
    for(const text of textsToChange){
        const section = text.dataset.section;
        const value = text.dataset.value;
        text.innerHTML = textsJSON[section][value];
    }
}

const promesas = [loadHead(), loadHeader(), loadDropdownMenu(), loadAbout(), loadFooter()];

Promise.all(promesas)
.then(() => {
    changeLanguage(localStorage.getItem("lang"));
})
.catch(error => console.log("Ocurrió un error: " + error));