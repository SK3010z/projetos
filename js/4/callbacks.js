function mais(x, y){
    return x + y;
}

function vezes(x,y){
    return x * y;
}


function calculadora(x, operacao, y){
    console.log(operacao(x, y))
}

calculadora(16, vezes, 17);

