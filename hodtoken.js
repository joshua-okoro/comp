let hodsubmit=document.getElementById("hodsubmit");
hodsubmit.addEventListener("click",(e)=>{
    
 let hodtoken=document.getElementById("hodtoken").value;
  if(hodtoken==="computerscienceresults"){
    window.open("hodupload.html")
  }
  else{
    alert("please input HOD token")
  }
    

   
})