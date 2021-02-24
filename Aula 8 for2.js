const notas = [3.5, 5.6, 10.0, 9.8, 6, 6]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}