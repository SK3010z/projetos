const lista = [1,2,3,4,5,6,7,8,9,10];

// .filter recebe um BOOLEAN, se for TRUE, o elemento fica na lista filtrada, se for FALSE, não
const pares = lista.filter((element) => {
    return (element % 2 === 0)
});

console.log(pares);