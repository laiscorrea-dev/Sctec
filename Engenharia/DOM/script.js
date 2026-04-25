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

const carros = ["Gol", "Palio", "Uno","Civic"];

var dados;
var i; 

const conteudo= document.getElementById("conteudo");
dados = "";
i = 0; // variavel de controle 

while (i<4){
    dados+= "<p>" + carros[i] + "</p>"; // concatenar os dados do array "carros" com a tag <p> para exibir cada elemento em uma nova linha
    i++; // incrementa a variavel de controle para evitar um loop infinito
}


/*----------------------------------------------------------------------------------- */
/* Aula 22 - Controle de fluxos: laços de repetição( Parte 2 ) */

function criarSeção(titulo, dadosF) {
    const secao = document.createElement("div");
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
    conteudo.appendChild(secao);

}

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
    if(carro === "Uno"){
        //break; // interrompe o loop quando encontra o carro "Uno"   
        continue; // pula a iteração atual e continua com a próxima, ou seja, não exibe o carro "Uno" mas continua exibindo os outros carros
    }
    dados += "<p>"+ carro+"</p>";
}
criarSeção("Loop For-Of", dados); /* chama a função criarSeção para exibir os resultados do loop For-Of*/

let carro1 = {marca:"Ford", modelo:"Ka", ano: "2015"}
let carro2 = {marca:"Fiat", modelo:"Uno", ano: "2000"}

let carros2 =[];
carros2.push(carro1);
carros2.push(carro2);
console.log(carro2);


dados = "";
for(let carro of carros2){
    let propriedades = "";

    for(let prop in carro){
        propriedades += carro[prop] + " | ";

    }
    dados += "<p>" + propriedades +"</p>";

}
criarSeção("Loop For in ", dados) //* chama a função criarSeção para exibir os resultados do loop For-In,
//  que percorre as propriedades dos objetos "carro1" e "carro2" e exibe seus valores concatenados em uma string separada por " | "*/


dados= "";
carros.forEach(carro => {
    dados += "<p>" + carro + "</p>";
});
criarSeção("Loop ForEach", dados) /* chama a função criarSeção para exibir os resultados do loop ForEach*/

/* --------------------------------- atividade prática ----------------------------------------------- */

/*Aula 24 - Funções e Eventos (Parte 1)*/

function mostrarSaudacao(){

    const nome = document.getElementById("nome").value;
    const hora = parseInt(document.getElementById("hora").value,10);
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = saudacaoPersonalizada(nome, hora);
    
}

function saudacaoPersonalizada(nome, hora){
    if(hora<12){
        return "Bom dia, " + nome + "!";
    }
    else if(hora> 12 && hora <18){
        return "Boa tarde, " + nome + "!";
    }
    else if(hora>18){
        return "Boa noite, " + nome + "!";
    }
    else{
        return "";
    }
    
}

/*  ---------- Aula 25 - Funções e Eventos (Parte 2) ---------- */

function stBackgroundColor(color){
    document.body.style.backgroundColor = color;
}
    document.getElementById("redButton").addEventListener("click", function(){stBackgroundColor("red")});
    document.getElementById("greenButton").addEventListener("click", function(){stBackgroundColor("green")});
    document.getElementById("blueButton").addEventListener("click", function(){stBackgroundColor("blue")});

    document.getElementById("inputBox").addEventListener("keypress", function(event){ /* "event" é um objeto que contém 
        informações sobre o evento de pressionar uma tecla keyprees - indica a tecla precionada*/
        alert("Tecla pressionada: " + event.key);
    });













