/*document.getElementById('departamento').addEventListener('focus',function(){

const inputDepartamento = document.getElementById('departamento');
inputDepartamento.style.backgroundColor = "lightgreen"
inputDepartamento.style.borderStyle = "none"

});
document.getElementById('departamento').addEventListener('blur',function(){

const inputDepartamento = document.getElementById('departamento');
inputDepartamento.style.backgroundColor = "white"

});
*/

function adicionarCorInput() {
    const listInput = document.querySelectorAll("input[type='text']");
    const listSelect = document.querySelectorAll("select");


   
//listInputText[1].style.backgroundColor = "lightgreen"

/*
    for (let index = 0; index < listInput.length; index++) {
        listInput[index].style.backgroundColor = "lightgreen"

    }
*/
    
listInput.forEach(function(index){
    
    index.addEventListener('focus',function(){
        index.style.backgroundColor = "lightgreen" 
    });
        
    index.addEventListener('blur',function(){
        index.style.backgroundColor = "white"
    });
    
});

listSelect.forEach(function(index){
    
    index.addEventListener('focus',function(){
        index.style.backgroundColor = "lightgreen" 
    });
        
    index.addEventListener('blur',function(){
        index.style.backgroundColor = "white"
    });
    
});

}

function carregarCategorias() {
    const selectCategoria = document.getElementById('categoriaMotivo')
    selectCategoria.innerHTML="";
    const optFirst = document.createElement('option')
    optFirst.value = -1
    optFirst.text = ""
    selectCategoria.add(optFirst)


    categorias.forEach(function(categoria){
        var opt = document.createElement("option")
        opt.value = categoria.idCategoria
        opt.text = categoria.Descricao

        selectCategoria.add(opt);
    });
    
}

function carregarMotivos(){
    const selectMotivo = document.getElementById('Motivo')
    selectMotivo.innerHTML="";
    const optFirst = document.createElement('option')
    optFirst.value = -1
    optFirst.text = ""
    selectMotivo.add(optFirst)

    const valorCategoria =  document.getElementById('categoriaMotivo').value
    const motivosFiltrados = motivos.filter((m) => m.idCategoria == valorCategoria)


    motivosFiltrados.forEach(function(motivo){
        var opt = document.createElement("option")
        opt.value = motivo.idMotivo
        opt.text = motivo.Descricao

        selectMotivo.add(opt);
    });
}



document.getElementById('categoriaMotivo').addEventListener('change',function(){
    carregarMotivos();
})

document.getElementById('CodigoProtudo').addEventListener("keyup",function(){
    const valorProduto =  document.getElementById('CodigoProtudo').value;
    const ProdutosFiltrados = produtos.filter((p) => p.idProduto == valorProduto);

    if(ProdutosFiltrados.length>0){
        document.getElementById('DescricaoProtudo').value = ProdutosFiltrados[0].Descricao
        document.getElementById('Estoque').value = ProdutosFiltrados[0].EstoqueMinimo
    }else{
        document.getElementById('DescricaoProtudo').value = ""
        document.getElementById('Estoque').value = ""
    }
    
})

document.getElementById('idDepartamento').addEventListener("keyup",function(){
    const valorDep =  document.getElementById('idDepartamento').value;
    const DepFiltrados = departamentos.filter((d) => d.idDep == valorDep);

    if(DepFiltrados.length>0){
        document.getElementById('departamento').value = DepFiltrados[0].Descricao
    }else{
        document.getElementById('departamento').value = ""
    }
    
})

document.getElementById('idFuncionario').addEventListener("keyup",function(){
    const valorFunc =  document.getElementById('idFuncionario').value;
    const FuncFiltrados = funcionarios.filter((f) => f.idFunc == valorFunc);

    if(FuncFiltrados.length>0){
        document.getElementById('NomeFuncionario').value = FuncFiltrados[0].Nome
        document.getElementById('cargo').value = FuncFiltrados[0].Cargo
    }else{
        document.getElementById('NomeFuncionario').value = ""
        document.getElementById('cargo').value = ""
    }
    
})

