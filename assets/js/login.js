const email = document.getElementById('email')
email.addEventListener('blur', validaEmail)

const mensagemEmail = document.getElementById('mensagem-email')

function validaEmail () {
    mensagemEmail.innerHTML = ''

    const emailInserido = email.value

    const isEmailValid = emailInserido.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(isEmailValid) {
        email.classList.remove("error")
        return true;
    }

    email.classList.add("error")
    mensagemErroEmail()
    return false;
}

function mensagemErroEmail() {
    mensagemEmail.classList.add("erro-mensagem")
    mensagemEmail.innerHTML += `Preenchimento inválido`
}

const senha = document.getElementById('senha')
senha.addEventListener ('blur', validaSenha)

const mensagemSenha = document.getElementById('mensagem-senha')


function validaSenha () {
    mensagemSenha.innerHTML = ''

    const senhaInserida = senha.value
    const isPasswordValid = senhaInserida.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/);

    if(isPasswordValid) {
        senha.classList.remove("error")
        return true;
    }

    senha.classList.add("error")
    mensagemErroSenha()
    return false;
}

function mensagemErroSenha() {
    mensagemSenha.classList.add("erro-mensagem")
    mensagemSenha.innerHTML += `A senha deve conter ao menos 6 digitos, com pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial`
}

const btnEntrar = document.querySelector('.login button')
btnEntrar.addEventListener('click', validaLogin)

const form = document.querySelector('form')

function validaLogin () {

    if(validaEmail() && validaSenha()) {
        form.submit();
    }
}





