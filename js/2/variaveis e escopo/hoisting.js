

f2(); // EXECUTA NORMAL, HOISTING
f1(); // DA ERRO, NO HOISTING   


var f1 = function(){ // NO HOISTING
    console.log('teste 1')
};

function f2(){ // HOISTING
    console.log('teste 1')
};