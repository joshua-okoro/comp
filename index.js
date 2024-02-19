let couting=1;
let coutingtime=4000;
window.addEventListener("load",loadall);
function loadall(){
    setInterval(display,5000)
}
function display(){
if(couting==1){
     document.getElementById("img1").style.opacity="1px";
     setTimeout(timeup,4000)
    function timeup(){
        document.getElementById("img1").style.right="0px";
     document.getElementById("img1").style.zIndex="1000px";
     
         document.getElementById("img2").style.right="-1200px";
     document.getElementById("img2").style.zIndex="1500px";

      document.getElementById("img3").style.right="1200px";
     document.getElementById("img3").style.zIndex="500px";
     document.getElementById("img1").style.opacity="0px";
     couting=2
    }
}

else if(couting==2){
     document.getElementById("img2").style.opacity="1px";
     setTimeout(timeup,4000)
    function timeup(){
        document.getElementById("img3").style.right="0px";
     document.getElementById("img3").style.zIndex="1000px";
     
         document.getElementById("img2").style.right="-1200px";
     document.getElementById("img2").style.zIndex="1500px";

      document.getElementById("img1").style.right="1200px";
     document.getElementById("img1").style.zIndex="500px";
     document.getElementById("img2").style.opacity="0px";
     couting=3
    }
}
else if(couting==3){
     document.getElementById("img3").style.opacity="1px";
     setTimeout(timeup,4000)
    function timeup(){
        document.getElementById("img2").style.right="0px";
     document.getElementById("img2").style.zIndex="1000px";
     
         document.getElementById("img3").style.right="1200px";
     document.getElementById("img3").style.zIndex="1500px";

      document.getElementById("img1").style.right="1200px";
     document.getElementById("img1").style.zIndex="500px";
     document.getElementById("img3").style.opacity="0px";
     couting=1
    }
}
}
display()

let stdforms=document.getElementById("stdforms");



stdforms.onsubmit=(e)=>{
let nameofstudent=stdforms["nameofstudent"]
 let matnumber=stdforms["matnumber"]
    e.preventDefault()
    console.log()
  if(nameofstudent.value==""){
    alert("empty input")
  }else
   if(matnumber.value.length<=18){
    alert("input is too short")
  }
  else
   if(matnumber.value.length>=20){
    alert("input is too high")
  }
  else
   if(matnumber.value.length==19&&nameofstudent.value.length!==""){
    window.location.assign("upload.html")
  }
  else{
    alert("error")
  }
}



