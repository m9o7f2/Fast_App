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
        console.log(ph_screen[rand])
        screen.style.backgroundImage = ph_screen[rand];
    },2000)
}
phone_screen()