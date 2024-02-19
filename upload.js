
let inputfiles=document.getElementById("inputfiles");


inputfiles.addEventListener("change",changepic);


function changepic(){
    let reader=new FileReader();
    reader.addEventListener("load",loadall);
   function loadall(){
    localStorage.setItem("dataalls",reader.result)
   }
   reader.readAsDataURL(this.files[0])
}

document.addEventListener("DOMContentLoaded",contenofload);
function contenofload(){
    let storageall=localStorage.getItem("dataalls");
    if(storageall){
        document.getElementById("uploadpic").setAttribute("src",storageall)
    }
}

let female=document.getElementById("female");
let male=document.getElementById("male");



document.addEventListener("DOMContentLoaded",()=>{
function checks(){
female.addEventListener("click",()=>{
    if(female.checked=true){
        female.disabled=true
    }
})
male.addEventListener("click",()=>{
    if(male.checked=true){
      localStorage.setItem("settinfmale",male.disabled=true)  
    }
    
})
}
checks()
})





