// ao declarar uma função, ela "se lembra" do CONTEXTO em que foi declarada

function funcao1(){ // possui e isola o contexto (é atribuído o THIS)
    console.log(this);
};

const funcao2 = () => { // nao possui contexto (NÃO é atribuído o THIS)
    console.log(this);
};

const joao = {
    nome: 'joao',
    funcao1,
    funcao2
};

joao.funcao1();
joao.funcao2();


//caso a função tenha apenas o return, o corpo nao é necessario {corpo}

const ola = (nome) => `ola, ${nome}`;
console.log(ola('mundo!'));