const pessoa = {
    idade: 19
};
const joao = { // se nao encontrar o atributo, a busca continua no __proto__, nesse caso 25 pois é encontrado
    nome: 'joao',
    idade: 25,
    __proto__: pessoa
};


console.log(joao.idade);


