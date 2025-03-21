let button=document.querySelector("button");
let currentmod="white"
button.onclick=()=>{
   
    if (currentmod=="white") {
        currentmod="black";
       document.querySelector("body").style.backgroundColor="black";
       document.querySelector("body").style.color="white"; 
       document.querySelector("button").style.backgroundColor="white"; 
       document.querySelector("button").style.color="black";
    } else if(currentmod=="black") {
        currentmod="white";
       document.querySelector("body").style.backgroundColor="white";
       document.querySelector("body").style.color="black";
       document.querySelector("button").style.backgroundColor="black";
       document.querySelector("button").style.color="white"; 
    }
   
}


