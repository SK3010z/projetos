let nota1 = 5;
let nota2 = 10;
let nota3 = 6;

let media = ((nota1 + nota2 + nota3)/3).toFixed(1);

console.log(media);

if(media < 5){
    console.log('reprovação');
} else if(media < 7){
    console.log('recuperação');
} else{
    console.log('aprovado');

}