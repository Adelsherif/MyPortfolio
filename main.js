let elements=document.querySelectorAll(".toggle");
let arrayofelements = Array.from(elements);
let sun= document.querySelector(".fa-sun");
let moon= document.querySelector(".fa-moon");

dark = () =>{
    document.body.style.backgroundColor = "#051e34"
    arrayofelements.forEach((element) =>{
        element.style.color="#f6f7f9"
    })
}
light = () =>{
    document.body.style.backgroundColor = "#f6f7f9"
    arrayofelements.forEach((element) =>{
        element.style.color="#051e34"
    })
}
moonIcon = () =>{
    sun.style.display="none"
    moon.style.display="block"
}
sunIcon = () =>{
    sun.style.display="block"
    moon.style.display="none"
}
togglemode = () =>{
    if(localStorage.getItem("mode") === "light"){
        moonIcon()
        light()
    }else{
        sunIcon()
        dark()
    }
}

togglemode();
moon.addEventListener("click",function (){
    localStorage.setItem("mode","dark");
    localStorage.getItem("mode") === "light" ?  moonIcon():sunIcon();
    dark()
})
sun.addEventListener("click",function (){
    localStorage.setItem("mode","light");
    localStorage.getItem("mode") === "light" ?  moonIcon():sunIcon();
    light()
})

document.querySelector(".fa-bars").addEventListener("click", function (){document.querySelector(".links").classList.toggle("toggler")})


let textName = "Adel sherif";
let textJob = "Front-End Developer"
let nameTag = document.getElementById("span");
let valueName = " ";
let valueJob = " "
let countName = 0;
let countJob = 0;
let interval=setInterval(()=>{
    valueName += textName[countName]
        if(countName < textName.length){
            countName +=1
    nameTag.innerHTML = valueName;
        }
        else{
            valueName = " "
            valueJob += textJob[countJob]
        if(countJob < textJob.length-1){
            countJob +=1;
        }
        else{
            clearInterval(interval)
        }
        nameTag.innerHTML = valueJob;
        }
},300)
