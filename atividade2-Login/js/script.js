var btnConfirmarCompra = $("#btnCalcular");
var valorProduto = document.querySelector("#precoBolo");
var totalProduto
var quantidadeProduto =document.querySelector("#qtdBolo");
var valorProdutoTexto = valorProduto.innerText || valorProduto.textContent;
var valorProdutoFloat = parseFloat(valorProdutoTexto)

btnConfirmarCompra.on("click", function(){
    totalProduto = valorProdutoFloat * quantidadeProduto.value;
    console.log(totalProduto);
    console.log();

    var resposta = document.querySelector("#resposta");
    resposta.innerText = totalProduto;

});

// PAREI AQUI PARA BAIXO

var btnRealizarPagamento = $("#btnPagamento");



btnRealizarPagamento.on("click", function(){
    alert();
    
});


