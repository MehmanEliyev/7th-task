const inp = document.getElementById("custom-input");
const btn = document.getElementById("custom-button");
const ul = document.querySelector(".unorderList");
const btnDanger = document.getElementById("btnDanger");
const numberList = document.querySelector(".numberList")

let count = 0;
let quantity = 0;
let arr = [];

//! ------------------ Enter click  -----------------------------

inp.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {

    let text = inp.value.trim();
  
  if (text != "") {

    quantity++;
    arr.push(quantity);

    ul.innerHTML += `
    <li class="list-group-item listItem mt-2 ml-4 position-relative"> ${text} <span class="quantity"></span>
    <button class="btn text-danger deleteBtn "> X </button> </li> `;

    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("mt-2");
    
    arr.forEach(element => {
      li.innerText = element;
      numberList.appendChild(li);
    });

    inp.value = "";
    count++;
    
    if (count > 1) {
      btnDanger.classList.remove("d-none");
      btnDanger.innerHTML = "Remove all user";
    }else if(count == 1){
      btnDanger.classList.remove("d-none");
      btnDanger.innerHTML = "Remove user";
    }
    
    const deleteBtn = document.querySelectorAll(".deleteBtn");
    
    deleteBtn.forEach((element) => {
      element.addEventListener("click", () => {
        
        element.parentElement.remove();

        numberList.innerHTML = "";
        arr.pop();
        
        arr.forEach(element => {
          const li = document.createElement("li");
          li.classList.add("list-group-item");
          li.classList.add("mt-2");
          li.innerText += element;
          numberList.appendChild(li);
        });
        
        quantity = arr.length;
        count--;
        
        if(count == 0){
          btnDanger.classList.add("d-none");
        } else if(count == 1){
          btnDanger.classList.remove("d-none");
          btnDanger.innerHTML = "Remove user";
        }
      });
    });
    
  } else {
    alert("Xana doldurulmayib");
  }
  }
});

//! -------------------- Button click  -----------------------------

btn.addEventListener("click", () => {
  
  let text = inp.value.trim().slice(0,115);
  
  if (text != "") {

    quantity++;
    arr.push(quantity);

    ul.innerHTML += `
    <li class="list-group-item listItem mt-2 ml-4 position-relative"> ${text} <span class="quantity"></span>
    <button class="btn text-danger deleteBtn "> X </button> </li> `;

    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("mt-2");
    
    arr.forEach(element => {
      li.innerText = element;
      numberList.appendChild(li);
    });

    inp.value = "";
    count++;
    
    if (count > 1) {
      btnDanger.classList.remove("d-none");
      btnDanger.innerHTML = "Remove all user";
    }else if(count == 1){
      btnDanger.classList.remove("d-none");
      btnDanger.innerHTML = "Remove user";
    }

    const deleteBtn = document.querySelectorAll(".deleteBtn");
    
    deleteBtn.forEach((element) => {
      element.addEventListener("click", () => {
        
        element.parentElement.remove();

        numberList.innerHTML = "";
        arr.pop();
        
        arr.forEach(element => {
          const li = document.createElement("li");
          li.classList.add("list-group-item");
          li.classList.add("mt-2");
          li.innerText += element;
          numberList.appendChild(li);
        });
        
        quantity = arr.length;
        count--;
        
        if(count == 0){
          btnDanger.classList.add("d-none");
        } else if(count == 1){
          btnDanger.classList.remove("d-none");
          btnDanger.innerHTML = "Remove user";
        }
      });
    });
    
  } else {
    alert("Xana doldurulmayib");
  }
});

//! -------------------- Danger button click  -----------------------------

btnDanger.addEventListener("click", () => {
  ul.innerHTML = "";
  numberList.innerHTML = "";
  arr = [];
  quantity = arr.length;
  btnDanger.classList.add("d-none");
  count = 0;
});


