// Aula 19 - Introdução a Manipulaçao de elementos de páginas web e Switch-Case 

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
// Aula 20 - Arrays na prática: Manipule listas em JavaScript 

const turma1 = ["Lais", "Yanni", "Isabela" ];
const turma2 = ["Fábio", "João"]; // economiza mais linhas de códigos 

const aluno1turma1 = "Lais";
const aluno2turma1 = "Yanni";
const aluno3turma1 = "Isabela";
const aluno1turma2 = "Fábio";
const aluno2turma2 = "João";

console.log("Alunos na Turma 1: " + turma1)
console.log("Alunos na Turma 2: " + turma2)

/*-------------------------------------------------------------------------------------------------*/

const listaCompras = ["Arroz", "Feijão", "Macarrão" ]
console.log("Lista de Compras - "+listaCompras)
listaCompras.push("Ovos");
console.log("Item adcionado - "+ listaCompras[3])
console.log("Lista Alterada - "+listaCompras)