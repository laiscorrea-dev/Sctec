function verificarNota(){
    let nota =  document.getElementById("nota").value // pegando o valor da nota(digitada no input) atravéz do id 
    console.log("Nota inserida", nota);
    if(nota >= 7){
        document.getElementById("resultado").innerHTML = "Aluno(a) Aprovado(a)!";
        alert("Aluno(a) Aprovado(a)!");
    }
    else{
        document.getElementById("resultado").innerHTML = "Aluno(a) Reprovado(a)!" ;
        alert("Aluno(a) Reprovado(a)!");
    }
}
