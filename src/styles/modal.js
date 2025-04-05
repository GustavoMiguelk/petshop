// Pegando os elementos
const modal = document.querySelector("dialog")
const openBtn = document.querySelector("#new-schedule")
const btnClose = document.querySelector("#close-btn")

openBtn.addEventListener("click" ,() =>{
    modal.style.display = "block"
})

btnClose.addEventListener("click", () =>{
        modal.style.display = "none"
})

