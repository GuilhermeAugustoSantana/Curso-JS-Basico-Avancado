//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);


//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
   { nome: 'Luiz', idade: 62 },
   { nome: 'Maria', idade: 23 },
   { nome: 'Eduardo', idade: 50 },
   { nome: 'Guilherme', idade: 18 },
   { nome: 'Leticia', idade: 12 },
   { nome: 'Bruno', idade: 17 },
];
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idade = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idade);

const comId = pessoas.map((obj, indice) => {
   const newObj = { ...obj};
   newObj.id = indice;
   return newObj;
});
console.log(comId);
