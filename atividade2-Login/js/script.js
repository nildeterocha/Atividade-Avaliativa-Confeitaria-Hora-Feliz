var btnConfirmarCompra = document.querySelectorAll(".btnCalcular");
var valorProduto = document.querySelectorAll(".precoBolo");
var totalProduto = null;
var quantidadeProduto = document.querySelectorAll(".qtdBolo");
Number(document.querySelectorAll(".precoBolo")[0].innerHTML);
var respostas = document.querySelectorAll(".resposta");

btnConfirmarCompra[0].addEventListener("click", function(){
    totalProduto = Number(quantidadeProduto[0].value) * Number(valorProduto[0].innerHTML);
    console.log(totalProduto);
    console.log();
    
    respostas[0].innerText = totalProduto ;   
});

btnConfirmarCompra[1].addEventListener("click", function(){
    totalProduto = Number(quantidadeProduto[1].value) * Number(valorProduto[1].innerHTML);
    console.log(totalProduto);
    console.log();
    
    respostas[1].innerText = totalProduto ;   
  
});

btnConfirmarCompra[2].addEventListener("click", function(){
    totalProduto = Number(quantidadeProduto[2].value) * Number(valorProduto[2].innerHTML);
    console.log(totalProduto);
    console.log();
    
    respostas[2].innerText = totalProduto ;     
});

var btnRealizarPagamento = $(".btnPagamento");
$(".formaDePagamento").hide();


btnRealizarPagamento.on("click", function(){
    $(".formaDePagamento").slideToggle(500); 
});
