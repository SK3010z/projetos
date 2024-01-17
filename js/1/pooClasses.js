/*

class Pessoa {
    nome;
    idade;
    
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`) 
    }
}


const matheus = new Pessoa();
matheus.nome = 'Matheus Fideles';
matheus.idade = 17;

console.log(matheus);
matheus.descrever;





delete matheus;
delete Pessoa;

*/




// CONSTRUTORRRRRRRRRRR


class Pessoa {
    nome;
    idade;
    nascimento;
    
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2024 - idade;
    }


    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`) 
    }
}


const matheus = new Pessoa('Matheus Fideles', 17);
matheus.descrever();

console.log(matheus);

const louren = new Pessoa('Kauã Louremberg', 18);


function compararIdade(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);

    } else if(p1.idade === p2.idade){
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);

    } else {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }
}


compararIdade(matheus, louren);


