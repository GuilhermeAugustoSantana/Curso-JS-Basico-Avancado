//Some todos os números (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
   acumulador += valor;
   return acumulador;
}, 0);
console.log(total);


//Retorne a pessoa mais velha
const pessoas = [
   { nome: 'Luiz', idade: 62 },
   { nome: 'Maria', idade: 23 },
   { nome: 'Eduardo', idade: 50 },
   { nome: 'Guilherme', idade: 18 },
   { nome: 'Leticia', idade: 100 },
   { nome: 'Bruno', idade: 17 },
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
   if(acumulador.idade > valor.idade) return acumulador;
   return valor;
});
console.log(maisVelha);