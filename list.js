
const inp = document.getElementById("custom-input");
const btn = document.getElementById("custom-button");
const ul = document.querySelector(".unorderList");
const btnDanger = document.getElementById("btnDanger");


btn.addEventListener("click", ()=>{
    
    let text = inp.value;

    if(text != ""){
        ul.innerHTML += `<li class="list-group-item w-100 mt-2"> ${text} </li>`; 
        inp.value = "";
        btnDanger.classList.remove("d-none");
    }else {
        alert("Xana doldurulmayib");
    }
})


btnDanger.addEventListener("click", ()=>{

    ul.innerHTML = "";
    btnDanger.classList.add("d-none");

})