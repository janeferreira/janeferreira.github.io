function armazenarValor(){
var userInput = document.getElementById("userInput").value;

console.log("O valor da variavel é: " + userInput);

document.getElementById("valorInserido").innerText = "O valor inserido é: " + userInput;
}