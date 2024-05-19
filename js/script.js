// Variables globales
let screenWidth = screen.width
let screenHeight = screen.height
let containerButtons = document.querySelector(".ulMobile")
let lightModeActive = false
let headerOpacity = document.querySelector("header>div.opacity")

//--> Function change light mode on page
let lightMode = () => {
    let lightButton = document.getElementById("lightButton")
    let body = document.querySelector("body")
    let allElements = document.querySelectorAll("*");
    let lightButtonMobile = document.querySelectorAll("#lightButton")[1]
    let heroButton
    

    if (!lightButton.innerHTML.includes("nightlight")) {
        lightModeActive = true
        //Modificación de estilos y elementos según el "lightMode"
        lightButton.innerHTML = '<span class="material-symbols-outlined">nightlight</span>'
        body.style.background = 'linear-gradient(144deg, #bfbc60, #e8e989, #bfbc60)'
        headerOpacity.style.opacity = "0.65"
        
        //Cambio color de la navbarMobile
        if (screenWidth < 425){
            containerButtons.style.backgroundColor =  "#464525"
            lightButtonMobile.innerHTML = '<span class="material-symbols-outlined">nightlight</span>'
        }
        
        //Recorre y modifica el color de todos los elementos
        allElements.forEach(element => {
                element.style.color = "black";
        });

        //Captura y modificación del ID del button para efecto hover según el "lightMode"
        heroButton = document.getElementById("heroButton")
        heroButton.className = "buttonHoverLightMode"
    }
    else {
        lightModeActive = false
        //Modificación de estilos y elementos según el "lightMode"
        lightButton.innerHTML = '<span class="material-symbols-outlined">light_mode</span>'
        body.style.background = 'linear-gradient(144deg, #030109, #1e2759, #4b4d5b)'
        
        //Cambio color de la navbarMobile
        if (screenWidth < 425){
            containerButtons.style.backgroundColor =  "#030408";
            lightButtonMobile.innerHTML = '<span class="material-symbols-outlined">light_mode</span>'
        }

        //Recorre y modifica el color de todos los elementos
        allElements.forEach(element => {
            element.style.color = "white";
        });

        //Captura y modificación del ID del button para efecto hover según el "lightMode"
        heroButton = document.getElementsByClassName("buttonHoverLightMode")[0]
        heroButton.className = "heroButton"
    }
}

//--> Function change language on page
let changeLanguage = () => {
    let languageButton = document.getElementById("languageButton")
    let presentationText = document.querySelector(".presentationText")
    let heroButton = document.querySelector("#heroButton")
    let title = document.querySelector("title")
    let languageButtonMobile = document.querySelectorAll("#languageButton")[1]
    
    if (languageButton.textContent == "En" || languageButton.textContent == "English") {
        //Seteo de timeDelay para lograr un efecto progresivo en las modificaciones de texto
        setTimeout(function () {
            title.innerText = "Presentation - Ises J.C."
            presentationText.innerHTML = "I am a Junior Web Developer with a focus on front-end and basic knowledge of back-end. I am currently working in the educational field with the goal of training future digital talents, working at Digital House and the Ministry of Education of Buenos Aires City. <br>Additionally, I am constantly improving my skills through project development, taking courses, and facing new challenges that contribute to my professional growth."
            
            //Cambio el texto del boton de idioma en Mobile (English - Español)
                languageButtonMobile.textContent = "Español"
                languageButton.textContent = "Es"
                heroButton.innerHTML = '<a href="mailto: juancruzises@gmail.com">Contact me</a>'
        }, 100);
    }
    else {
        //Seteo de timeDelay para lograr un efecto progresivo en las modificaciones de texto
        setTimeout(function () {
            title.innerText = "Presentación - Ises J.C."
            presentationText.innerHTML = "Soy un Desarrollador Web Jr con enfoque en front end y conocimientos básicos de back end. Actualmente me encuentro trabajando en el campo educativo con el objetivo de formar futuros talentos digitales, desempeñandome en la empresa Digital House y en el ministerio de Educación de la CABA. <br>Además, continuo en constante formación, perfeccionando mis habilidades mediante el desarrollo de proyectos, la realización de cursos y afrontando nuevos desafíos que contribuyan a mi crecimiento profesional."
            heroButton.innerHTML = '<a href="mailto: juancruzises@gmail.com">Contáctame</a>'
            //Cambio el texto del boton de idioma en Mobile (English - Español)
                languageButtonMobile.textContent = "English"
                languageButton.textContent = "En"
        }, 100);
    }
}


//--> Function burgerButtonMobile
let burgerButton = document.querySelector("#burgerButton")
let toggleButton = false

let showMobileButtons = ()=>{
    if(!toggleButton){
        if(lightModeActive){
            containerButtons.style.backgroundColor = "#55552b"
        }
        else{
            containerButtons.style.backgroundColor = "#030408"
        }
        containerButtons.style.right = "0px"
        containerButtons.style.width = "70vw";
        containerButtons.style.display = "flex";
        toggleButton = true
    }else{
        containerButtons.style.right = "-100%"
        containerButtons.style.width = "0vw";
        containerButtons.style.display = "none";
        toggleButton = false
    }
}


// Modificaciones de estilos para mobile
document.addEventListener("scroll", () => {
    let scrollY = document.body.getBoundingClientRect();
    let burgerButton = document.querySelector("#burgerButton > span")

    //Cambio de color el header al scrollear hacia abajo
    if(!lightModeActive){
        if(scrollY.y < -30){
            headerOpacity.style.opacity = "1"
            burgerButton.style.color = "white"
        }else{
            headerOpacity.style.opacity = "0.65"
        }
    }
})