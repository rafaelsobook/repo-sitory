
// THIS THE ANIMATION THAT I USE IN MY MENU BAR

let menubtn = document.querySelector('.menu');
let menubtnkey = false;

menubtn.addEventListener("click", function(){
   if(!menubtnkey){
    menubtn.classList.add("mclick")
    menubtnkey = true;
}else{
    menubtn.classList.remove("mclick")
    menubtnkey = false;
}
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
