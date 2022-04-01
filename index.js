const buttons = document.querySelectorAll(".btn");
const result =  document.getElementById("result");

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        //result.textContent = result.textContent+e.target.id; OU
        result.textContent+= e.target.id;
    });
});

equal.addEventListener('click', ()=>{
    result.textContent= eval(result.textContent);
});


clear.addEventListener("click", ()=>{
    result.textContent="";  
});