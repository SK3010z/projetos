const precoCombustivel = 5.79;
const kmPorLitro = 12.7;
const distanciaKm = 100;

let litros = distanciaKm / kmPorLitro;
let custoViagem = precoCombustivel * litros;

console.log(custoViagem)
// ou usando .toFixed na variavel para arredondar as casas decimais
console.log(custoViagem.toFixed(2))