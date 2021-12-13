function Stack() {
    var item = []

    this.push = function(element) {
        item.push(element)
    }

    this.pop = function() {
        return item.pop()
    }

    this.peek = function() {
        return item[item.length - 1]
    }

    this.isEmpty = function() {
        return item.length === 0
    }

   this.clear = function() {
       item = []
   }

    this.size = function() {
        return item.length
    }

    this.print = function() {
        console.log(item.toString())
    }
}

const pilha = new Stack()

pilha.push( 'Gabriel ')
pilha.push(' Thiago ')
pilha.push(' Gustavo ')
pilha.push(' Lucas ')
pilha.push(' Danilo')

pilha.print()

pilha.clear()

console.log(pilha.size())
