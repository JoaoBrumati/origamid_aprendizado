function dados(nome, idade, peso, altura) {
    nome = prompt('Informe o seu nome');
    idade = prompt('Informe a sua idade');
    peso = Number(prompt('Informe o seu peso'));
    altura = Number(prompt('Informe a sua altura'));

    var imc = peso / (altura ** 2);

    return imc;
}

var resultado = dados();

console.log('Seu IMC é:', resultado);

if (resultado < 18.5) {
    console.log('Abaixo do peso');

} else if (resultado >= 18.5 && resultado <= 24.9) {
    console.log('Peso normal');

} else if (resultado >= 25 && resultado <= 29.9) {
    console.log('Sobrepeso');

} else {
    console.log('Obesidade');
}