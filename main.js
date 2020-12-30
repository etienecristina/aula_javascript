function load(){
    alert("Página carregada");
}

var nome = "Etiene";
alert("Bem vindo " + nome);
var idade = 25;
alert(nome + " tem " + idade + " anos.")
var frase= "O Japão é o melhor time do mundo";
console.log(frase.toLowerCase());
alert(frase.replace("Japão" , "Brasil"))

function soma(n1, n2){
    return n1+n2;
}

var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
console.log(frutas);

var lista = ["maça","pera","abacate"];
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

var idade = prompt("Qual sua idade?")
if (idade >= 18) {
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}


function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}
    console.log(document.getElementById("agradecimento"));

function redirecionar(){
    window.open("https://www.google.com/");
    }

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse" 
}

function voltar(elemento){
    elemento.innerHTML= "Obrigado por passar o mouse";
}



function funcaoChange(elemento){
    console.log(elemento.value);

}


var data = new Date();
alert(data.getMinutes());
alert(data.getHours());
alert(data.getDay());
alert(data.getMonth()+1);


var count;
for (count=0; count <=5; count++){
    alert(count);
};

var count = 0;
while (count <=5){
    console.log(count);
    count = count +1
    alert(count);
    count++;
}

var validar = 0

function validaIdade(idade){
    validar;   
    if (idade >= 18){
        validar = true
    }
    else{
        validar = false
    }
    return validar;

}

var idade = prompt("Qual sua idade?")
validaIdade(idade)
console.log(validar);