
const sideBtn = document.getElementById("btnSideOpen");
const sideBar = document.getElementById("sidebar");
const sideBtnClose = document.getElementById("btnSideClose");

sideBtn.addEventListener("click" , ()=>{
    sideBar.style.transform = "translateX(8px)";
    sideBtnClose.style.transform = "translateX(-1px)";
    sideBtn.style.transform = "translateX(-70px)"
})


sideBtnClose.addEventListener("click" , ()=>{
    sideBar.style.transform = "translateX(-70px)";
    sideBtn.style.transform = "translateX(0px)";
    sideBtnClose.style.transform = "translateX(-70px)"
})