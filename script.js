function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ', nota)
    }
    else {
        console.log('Reprovado com ', nota)
    }
}

function soSeForVerdade(verdade) {
    if(verdade) {
        console.log('Isso é verdade!!')
    }
    else {
        console.log('Isso é mentira!!')
    }
}

soSeForVerdade(null)
soSeForVerdade(undefined)
soSeForVerdade(NaN)
soSeForVerdade('')
soSeForVerdade(0)
soSeForVerdade(1)