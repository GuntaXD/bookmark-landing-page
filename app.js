let navbar = document.querySelector(".navbar");
let btn_menu = document.querySelector(".btn__menu");
let navbar_link = navbar.getElementsByClassName("navbar__link");
let navbar_link_login = navbar.querySelector(".navbar__link--login");
let social_links = navbar.getElementsByClassName("social__link");

btn_menu.addEventListener("click" , ()=>{
    navbar.classList.toggle("visible");
});

for( let i = 0 ; i < navbar_link.length ; i++ ){

    navbar_link[i].addEventListener("click" , ()=>{
        navbar.classList.toggle("visible");
    });

}

navbar_link_login.addEventListener("click", ()=>{
    navbar.classList.toggle("visible");
});

for( let i = 0 ; i < social_links.length ; i++ ){

    social_links[i].addEventListener("click" , ()=>{
        navbar.classList.toggle("visible");
    });

}

// funcionalidad de features

let features = document.querySelector(".features");
let options = features.getElementsByClassName("option");
let article = features.getElementsByClassName("article");

for( let i = 0; i < options.length ; i++ ){

    options[i].addEventListener("click" , ()=>{

        for( let i = 0; i < options.length ; i++ ){

            if( options[i].classList.contains("active") ){
                options[i].classList.toggle("active");
                article[i].classList.toggle("active");
            }

        }

        options[i].classList.toggle("active");
        article[i].classList.toggle("active");

    });
}