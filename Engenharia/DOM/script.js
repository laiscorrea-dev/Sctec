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


/*----------------------------------------------------------------------------------- */
/*Aula 20 - Controle de fluxos: laços de repetição( Parte 1 ) */

const carros = ["Fusca", "Civic", "Corolla", "Gol", "Uno"];

var dados ;
var i;

dados ="";
i = 0;
while (i < 4) {
    dados += "<p>" + carros[i] + "</p>"; /* cada carro da lista é adcionado a variavel dados,
  e cada um é colocado em uma linha diferente*/
    i++;

}
const secao =document.createElement("div");
conteudo.appendChild(secao); /* adciona a secao ao elemento 'conteudo' para exibir os resultados
na página*/

/*----------------------------------------------------------------------------------- */
/* Aula 22 - Controle de fluxos: laços de repetição( Parte 2 ) */

function criarSeção(titulo, dadosF) {
    const secao = document.createElement("div");
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
    conteudo.appendChild(secao);

}

dados = "";
i=0;
while(i<4){
    dados += "<p>" +carros[i]+"</p>";
    i++;
}
criarSeção("Loop While", dados); /* chama a função criarSeção para exibir os resultados do loop 
while*/

dados = "";
i=0;
while(i< carros.length){
    dados += "<p>" +carros[i]+"</p>";
    i++;
}
criarSeção("Loop While melhorado", dados); /* chama a função criarSeção para exibir os resultados do loop 
while invertido*/

dados = "";
i=0;do{
    dados += "<p>" +carros[i]+"</p>";
    i++;
} while(i<carros.length)
    criarSeção("Loop While invertido", dados); /* chama a função criarSeção para exibir os resultados do loop Do-While*/


dados= "";
for(i=0;i<carros.length;i++){
    dados += "<p>" +carros[i]+"</p>";
}
criarSeção("Loop For", dados); /* chama a função criarSeção para exibir os resultados do loop 
For*/

dados= "";
for(let carro of carros){
    dados += "<p>"+ carro+"</p>";
}
criarSeção("Loop For-Of", dados); /* chama a função criarSeção para exibir os resultados do loop For-Of*/

//organizar o index.html!!















