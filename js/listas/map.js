class Pessoa {
    constructor(name){
        this.name = name;
    }
};

const lista = [new Pessoa('joao'),new Pessoa('mario'),new Pessoa('carlos'),new Pessoa('pedro'),new Pessoa('lucas')];

const listaNomes = lista.map((element) => element.name)

console.log(listaNomes);