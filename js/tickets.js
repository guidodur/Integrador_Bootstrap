const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre              = document.getElementById("name");
let divErrorNombre      = document.getElementById("mensajeErrorNombre");
let apellido            = document.getElementById("lastname");
let divErrorApellido    = document.getElementById("mensajeErrorApellido");
let email               = document.getElementById("email");
let divErrorEmail       = document.getElementById("mensajeErrorEmail");
let canttkt             = document.getElementById("cantidad");
let divErrorCantidad    = document.getElementById("mensajeErrorCantidad");
let categoria           = document.getElementById("categoria");
let btnsubmit           = document.getElementById("submit");
let btnreset            = document.getElementById("reset");

const sacarerrorclass = () => {
    let listanodos = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < listanodos.length; i++){
        listanodos[i].classList.remove('is-invalid');
    }
    let listanodosdiv = document.querySelectorAll(".invalid-feedback")
    for (let i = 0; i < listanodosdiv.length; i++){
        listanodosdiv[i].classList.remove('mostrar');
    }
}

const Total = () => {
    sacarerrorclass ();
    if(nombre.value === ""){
        nombre.classList.add("is-invalid");
        divErrorNombre.classList.add("mostrar");
        nombre.focus();
        return;
    }
    if(apellido.value === ""){
        apellido.classList.add("is-invalid");
        divErrorApellido.classList.add("mostrar");
        apellido.focus();
        return;
    }
    const emailValido = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    if(email.value === ""){
        email.classList.add("is-invalid");
        divErrorEmail.classList.add("mostrar");
        email.focus();
        return;
    }
    if ((canttkt.value == 0) || (isNaN(canttkt.value))){
        //alert ("Ingrese una cantidad valida de tickets.");
        canttkt.classList.add("is-invalid");
        divErrorCantidad.classList.add("mostrar");
        canttkt.focus();
        return;
    }

    let ValorTotalTickets = (canttkt.value) * ValorTicket;

    switch (categoria.value){
        case "1":
            ValorTotalTickets = ValorTotalTickets - (descuentoEstudiante / 100 * ValorTotalTickets);
            break;
        case "2":
            ValorTotalTickets = ValorTotalTickets - (descuentoTrainee / 100 * ValorTotalTickets);
            break;
        case "3":
            ValorTotalTickets = ValorTotalTickets - (descuentoJunior / 100 * ValorTotalTickets);
            break;  
    }
    TotalaPagar.innerHTML = ValorTotalTickets;
}

btnsubmit.addEventListener('click', Total);

const resetTotal = () => {
    sacarerrorclass ();
    TotalaPagar.innerHTML = "";
    return;
}


btnreset.addEventListener('click', resetTotal);