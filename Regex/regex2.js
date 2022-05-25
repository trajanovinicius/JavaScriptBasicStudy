//criando regex para ocultar palavrões: 

const frase = 'Frase com uma palavra-feia'

const fraseEscondida = frase.replace("palavra-feia", "********")

console.log(fraseEscondida)