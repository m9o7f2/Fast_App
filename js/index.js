// body padding and header height

let hero = _ =>{

    let sub_nav = document.querySelector(".main-nav .sub-nav"),
        navbar = document.querySelector(".main-nav nav");
        
        document.body.style.paddingTop = sub_nav.offsetHeight + navbar.offsetHeight + "px";
        document.querySelector("header").style.height = window.innerHeight - (sub_nav.offsetHeight + navbar.offsetHeight) + "px";

    window.onscroll = () =>{
        if(window.scrollY > 600){
            sub_nav.parentElement.style.top = -sub_nav.offsetHeight + "px";
        }else{
            sub_nav.parentElement.style.top = "0px";
        }
    }
}
hero()

//change IMG on resize fonction
let changer = (el,img,windowWidth) => {
    if(window.innerWidth < windowWidth){
        document.querySelector(el).style.backgroundImage = "url("+ img[1] +")";
    }else{
        document.querySelector(el).style.backgroundImage = "url("+ img[0] +")";
    }
    window.onresize = () =>{
        if(window.innerWidth < windowWidth){
            document.querySelector(el).style.backgroundImage = "url("+ img[1] +")";
        }else{
            document.querySelector(el).style.backgroundImage = "url("+ img[0] +")";
        }
    }
}
changer("header",["img/other/hero.jpg","img/other/pr_bg.jpg"],990)

// phone-screen

function phone_screen(){
    
    
    setInterval(function(){
        let ph_screen = ["url('img/appphone/carousel_01.jpg')","url('img/appphone/carousel_02.jpg')","url('img/appphone/carousel_03.jpg')","url('img/appphone/carousel_04.jpg')"]
        let screen = document.querySelector(".phone-screen");
        let rand = Math.floor(Math.random() * 4);
        screen.style.backgroundImage = ph_screen[rand];
    },2000)
}
phone_screen()

// email valid

let email_valid = () => {
    let input = document.querySelector(".input");
    let worring = document.querySelector(".worring");

    input.onblur = () => {
        if(input.value.includes("@") === false){
            worring.textContent = "I Forgot The @ Sign (Slap Me To Stop)"
            worring.classList.add("show")
            worring.style.color = "#dc3545";
        }else if (input.value.includes("gmail") === false || input.value.includes("yahoo") === false || input.value.includes("hotmail") === false){
            worring.textContent = "You must Specify The Type Of Email (Slap Me To Stop)"
            worring.classList.add("show")
            worring.style.color = "#dc3545";
        }else if(input.value.endsWith('.com') === false){
            worring.textContent = "I Forgot The '.com' In The End (Slap Me To Stop )" 
            worring.classList.add("show")
            worring.style.color = "#dc3545";
        }else{
            worring.textContent = "Valid Email (Slap Me To Stop)"
            worring.classList.remove("show")
            worring.style.color = "#28a745";
            worring.style.opacity = "1";

        }
    }
    worring.onclick = ()=> {
        worring.textContent = "😭😭😭";
        worring.classList.remove("show")
        worring.style.opacity = "1"
    }
}
email_valid()