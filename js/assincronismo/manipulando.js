const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo(){
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo) 
    } catch(error) {
        console.log(error)
    } finally {
        console.log('finalizou')
    }
   
}

buscarArquivo()

// IGUAL A

/*
const promessaDeLeituraDoArquivo = fs.promises.readFile(filePath)

promessaDeLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((texto) => texto.split('\r\n').slice(1))
    .then((linhas) => linhas.map((linha) => {
        const [nome, feito] = linha.split(';')
        return{
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => console.log('Deu não ó kk', error))
    */