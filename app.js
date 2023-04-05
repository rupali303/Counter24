let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");


btns.forEach(bbtn =>{
    bbtn.addEventListener("click",function(e){
        const style = e.target.classList;
        if(style.contains("decrease")){
            count--;
        }else
        if(style.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })

})


