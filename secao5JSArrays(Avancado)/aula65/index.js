//Filter -> sempre retora um array, com a mesma quantidade de elemententos ou menos

//Retorna os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrado = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrado);


const pessoas = [
   { nome: 'Luiz', idade: 62 },
   { nome: 'Maria', idade: 23 },
   { nome: 'Eduardo', idade: 50 },
   { nome: 'Guilherme', idade: 18 },
   { nome: 'Leticia', idade: 12 },
   { nome: 'Bruno', idade: 17 },
];

//Retorna as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
// console.log(pessoasComNomeGrande);

//Retorna as pessoas caom mais de 50 anos
const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);
// console.log(pessoasComMaisDe50Anos);

//Retorna as pessoas cujo nome termina com a
const nomeTerminaComaA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(nomeTerminaComaA);