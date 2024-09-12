// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.querySelector("#username");
console.log(usernameInput)
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", ()=>{
    usernameLabel.classList.add('required-popup')
})
// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", ()=>{
    usernameLabel.classList.remove('required-popup')
})
// Validar valor do input
usernameInput.addEventListener('change', function(evento){
    let valor = evento.target.value
    console.log(valor)

    if(valor.length < 3){
        // estilos dinãmicos caso o valor não seja válido
        usernameInput.classList.remove('correct');
        usernameInput.classList.add('error')
        usernameHelper.classList.add('visible')
        usernameHelper.innerText = "Seu nome deve conter mais do que 3 caracteres. Digite novamente."
    }else{
        // estilos dinâmicos caso o valor seja válido
        usernameInput.classList.remove('error')
        usernameInput.classList.add('correct')
        usernameHelper.classList.remove('visible')
    }
})
// ----------Função Mostrar PopUp---------- //

function mostrarPopUp(input, label){
    // Mostrar popup de campo obrigatório
    input.addEventListener('focus', function(){
        label.classList.add('required-popup')
    })

    // Ocultar popu de campo obrigratório
    input.addEventListener('blur', function(){
        label.classList.remove('required-popup')
    })
}
mostrarPopUp(usernameInput, usernameLabel)

// ---------- VALIDAÇÃO EMAIL ---------- //
// PEGAR OS ELEMENTOS
let emailInput = document.querySelector('#email');
console.log(emailInput)
let emailLabel = document.querySelector('label[for ="email"]');
console.log(emailLabel)
let emailHelper = document.querySelector('#email-helper');

// MOSTRAR POPUP DE CAMPO OBRIGATÓRIO
mostrarPopUp(emailInput, emailLabel);

// Validar valor do input
emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.includes("@") && valor.includes(".com")){
        // Estilo dinâmicos caso o valor seja válido
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        emailInput.classList.add("correct");
    }else {
        // Estilos dinâmicos caso o valor não seja válido
        emailInput.classList.remove("correct");
        emailHelper.classList.add("error");
        emailHelper.innerText = "E-mail inválido! Por favor coloque um email válido!"
        emailHelper.classList.add("visible")
    }
})

// ---------- VALIDAÇÃO SENHA ---------- //
// PEGAR OS ELEMENTOS da senha
let senhaInput = document.querySelector("#senha")
let senhaLabel = document.querySelector('label[for="senha"]')
let senhaHelper = document.querySelector('#senha-helper')

// MOSTRAR POPUP DE CAMPO OBRIGATÓRIO da senha
mostrarPopUp(senhaInput, senhaLabel);

// Validar valor da senha
senhaInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.length >= 8){
        // Estilos dinâmicos caso a senha seja válida
        senhaInput.classList.remove("error");
        senhaInput.classList.add("correct");
        senhaHelper.classList.remove("visible");
    } else {
        // Estilos dinâmicos caso a senha não seja válida
        senhaInput.classList.remove("correct");
        senhaInput.classList.add("error");
        senhaHelper.classList.add("visible");
        senhaHelper.innerText = "A senha deve conter pelo menos 8 caracteres.";
    }
})

// ---------- VALIDAÇÃO CONFIRMAÇÃO DA SENHA ---------- //
// PEGAR OS ELEMENTOS da senha-confirm
let ConfirmSenhaInput = document.querySelector("#confirma-senha")
let ConfirmSenhaLabel = document.querySelector('label[for="confirma-senha"]')
let ConfirmSenhaHelper = document.querySelector('#confirma-senha-helper')

// MOSTRAR POPUP DE CAMPO OBRIGATÓRIO
mostrarPopUp(ConfirmSenhaInput, ConfirmSenhaLabel);

// Validar confirmação da senha
ConfirmSenhaInput.addEventListener("change", function(evento){
    let valorConfirm = evento.target.value
    let valorSenha = senhaInput.value

    if(valorConfirm === valorSenha && valorConfirm.length >= 8){
        // Estilos dinâmicos caso a confirmação seja válida
        ConfirmSenhaInput.classList.remove("error");
        ConfirmSenhaInput.classList.add("correct");
        ConfirmSenhaHelper.classList.remove("visible");
    } else {
        // Estilos dinâmicos caso a confirmação não seja válida
        ConfirmSenhaInput.classList.remove("correct");
        ConfirmSenhaInput.classList.add("error");
        ConfirmSenhaHelper.classList.add("visible");
        ConfirmSenhaHelper.innerText = "As senhas não coincidem ou são muito curtas.";
    }
})