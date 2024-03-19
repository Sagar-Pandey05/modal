let btn = document.querySelector("#btn2")
let btn2 =document.querySelector("#btn1")


btn.addEventListener("click", function(){
    document.querySelector("#main").style.opacity = 1;
    document.querySelector("#main").style.pointerEvents = "visible";
    document.querySelector("#modal").style.top ="15%";    
});

btn2.addEventListener("click", function(){
    document.querySelector("#main").style.opacity = 0;
    document.querySelector("#main").style.pointerEvents = "none";
    document.querySelector("#modal").style.top ="5%";    
});
