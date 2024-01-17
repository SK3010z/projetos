const lista = ['joao','Vitor','Marina'];

lista.push('Renan');

lista[4] = 'Rafael';

console.log(lista);

console.log(lista.pop());  // ULTIMO  -- POP

console.log(lista);

console.log(lista.shift());  // PRIMEIRO -- SHIFT

console.log(lista);

console.log(lista.splice(2, 1));  // INDICE -- SPLICE  ([indice], [qtd de exclusoes a partir do indice])

console.log(lista);