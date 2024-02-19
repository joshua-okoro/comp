function onecheck(){
    let url=localStorage.getItem("load4");
let img=new Image();
img.src=url;
document.getElementById("yearup12").appendChild(img);
}
 onecheck()
//2
function twocheck(){
    let urls=localStorage.getItem("loading5");
let imgs=new Image();
imgs.src=urls;
document.getElementById("year22").appendChild(imgs)
}
twocheck()
//23
function threecheck(){
let urlss=localStorage.getItem("loading6")
let imgss=new Image();
imgss.src=urlss;
document.getElementById("year34").appendChild(imgss)
}
threecheck()

