const pessoa = {
    nome: 'joao',
    idade: 30
};

// sem contexto
function gritar(prefixo){
    console.log(prefixo, this.nome);
};



gritar('olaaaa') // olaaaa undefined
gritar.apply(pessoa, ['olaaaaaa']); // olaaaaaa joao
gritar.call(pessoa, 'olaaa'); // olaaaaaa joao
//função   contexto  parametro  
