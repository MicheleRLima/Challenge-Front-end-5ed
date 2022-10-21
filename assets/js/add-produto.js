const inputsProduto = document.querySelectorAll('#cadastro')

inputsProduto.forEach(input => {
    input.addEventListener('blur', (evento) => {
        validaAddProduto(evento.target);
    })
})

function validaAddProduto (evento) {
    const inputInformado = evento.value;

    if(inputInformado != "") {
        evento.classList.remove("error")

        if (evento.dataset.tipo === 'preco') {
            
            mascaraPreco(evento);
        }
    }else {
        
        evento.classList.add("error")
    }
}


function mascaraPreco (evento) {

    $(document).ready(function(){
        
        $('.money').mask('000.000.000.000.000,00', {reverse: true});

        const valorRecebido = evento.value
        const valorSemMoeda = valorRecebido.replace("R$ ", "")
        const valorSemMilhar = valorSemMoeda.replace(/\./g, "")
        const valorAjustado = valorSemMilhar.replace(",", ".")

        const preco = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(valorAjustado)
        
       evento.value = preco;
       
     });
}

const btnAddProduto = document.querySelector(".cadastro-produtos button")

btnAddProduto.addEventListener('click', validaBtnAdicionaProduto)
const form = document.querySelector('form')

function validaBtnAdicionaProduto() {

    if (verificaConteudo()) {
        form.submit();
    }
    
}

function verificaConteudo() {

    const listaInputs = [];
    
    for(i = 0; i < inputsProduto.length; i++) {
    
        if(inputsProduto[i].value === "") {
            alert ("Todos os campos devem estar preenchidos");
            return false;
        }
    
        listaInputs.push(inputsProduto[i].value);
        console.log(listaInputs)
    }
    
    // if (listaInputs.length === inputsProduto.length) {
        //     return true
        // }
        
        return true;
}



