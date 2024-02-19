/*local storage for input*/

let formall=document.getElementById("formall");
let fname=formall["fname"];
let lname=formall["lname"];
let matno=formall["matno"];
let level=formall["level"];
let yearofentry=formall["yearofentry"];
let yearofgraduate=formall["yearofgraduate"];
let lga=formall["lga"];
let phonenumber=formall["phonenumber"];
let duration=formall["duration"];
let guardian=formall["guardian"];
let pro=formall["pro"];
let physical=formall["physical"];
let dateofbirth=formall["dateofbirth"];
let smari=formall["smari"];
let school=formall["school"];

function selectfun(){     
pro.addEventListener("click",(e)=>{
 localStorage.setItem("program",e.target.value)

})
physical.addEventListener("click",(e)=>{
localStorage.setItem("physicals",e.target.value);
})
dateofbirth.addEventListener("click",(e)=>{
localStorage.setItem("dateofbirth",e.target.value);
})
smari.addEventListener("click",(e)=>{
   localStorage.setItem("smari",e.target.value);
})
school.addEventListener("click",(e)=>{
    localStorage.setItem("schoo",e.target.value)
})
}
document.addEventListener("DOMContentLoaded",loadmeall)
function loadmeall(){
    let storessme=localStorage.getItem("program");
    if(storessme){
        document.getElementById("display11").innerHTML=storessme
    }

    let physicalls=localStorage.getItem("physicals")
    if(physicalls){
        document.getElementById("display10").innerHTML=physicalls;
    }
    let dateofbirth1=localStorage.getItem("dateofbirth");
    if(dateofbirth1){
        document.getElementById("display6").innerHTML=dateofbirth1
    }
    let maritals=localStorage.getItem("smari");
    if(maritals){
        document.getElementById("display17").innerHTML=maritals
    }
     let schools=localStorage.getItem("schoo");
    if(schools){
        document.getElementById("display7").innerHTML=schools
    }
}
loadmeall()
selectfun()

let delsu=formall["delsu"];
["yearofentry"];
/*localstorage input*/
function localoutput(){
 document.getElementById("display2").innerHTML=localStorage.getItem("dataall")
 document.getElementById("display4").innerHTML=localStorage.getItem("yearofentry")
  document.getElementById("display3").innerHTML=localStorage.getItem("matno")
   document.getElementById("display14").innerHTML=localStorage.getItem("yearofgraduate")
    document.getElementById("display14").innerHTML=localStorage.getItem("yearofgraduate")
     document.getElementById("display5").innerHTML=localStorage.getItem("lga")
     document.getElementById("display9").innerHTML=localStorage.getItem("phonenumber")
      document.getElementById("display15").innerHTML=localStorage.getItem("duration")
      document.getElementById("display16").innerHTML=localStorage.getItem("guardian")
        localStorage.setItem("guardian",duration.value)
 document.getElementById("display12").innerHTML=localStorage.getItem("lname")
 document.getElementById("display13").innerHTML=localStorage.getItem("level")
   
   
  
}
localoutput()
/*localstorage localcoades*/

 function localcoades(){
  formall.addEventListener("submit",(e)=>{
    e.preventDefault()
 
localStorage.setItem("dataall",fname.value)
 document.getElementById("display2").innerHTML=localStorage.getItem("dataall")

 localStorage.setItem("matno",matno.value)
 document.getElementById("display3").innerHTML=localStorage.getItem("matno")

 localStorage.setItem("yearofentry",yearofentry.value)
 document.getElementById("display4").innerHTML=localStorage.getItem("yearofentry")

  localStorage.setItem("yearofgraduate",yearofentry.value)
 document.getElementById("display6").innerHTML=localStorage.getItem("yearofgraduate")

  localStorage.setItem("yearofgraduate",yearofgraduate.value)
 document.getElementById("display14").innerHTML=localStorage.getItem("yearofgraduate")

  localStorage.setItem("lga",lga.value)
 document.getElementById("display5").innerHTML=localStorage.getItem("lga")

  localStorage.setItem("phonenumber",phonenumber.value)
 document.getElementById("display9").innerHTML=localStorage.getItem("phonenumber")

 
  localStorage.setItem("duration",duration.value)
 document.getElementById("display15").innerHTML=localStorage.getItem("duration")

  localStorage.setItem("guardian",guardian.value)
 document.getElementById("display16").innerHTML=localStorage.getItem("guardian")

  localStorage.setItem("lname",lname.value)
 document.getElementById("display12").innerHTML=localStorage.getItem("lname")

   localStorage.setItem("level",level.value)
 document.getElementById("display13").innerHTML=localStorage.getItem("level")

  
})  
 }
localcoades()

