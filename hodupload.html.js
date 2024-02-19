 
let uploadresult1=document.getElementById("uploadresult1");
let yearup1=document.getElementById("year1");
let outputup="";
uploadresult1.addEventListener("change",uploadresult1all)
function uploadresult1all(){
    let reader=new FileReader();
    reader.addEventListener("load",loadallupload);
    function loadallupload(){
        localStorage.setItem("datas",reader.result)
    }
    reader.readAsDataURL(this.files[0])
}
document.addEventListener("DOMContentLoaded",contenload);
function contenload(){
    let stores=localStorage.getItem("datas");
    if(stores){
       yearup1.setAttribute("src",stores) 
    }
}
//11

let uploadresult2=document.getElementById("uploadresult2");
let yearup2=document.getElementById("year2");
let outputup2="";
uploadresult2.addEventListener("change",uploadresult1all2)
function uploadresult1all2(){
    let reader=new FileReader();
    reader.addEventListener("load",loadallupload2);
    function loadallupload2(){
        localStorage.setItem("datass",reader.result)
    }
    reader.readAsDataURL(this.files[0])
}
document.addEventListener("DOMContentLoaded",contenload2);
function contenload2(){
    let storess=localStorage.getItem("datass");
    if(storess){
       yearup2.setAttribute("src",storess) 
    }
}
//12

let uploadresult3=document.getElementById("uploadresult3");
let yearup3=document.getElementById("year3");
let outputup3="";
uploadresult3.addEventListener("change",uploadresult1all3)
function uploadresult1all3(){
    let reader1=new FileReader();
    reader1.addEventListener("load",loadallupload3);
    function loadallupload3(){
        localStorage.setItem("datases",reader1.result)
    }
    reader1.readAsDataURL(this.files[0])
}
document.addEventListener("DOMContentLoaded",contenload3);
function contenload3(){
    let storesse=localStorage.getItem("datases");
    if(storesse){
       yearup3.setAttribute("src",storesse) 
    }
}
//2
let uploadresult4=document.getElementById("uploadresult4");

uploadresult4.addEventListener("change",contenload4);
function contenload4(){
    let reader4=new FileReader();
    reader4.addEventListener("load",reader41);
    function reader41(){
        localStorage.setItem("load4",reader4.result)
    }
    reader4.readAsDataURL(this.files[0])
}
document.addEventListener("DOMContentLoaded",loading4);
function loading4(){
let loading41=localStorage.getItem("load4")
if(loading41){
    document.getElementById("yearup22").setAttribute("src",loading41)
}
}
//year22

let uploadresult5=document.getElementById("uploadresult5");

uploadresult5.addEventListener("change",changing5);
function changing5(){
    let reader5=new FileReader();
    reader5.addEventListener("load",load5);
    function load5(){
        localStorage.setItem("loading5",reader5.result)
    }
    reader5.readAsDataURL(this.files[0])
}

document.addEventListener("DOMContentLoaded",contentload5);
function contentload5(){
    let loading51=localStorage.getItem("loading5");
    if(loading51){
        document.getElementById("year23").setAttribute("src",loading51);
    }
}
//year23

let uploadresult6=document.getElementById("uploadresult6");

uploadresult6.addEventListener("change",changing6);
function changing6(){
    let reader6=new FileReader();
    reader6.addEventListener("load",load6);
    function load6(){
        localStorage.setItem("loading6",reader6.result)
    }
    reader6.readAsDataURL(this.files[0])
}

document.addEventListener("DOMContentLoaded",contentload6);
function contentload6(){
    let loading61=localStorage.getItem("loading6");
    if(loading61){
        document.getElementById("year24").setAttribute("src",loading61);
    }
}
//year3

let uploadresult31=document.getElementById("uploadresult31");

uploadresult31.addEventListener("change",changing31);
function changing31(){
    let reader31=new FileReader();
    reader31.addEventListener("load",load31);
    function load31(){
        localStorage.setItem("loading333",reader31.result)
    }
    reader31.readAsDataURL(this.files[0])
}

document.addEventListener("DOMContentLoaded",contentload301);
function contentload301(){
    let loading311=localStorage.getItem("loading333");
    if(loading311){
        document.getElementById("yearup32").setAttribute("src",loading311);
    }
}
//year31

let uploadresult321=document.getElementById("uploadresult321");

uploadresult321.addEventListener("change",changing3211);
function changing3211(){
    let reader32111=new FileReader();
    reader32111.addEventListener("load",load331);
    function load331(){
        localStorage.setItem("loading332",reader32111.result)
    }
    reader32111.readAsDataURL(this.files[0])
}

document.addEventListener("DOMContentLoaded",contentload3011);
function contentload3011(){
    let loading3331=localStorage.getItem("loading332");
    if(loading3331){
        document.getElementById("year32").setAttribute("src",loading3331);
    }
}

//year32

let uploadresult334=document.getElementById("uploadresult334");

uploadresult334.addEventListener("change",changing3231);
function changing3231(){
    let changing3231=new FileReader();
    changing3231.addEventListener("load",load3332);
    function load3332(){
        localStorage.setItem("loading3332",changing3231.result)
    }
    changing3231.readAsDataURL(this.files[0])
}

document.addEventListener("DOMContentLoaded",contentload3111);
function contentload3111(){
    let loading3332=localStorage.getItem("loading3332");
    if(loading3332){
        document.getElementById("year33").setAttribute("src",loading3332);
    }
}






//year4

let uploadresult434=document.getElementById("uploadresult41");

uploadresult434.addEventListener("change",changing4231);
function changing4231(){
    let changing4231=new FileReader();
    changing4231.addEventListener("load",load4332);
    function load4332(){
        localStorage.setItem("loading432",changing4231.result)
    }
    changing4231.readAsDataURL(this.files[0])
}

document.addEventListener("DOMContentLoaded",contentload4111);
function contentload4111(){
    let loading4332=localStorage.getItem("loading432");
    if(loading4332){
        document.getElementById("yearup42").setAttribute("src",loading4332);
    }
}

//year41

let uploadresult43=document.getElementById("uploadresult43");

uploadresult43.addEventListener("change",changing4331);
function changing4331(){
    let changing4321=new FileReader();
    changing4321.addEventListener("load",load4333);
    function load4333(){
        localStorage.setItem("loading433",changing4321.result)
    }
    changing4321.readAsDataURL(this.files[0])
}

document.addEventListener("DOMContentLoaded",contentload4211);
function contentload4211(){
    let loading4333=localStorage.getItem("loading433");
    if(loading4333){
        document.getElementById("year43").setAttribute("src",loading4333);
    }
}

//year42

let uploadresult44=document.getElementById("uploadresult44");

uploadresult44.addEventListener("change",changing441);
function changing441(){
    let changing4441=new FileReader();
    changing4441.addEventListener("load",load4344);
    function load4344(){
        localStorage.setItem("loading4444",changing4441.result)
    }
    changing4441.readAsDataURL(this.files[0])
}

document.addEventListener("DOMContentLoaded",contentload4441);
function contentload4441(){
    let loading4444=localStorage.getItem("loading4444");
    if(loading4444){
        document.getElementById("year44").setAttribute("src",loading4444);
    }
}

