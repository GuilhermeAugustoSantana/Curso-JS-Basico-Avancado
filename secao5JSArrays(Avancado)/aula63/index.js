const nomes = ['Maria', 'Joao', 'Eduardo', 'Guilherme'];
//splice(indice, quant delete, elem1, elem2, elem3);
// const removidos = nomes.splice(3, 2, 'Luiz');

//pop
// const removidos = nomes.splice(-1, 1);

//shift
// const removidos = nomes.splice(-5, 1);

//Push
//nomes.splice(nomes.length, 0, 'GUi', 'Guys');

//Unshift
nomes.splice(0, 0, 'GUi', 'Guys');

console.log(nomes);