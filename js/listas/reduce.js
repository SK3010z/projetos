const lista = [1,2,3,4,5,6,7,8,9,10]
//reduz a lista em um ÚNICO valor

const somaDeTodos = lista.reduce((previous, current) =>{
    console.log(previous, current);
    return previous, current;
});

console.log(somaDeTodos);