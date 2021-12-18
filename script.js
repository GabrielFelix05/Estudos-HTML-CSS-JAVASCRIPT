function Queue() {
    var items = []

    this.esqueue = function(element) {
        //add um nome item
        items.push(element)
    }

    this.dequeue = function() {
        //remove o primeiro item
        return items.shift()
    }

    this.front = function() {
        //retorna o primeiro elemento da fila
        return items[0]
    }

    this.isEmpty = function() {
        //verifica se a fila está vazia ou não
        return items.length === 0
    }

    this.size = function() {
        //retorna o tamanho da fila
        return items.length
    }

    this.print = function() {
        //imprimir a fila no console
        console.log(items.toString())
    }  
}

var fila = new Queue()

fila.esqueue('Gabriel')
fila.esqueue('Thiago')
fila.esqueue('Anderson')
fila.esqueue('Alex')

console.log(fila.size())