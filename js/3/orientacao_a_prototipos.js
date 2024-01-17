const pessoa = {
    genero: 'masculino'
};
const joao = {
    nome: 'joao',
    idade: 18,
    __proto__: pessoa
};

console.log(joao.genero);


