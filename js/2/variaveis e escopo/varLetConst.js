
if (true) {
    var var1 = 10; // 'var' vaza para o ESCOPO GLOBAL
}

console.log(var1);



if (true) {
    let var2 = 10; // 'let' se mantém no ESCOPO LOCAL
    //console.log(var2);  FUNCIONA
    
}
//console.log(var2);  ERRO

// CONST se comporta como LET

