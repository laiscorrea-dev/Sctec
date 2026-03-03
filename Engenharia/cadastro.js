//início da construção de formulário elemento pai
let formulario =
document.getElementById(
  "formulario"
); /* essa função é para que a página ñ atualize quando for clicado
no botao, pois é automático do <form> */
formulario.addEventListener("submit", function (event) {
// indica uma função anônima
event.preventDefault();
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let resultado = document.getElementById("resultado");

if (!nome.value) {
  // se n tiver o nome alerta que é necessário colocar seu nome
  alert("Digite seu nome!");
}
if (!idade.value) {
  // também uma validação
  alert("Digite sua idade!");
}
resultado.innerHTML = `<h2> Cadastro realizado com sucesso!</h2> <h4> Seja bem-vindo, ${nome.value}!
  Você tem ${idade.value} ano(s). </h4>`;
nome.value = "";
idade.value = ""; // vão reseber parãmetro sem nada depois do cadastro
});

but = document.getElementById("but"); //utilizando but para fins didáticos(seria o mesmo que 'botao')
but.addEventListener("click", function (event) {
console.log(event);
}); // mostra tudo que está possível de alteração....

let divCard = document.getElementById("card");
// avento de movimento do mouse para entar na div
divCard.addEventListener("mouseenter", mouseentrar); //evento que vai acontecer apenas no espaço da div!
function mouseentrar() {
console.log("O mouse entrou no espaço da div!"); // vai aparecer no console - OBS: não no página(HTML)
divCard.style.background = "green"; // mudando a cor do card quando entrar na div
divCard.innerText = "Mouse entrou"; // mudando o texto quando entrar no card(div)
}

// evento do mouse saindo do espaço da div
divCard.addEventListener("mouseleave", mousesair);
function mousesair() {
console.log("O mouse saiu do espaço da div!");
divCard.style.background = "blue"; // mudando a cor do card quando sair da div
divCard.innerText = " Card 1 ";
}

let inputNome = document.getElementById("inputNome");
let resultado = document.getElementById("resultado");
inputNome.addEventListener("keydown", digitoUmaLetra); // blur, keyup, change, ...eventos de input
function digitoUmaLetra() {
console.log(inputNome.value);
}
let botao = document.getElementById("botao");
botao.addEventListener("click", cliqueNoBotao); // dois parametros um da 'acao' e  'oque será executado'
// click, é um evento de botao quando clicar entra na função
function cliqueNoBotao() {
if (inputNome.value) {
  resultado.style.color = "black";
  resultado.innerText = `Seja bem-vindo, ${inputNome.value}!`;
  inputNome.value = "";
} else {
  resultado.innerText = `Digite seu nome no input!`;
  resultado.style.color = "red";
}
}