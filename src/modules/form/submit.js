import dayjs from "dayjs"

// Selecionando os inputs
const form = document.getElementById("form-new-pet")
const selectedDate = document.getElementById("date")

form.onsubmit = (event) => {
    // Impede a página de atualizar.
    event.preventDefault()

    console.log("Enviou")
}

