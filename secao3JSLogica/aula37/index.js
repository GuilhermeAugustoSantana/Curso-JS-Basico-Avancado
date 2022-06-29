// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, arrays ou objetos)
// For of - retorna o valor em si (interáveis, arrays ou strings)

const nomes = ['Gui', 'Augusto', 'Adams'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('#####');

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('#####');

for (let valor of nomes){
    console.log(valor);
}

console.log('#####');

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});