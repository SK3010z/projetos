function teste(){
    console.log('teste')
}
function sayMyName(name){
    console.log(name);
}
function potencia(n){
    return (n*n);
}


teste();
console.log(potencia(8));
sayMyName('omaigod');


//agora quero mudar o quadrado pra cubo na potencia

potencia = function(n){
    return (n*n*n);
}

console.log(potencia(3));

