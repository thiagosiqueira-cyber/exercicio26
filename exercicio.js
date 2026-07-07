#Tabuada de multiplicação
const numero = parseInt(prompt("Digite um número para a tabuada: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

#Solicite numeros pares ao usuario
const limite = parseInt(prompt("Digite um número: "));

for (let i = 2; i <= limite; i += 2) {
    console.log(i);
}

#Soma de intervalos
const n = parseInt(prompt("Digite um número: "));

let soma = 0;
for (let i = 1; i <= n; i++) {
    soma += i;
}

console.log(`A soma de 1 até ${n} é: ${soma}`);

#Calculo de fatorial
const numero = parseInt(prompt("Digite um número: "));

let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`${numero}! = ${fatorial}`);