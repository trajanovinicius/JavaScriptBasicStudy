//Em JavaScript o String replace é utilizado com frequência para fazer desde simples substituições em Strings 
//até complexas mudanças com expressões regulares. 

const cpfMalFormatado = 'cpf é 01627278990'
const cpfFormatado = cpfMalFormatado.replace('01627278990', '016.272.789-90')

console.log(cpfFormatado)

// A função .replace recebe como parâmetros o padrão que estamos procurando
// e como segundo parâmetro o que queremos colocar no lugar