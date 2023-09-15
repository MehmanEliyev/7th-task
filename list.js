
const inp = document.getElementById("custom-input");
const btn = document.getElementById("custom-button");
const ul = document.querySelector(".unorderList");
const btnDanger = document.getElementById("btnDanger");

let count = 0;


inp.addEventListener("keypress", event=>{
    if(event.key === "Enter"){
        let text = inp.value.trim();

        if(text != ""){
            ul.innerHTML += `<li class="list-group-item w-100 mt-2"> ${text} </li>`; 
            count++;
            inp.value = "";
            console.log(count);
            if(count == 1){
                btnDanger.classList.remove("d-none");
                btnDanger.innerHTML = "Remove user"
            }else{
                btnDanger.classList.remove("d-none");
                btnDanger.innerHTML = "Remove all user"
            }
        }else {
            alert("Xana doldurulmayib");
        } 
    }
})


btn.addEventListener("click", ()=>{
    
    let text = inp.value.trim();

    if(text != ""){
        ul.innerHTML += `<li class="list-group-item w-100 mt-2"> ${text} </li>`; 
        count++;
        inp.value = "";
        console.log(count);
        if(count == 1){
            btnDanger.classList.remove("d-none");
            btnDanger.innerHTML = "Remove user"
        }else{
            btnDanger.classList.remove("d-none");
            btnDanger.innerHTML = "Remove all user"
        }
    }else {
        alert("Xana doldurulmayib");
    }
})


btnDanger.addEventListener("click", ()=>{

    ul.innerHTML = "";
    btnDanger.classList.add("d-none");

})