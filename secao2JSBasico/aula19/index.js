/*
Primiticos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor

Referência (mutável) - array, object, function - Passados por referência
*/

// let a = [1, 2, 3];
// let b = [...a];
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

const a = {
    nome: 'Luiz',
    sobrenome: 'augusto'
};
const b = a;
const c = { ...a };

b.nome = 'Joao';
c.nome = 'Jorge';
console.log(a);
console.log(b);
console.log(c);
 