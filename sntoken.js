
let studentsubmit=document.getElementById("studentsubmit");
studentsubmit.addEventListener("click",()=>{
  let hodinput=document.getElementById("hodinput").value;

  function workingfunction(){
 for(let index=0; index<hodinput.length;index++){
if(hodinput==="023"||hodinput==="1234"||hodinput==="1d34"||hodinput==="12f4"||hodinput==="12ER4"||hodinput==="1E4"||hodinput==="sc234"||hodinput==="1bn34"||hodinput==="123FVX"){
  setTimeout(openfun(),2000)
    function openfun(){
 window.open("chechresult.html")
    }
    openfun()
    
  }
  else{

   alert("please input your nacoss due payment token")
    window.open("chechresult.html")
     
   
  }
  }
  }
  workingfunction()
})



        

