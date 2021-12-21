const pessoa = {
    saudacoes: "Bom dia",
    falar() {
        console.log(this.saudacoes)
    }
}
pessoa.falar()