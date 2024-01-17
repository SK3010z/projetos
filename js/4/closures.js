// ao declarar uma função, ela "se lembra" do CONTEXTO em que foi declarada
function soma(x){
    return function(y){
        return x + y;
    }
}

function soma(x){
    return (y) => {
        return x + y;
    }
}


const num = soma(10)(20);
console.log(num);  // 30


const somaComVinte = soma(20)
const num2 = somaComVinte(50);
console.log(num2); //