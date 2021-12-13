const array = new Array("gabriel", "Thiago", "Felix", "Silva")

//Inserindo mais um nome após o ultimo valor
array.push('Jeniffer')
//Inserindo mais um nome antes do primeito valor
array.unshift('Aghata')

for(i = 0; i < array.length; i ++){
    console.log(array[i])
}