function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(9)
soBoaNoticia(6)

function seForVddEuFalo(valor) {
    if (valor) {
        console.log("É verdade... " + valor)
    }
}

seForVddEuFalo()
seForVddEuFalo(null)
seForVddEuFalo(undefined)
seForVddEuFalo(NaN)
seForVddEuFalo("")
seForVddEuFalo(0)
seForVddEuFalo(-1)
seForVddEuFalo(" ")
seForVddEuFalo("?")
seForVddEuFalo([])
seForVddEuFalo([3, 2, 4])
seForVddEuFalo({})
