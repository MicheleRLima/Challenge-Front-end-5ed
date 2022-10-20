const inputsProduto = document.querySelectorAll('#cadastro')


inputsProduto.forEach(input => {
    input.addEventListener('blur', (evento) => {
        validaAddProduto(evento.target); 
        
    })
})

function validaAddProduto (evento) {
    const inputInformado = evento.value

    if(inputInformado != "") {
        evento.classList.remove("error")

        if (evento.dataset.tipo === 'preco') {

            mascaraPreco(evento)
        }

    }else {
        evento.classList.add("error")
    }
}

function mascaraPreco (evento) {
    const valorRecebido = evento.value

    console.log("valor recebido", valorRecebido)

    const valorAjustado = valorRecebido.replace(/[^0-9]/g,'')

    console.log("valor ajustado ", valorAjustado)

    const preco = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(valorAjustado)
    console.log("preco ", preco)

    evento.value = preco

}


// const btnAddProduto = document.querySelector(".cadastro-produtos button")

// btnAddProduto.addEventListener('click', validaBtnAdicionaProduto)


// function validaBtnAdicionaProduto () {
//     const contaErros = document.querySelectorAll('.error')
    
//     if(contaErros < 1) {
//         alert ("Todos os campos devem estar preenchidos")
//     }
    
// }

