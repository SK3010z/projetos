function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function(){
    console.log(`meu nome é ${this.nome}`)
}

const renan = {
    genero: 'masculino'
};

Pessoa.call(renan, 'renan', 18);

console.log(renan);

//renan.falar();  ERRO pois o renan está chamando apenas a função Pessoa, mas nao o prototype na linha 6