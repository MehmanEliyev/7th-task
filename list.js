const inp = document.getElementById("custom-input");
const btn = document.getElementById("custom-button");
const ul = document.querySelector(".unorderList");
const btnDanger = document.getElementById("btnDanger");

let count = 0;

    //! ------------ Enter click  -----------------------------

inp.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let text = inp.value.trim();

    if (text != "") {
        ul.innerHTML += `<li class="list-group-item listItem mt-2 position-relative"> ${text} <button  class="btn text-danger deleteBtn "> X </button> </li> `;
        const listItem = document.getElementById(`${count}`);
        inp.value = "";
        count++;
    
        const deleteBtn = document.querySelectorAll(".deleteBtn");

        if (count > 1) {
          btnDanger.classList.remove("d-none");
          btnDanger.innerHTML = "Remove all user";
        }else if(count == 1){
          btnDanger.classList.remove("d-none");
          btnDanger.innerHTML = "Remove user";
        }
    
        deleteBtn.forEach((element) => {
          element.addEventListener("click", () => {
            element.parentElement.remove();
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

    //! ------------ button click  -----------------------------

btn.addEventListener("click", () => {
  let text = inp.value.trim();

  if (text != "") {
    ul.innerHTML += `<li id="${count}li" class="list-group-item listItem mt-2 position-relative"> ${text} <button  class="btn text-danger deleteBtn "> X </button> </li> `;
    const listItem = document.getElementById(`${count}`);
    inp.value = "";
    count++;
    console.log("add " + count);

    const deleteBtn = document.querySelectorAll(".deleteBtn");

    if (count > 1) {
      btnDanger.classList.remove("d-none");
      btnDanger.innerHTML = "Remove all user";
    }else if(count == 1){
      btnDanger.classList.remove("d-none");
      btnDanger.innerHTML = "Remove user";
    }

    deleteBtn.forEach((element) => {
      element.addEventListener("click", () => {
        element.parentElement.remove();
        count--;
        console.log("del " + count)
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

btnDanger.addEventListener("click", () => {
  ul.innerHTML = "";
  btnDanger.classList.add("d-none");
  count = 0;
});


