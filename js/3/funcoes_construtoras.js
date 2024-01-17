function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.descrever = function(){
    console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`);
}

const joao = new Pessoa('joao',19);

console.log(joao);






// Pessoa = Passoa
class Passoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }

}

const jaao = new Passoa('joao',19);

console.log(jaao);
jaao.descrever();
