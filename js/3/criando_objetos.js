const Pessoa = {
    genero: 'masculino'
};

const joao = Object.create(Pessoa);
joao.nome = 'joao';

// OU

const jaao = {
    nome:'joao',
    __proto__: Pessoa
};

console.log(jaao);
console.log(joao);



