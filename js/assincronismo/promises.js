
// LIDANDO COM ASSINCRONISMO
const promessa = new Promise((resolve, reject) => {
    setTimeout(() =>{
    const numero = parseInt(Math.random()*100)
    resolve(numero)
    }, 1000)
})

console.log('vaii')


// MANIPULANDO O ASSINCRONISMO
promessa
    .then((value) =>{
        console.log(value)
        return 10
    })
    .then((value) =>{
        console.log(value)

    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('finalizou')
    })

