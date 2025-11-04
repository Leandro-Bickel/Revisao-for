// Exercício 1 — Números de 1 a N
let num1 = parseInt(prompt("Digite um número:"))
for (let i1 = 1; i1 <= num1; i1++) {
    console.log(i1)
}

// Exercício 2 — Soma dos N primeiros números
let num2 = parseInt(prompt("Digite um número:"))
let somaTotal = 0
for (let i2 = 1; i2 <= num2; i2++) {
    somaTotal += i2
}
console.log(somaTotal)

// Exercício 3 — Números pares até N
let num3 = parseInt(prompt("Digite um número:"))
for (let i3 = 1; i3 <= num3; i3++) {
    if (i3 % 2 === 0) {
        console.log(i3)
    }
}

// Exercício 4 — Tabuada
let num4 = parseInt(prompt("Digite um número para a tabuada:"))
for (let i4 = 1; i4 <= 10; i4++) {
    console.log(num4 + " x " + i4 + " = " + (num4 * i4))
}

// Exercício 5 — Média de 5 números
let somaMedia = 0
for (let i5 = 1; i5 <= 5; i5++) {
    let num = parseFloat(prompt("Digite um número:"))
    somaMedia += num
}
let media = somaMedia / 5
console.log(media)

// Exercício 6 — Contagem regressiva
let num6 = parseInt(prompt("Digite um número:"))
for (let i6 = num6; i6 >= 1; i6--) {
    console.log(i6)
}

// Exercício 7 — Fatorial
let num7 = parseInt(prompt("Digite um número:"))
let fatorial = 1
for (let i7 = 1; i7 <= num7; i7++) {
    fatorial *= i7
}
console.log(fatorial)

// Exercício 8 — Números ímpares em intervalo
let num8a = parseInt(prompt("Primeiro número:"))
let num8b = parseInt(prompt("Segundo número:"))
if (num8a > num8b) {
    let temp = num8a
    num8a = num8b
    num8b = temp
}
for (let i8 = num8a; i8 <= num8b; i8++) {
    if (i8 % 2 !== 0) {
        console.log(i8)
    }
}

// Exercício 9 — Maior número
let maiorNum = -Infinity
for (let i9 = 1; i9 <= 5; i9++) {
    let num = parseFloat(prompt("Digite um número:"))
    if (num > maiorNum) {
        maiorNum = num
    }
}
console.log(maiorNum)

// Exercício 10 — Sequência de Fibonacci
let termos = parseInt(prompt("Quantos termos da Fibonacci?"))
let fib1 = 0
let fib2 = 1
for (let i10 = 1; i10 <= termos; i10++) {
    console.log(fib1)
    let prox = fib1 + fib2
    fib1 = fib2
    fib2 = prox
}