document.getElementById('btnGravar').addEventListener("click",function(){
    const elementosObrigatorios =  document.querySelectorAll('[campo-obg="true"]');
    console.log(elementosObrigatorios)

    elementosObrigatorios.forEach(function(item){
        if(item.value==""||item.value==-1){
        item.style.borderColor = 'red'
        item.style.borderWidth = '2px'
        item.style.backgroundColor = '#E0E0E0'
        
    }
    });
    
const chkUrgente = document.getElementById('urgente').checked
const chkMedio = document.getElementById('medio').checked
const chkBaixo = document.getElementById('baixo').checked

if (chkUrgente==false && chkMedio==false && chkBaixo==false){
    
    const divPrioridade = document.getElementById("radioPrioridade");        
    
    divPrioridade.classList.remove('radioPrioridade');
    divPrioridade.classList.add('radioPrioridadeDesabilitado');        
    
    document.getElementById('urgente').classList.remove('chkPrioridade');
    document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
    document.getElementById('medio').classList.remove('chkPrioridade');
    document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
    document.getElementById('baixo').classList.remove('chkPrioridade');
    document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
}
})




function eventoClickPrioridadeHabilitarCor(){

const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade');    

console.log(checkboxesPrioridade);

checkboxesPrioridade.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {    
        
        const divPrioridade = document.getElementById("radioPrioridade");
        
        divPrioridade.classList.add('radioPrioridade');
        divPrioridade.classList.remove('radioPrioridadeDesabilitado');

        document.getElementById('urgente').classList.add('chkPrioridade');
        document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.add('chkPrioridade');
        document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.add('chkPrioridade');
        document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado');
    });
});

}


const totalRequisicao = document.getElementById('total')
const totalValor = 0
totalRequisicao.value = totalValor.toFixed(2)

document.getElementById('btnInserirItens').addEventListener('click',function(){
    const tabelaItens = document.getElementById('tabelaItens')

    const campoProduto = document.getElementById('CodigoProtudo');
    const campoDescricaoProduto = document.getElementById('DescricaoProtudo')
    const campoQuantidade = document.getElementById('Quantidade')

    const linha = document.createElement('tr')

    const tdCodigo = document.createElement('td')
    const tdDescricao = document.createElement('td')
    const tdQuantidade = document.createElement('td')
    const tdUnidade = document.createElement('td')
    const tdPreco = document.createElement('td')
    const tdTotalLinha = document.createElement('td')
    
    const tdBtnRemover = document.createElement('tr')
    tdBtnRemover.setAttribute('class','BtnRemover')
    tdBtnRemover.innerHTML="X"

    tdBtnRemover.addEventListener('click',function(){
            tabelaItens.removeChild(linha);
            let totalValor = parseFloat(totalRequisicao.value) - parseFloat(valorLinha)
            totalRequisicao.value = totalValor.toFixed(2)
            
    })

    const produtoPesquisado = produtos.filter((p)=>p.idProduto==campoProduto.value)

    function verErro(){
        if(campoQuantidade.value > produtoPesquisado[0].EstoqueMinimo || campoQuantidade.value==0){
            document.getElementById('error-message').style.display = "block"
            document.getElementById('Quantidade').style.borderColor = 'red'
            document.getElementById('Quantidade').style.borderWidth = '2px'
            document.getElementById('Quantidade').style.backgroundColor = '#E0E0E0'
            
        }else{
            document.getElementById('error-message').style.display = "none"
            document.getElementById('Quantidade').style.borderColor = ''
            document.getElementById('Quantidade').style.borderWidth = '1px'
            tdCodigo.innerHTML = campoProduto.value
            tdDescricao.innerHTML = campoDescricaoProduto.value
            tdUnidade.innerHTML = produtoPesquisado[0].Unidade
            tdPreco.innerHTML = produtoPesquisado[0].preco
            tdTotalLinha.innerHTML = campoQuantidade.value*produtoPesquisado[0].preco;
            tdQuantidade.innerHTML = campoQuantidade.value
            linha.appendChild(tdCodigo)
            linha.appendChild(tdDescricao)
            linha.appendChild(tdQuantidade)
            linha.appendChild(tdUnidade)
            linha.appendChild(tdPreco)
            linha.appendChild(tdTotalLinha)
            tabelaItens.appendChild(linha)
            
        }
    }
    

    

    verErro();

    

    const colunas = linha.getElementsByTagName('td')
    let valorLinha = colunas[5].innerText;
    
    let totalValor = parseFloat(totalRequisicao.value) + parseFloat(campoQuantidade.value*produtoPesquisado[0].preco)
    
    totalRequisicao.value = totalValor.toFixed(2)    
   
    linha.appendChild(tdBtnRemover)
    tabelaItens.appendChild(linha)
    console.log(linha)

})


document.getElementById("legenda-img").addEventListener('mouseover',function(){
    document.getElementById('legenda').style.opacity = "1"
        
})
document.getElementById("legenda-img").addEventListener('mouseout',function(){
    document.getElementById('legenda').style.opacity = "0"
        
})

    


eventoClickPrioridadeHabilitarCor()
adicionarCorInput();
carregarCategorias();



