function falarMeuNome(){ // HOISTING
    console.log(`meu nome é joao`)
};

const referencia = falarMeuNome;

referencia();


function falarMeuNomeCompleto(falarMeuNome){
    falarMeuNome();
    console.log('vitor')
}

falarMeuNomeCompleto(falarMeuNome);


const nomeDeOutraFuncao = function(){  // NO HOISTING

}