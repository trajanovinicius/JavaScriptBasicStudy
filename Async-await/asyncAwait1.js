/* 
Primeiro, vamos entender o significado da palavra assíncrona:
que não é sincrôno, que não apresenta sincronia ou sincronismo; assincrônico.
ou Na área da tecnologia da informação, a comunicação assíncrona é a transmissão de dados, 
geralmente sem o uso de um sinal de relógio externo, onde os dados podem ser transmitidos 
intermitentemente em um fluxo estável.

Basicamente usando o async você consegue obter dados sem que a página seja carregada
*/

function resolverDepoisDe2Segundos(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function adicionar1(x) {
  let a = resolverDepoisDe2Segundos(20);
  let b = resolverDepoisDe2Segundos(30);
  return x + await a + await b;
}

adicionar1(10).then(v => {
  console.log(v);  // exibe 60 depois de 2 segundos.
});

async function adicionar2(x) {
  let a = await resolverDepoisDe2Segundos(20);
  let b = await resolverDepoisDe2Segundos(30);
  return x + a + b;
}

adicionar2(10).then(v => {
  console.log(v);  // exibe 60 depois de 4 segundos.
});