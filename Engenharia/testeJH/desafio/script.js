function calcularDesconto(){
    let preco = document.getElementById("preco").value ;
    let desconto = document.getElementById("desconto").value;
    desconto = (preco/desconto);
    let precoFinal = preco-desconto;
   /* console.log("Preço original: ", preco);
    console.log("Valor desconto", desconto);
    console.log("Preço Final:", precoFinal);*/

    if(preco > 0 ){
        
        document.getElementById("resultado").innerHTML = " Preço Original : "+ preco +"R$";
        document.getElementById("r").innerHTML = " Valor desconto : "+ desconto +"R$";
        document.getElementById("e").innerHTML = " Preço Final : "+ precoFinal + "R$";
    }
    else{
        alert("Valores Inválidos!");
    }

}