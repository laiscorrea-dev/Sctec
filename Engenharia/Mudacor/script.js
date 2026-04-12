function trocaCor(){
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    div1.style.backgroundColor = "yellow";
    div2.style.backgroundColor = "lightBlue";
    div3.style.backgroundColor = "lightGreen";
}

function retorCor() {
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    div1.style.backgroundColor = "";
    div2.style.backgroundColor = "";
    div3.style.backgroundColor = "";
    
}

function  efetuaOperacao() { //funçao chamada pelo botão efetuaOperacao 
    let num1  = parseFloat(document.getElementById("num-1").value);
    let num2  = parseFloat(document.getElementById("num-2").value);
    let operador  = document.getElementById("operador").value ;
    let resultado; //recebe os valores escritos nos inputs

    switch (operador) { // verificar caso --> case for tal valor!

        case "-":
            resultado = num1 - num2;
            break;
        case "+":
            resultado = num1 + num2;
            break;
        case "/":
            if(num2==0){
                resultado = alert("Divisão por 0 é inválido!")
            }
            else{
                resultado = num1/num2;}
            break;
        case "*":
            resultado = num1*num2;
            break;
        default:
            resultado = alert("Operador inválido!")
            
    }

document.getElementById("resultado").innerHTML = "Resultado : " + resultado;
    
}




