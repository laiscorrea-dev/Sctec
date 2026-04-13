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
document.getElementById("resultado").innerHTML = "Resultado : " + resultado.toFixed(2);
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
listaCompras.push("Ovos"); // adcionar um novo valor ao array - "push"
listaCompras.push("Farrofa")
console.log("Lista Alterada - "+listaCompras)
console.log("Último item da lista: " + listaCompras[listaCompras.length - 1]) // acessar o ultimo elemento do array - "length"


/*------------------------------------------------------------------------------------------------------------  */

/*Aula 21 - Controle de fluxo: Laços de Repetição( Parte 1 ) */

const carros = ["Gol", "Palio", "Uno", "Celta", "Fiesta", "Civic", "Corolla", "HB20", "Onix", "Sandero"];

const conteudo= document.getElementById("conteudo");
let dados = "";
let i = 0; // variavel de controle 

while (i<carros.length){
    dados+= "<p>" + carros[i] + "</p>"; // concatenar os dados do array "carros" com a tag <p> para exibir cada elemento em uma nova linha
    i++; // incrementa a variavel de controle para evitar um loop infinito
}

const secao = document.createElemeent("div");
secao.innerHTML = "<h2>Loop While</h2>" + dados; // concatenar o título da seção com os dados dos carros


