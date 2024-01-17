const eu = {  // DEFININDO OBJETO 
    nome: 'matheus',
    idade: 17,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}  <-- undefined pq excluiu a idade`) 
    }


};


console.log(eu); //  { nome: 'matheus', idade: 17 }


eu.altura = 1.65;  // ADICIONANDO ATRIBUTO


console.log(eu); //  { nome: 'matheus', idade: 17, altura: 1.65 }


delete eu.idade;  // DELETANDO ATRIBUTO


console.log(eu); // { nome: 'matheus', altura: 1.65 }

eu.descrever();


console.log(eu['nome']);