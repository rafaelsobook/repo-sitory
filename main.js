


// THIS THE ANIMATION THAT I USE IN MY MENU BAR
let menubtn = document.querySelector('.menu');
let menubtnkey = false;
let openmen = document.querySelector('.openMenus')

let firstw = document.querySelector('.firstWIn')
let secondw = document.querySelector('.secondWIn')
let thirdw = document.querySelector('.thirdWIn')
let fourthw = document.querySelector('.fourthWIn')

menubtn.addEventListener("click", function(){
   if(!menubtnkey){
    menubtn.classList.add("mclick")
    menubtnkey = true;
    openmen.classList.add("opennow")

    firstw.classList.add("firstOpen")
    secondw.classList.add("secondOpen")
    thirdw.classList.add("thirdOpen")
    fourthw.classList.add("fourthOpen")
   
}else{
    
    openmen.classList.replace("opennow", "closenow")
    menubtn.classList.remove("mclick")
    menubtnkey = false;

    firstw.classList.remove("firstOpen")
    secondw.classList.remove("secondOpen")
    thirdw.classList.remove("thirdOpen")
    fourthw.classList.remove("fourthOpen")
    
}
})
//                       animation on my scroll UP buttom
let arrowup = document.querySelector('.arrowup')
let menuimg = document.querySelector('.menuimg-scroll')
let menuOnscroll = document.querySelector('.menu-onscroll')


window.addEventListener('scroll', () => {

    if(window.pageYOffset > 150){
    arrowup.classList.add("arrowupshow")
    menuOnscroll.classList.replace('menuscrollanimateHide', 'menuscrollanimate')
 
    menuOnscroll.classList.add('menuscrollanimate')
    }else{
    arrowup.classList.remove("arrowupshow")
    menuOnscroll.classList.replace('menuscrollanimate', 'menuscrollanimateHide')
    }


   
})

window.addEventListener('scroll', () => {

    if(window.pageYOffset > 1450){
        menuOnscroll.classList.add("menuscrollInvert")
    }else{
        menuOnscroll.classList.remove("menuscrollInvert")
    }


})

// animation in my settings ICON
let settingIcon = document.querySelector('.setting')
let setadd = 45

settingIcon.addEventListener('click', () => {
    setadd += 60
    settingIcon.style.transform = `rotate(${setadd}deg)`
})

// END OF MY ANIMATION IN MY MENU BAR


// SERVICES RESPONSIVENESS

const titles = document.querySelector('.title');
const description = document.querySelector('.description');
let maintenanz = false;
const bwebsite = document.querySelector('.bwebsite');
const bwebsitedef = document.querySelector('.bwebsitedef');
let websites = false;
const blogs = document.querySelector('.blogs');
const blogsdown = document.querySelector('.blogsdown');
let vlogs = false;
const editing = document.querySelector('.editing');
const editingdef = document.querySelector('.editingdef');
let edits = false;


titles.addEventListener("click", function(){
    if(!maintenanz){
        titles.classList.add("moveup")
        description.classList.add("moveup")
        maintenanz = true
    }else{
        titles.classList.remove("moveup")
        description.classList.remove("moveup")
        maintenanz = false
    }
})

bwebsite.addEventListener("click", function(){
    if(!websites){
        
        bwebsite.classList.add("moveup")
        bwebsitedef.classList.add("moveup")
        
        websites = true
    }else{
        bwebsite.classList.remove("moveup")
        bwebsitedef.classList.remove("moveup")
        
       websites = false
    }
})

blogs.addEventListener("click", function(){
    if(!vlogs){
        blogs.classList.add("moveup")
        blogsdown.classList.add("moveup")
        vlogs = true
    }else{
        blogs.classList.remove("moveup")
        blogsdown.classList.remove("moveup")
        vlogs = false
    }
})

editing.addEventListener("click", function(){
    if(!edits){
        editing.classList.add("moveup")
        editingdef.classList.add("moveup")
        edits = true
    }else{
        editing.classList.remove("moveup")
        editingdef.classList.remove("moveup")
        edits = false
    }
})
