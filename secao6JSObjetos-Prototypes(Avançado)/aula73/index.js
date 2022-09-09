/*
Object.values
Object.entries
Object..assingn(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)
*/

const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = {...produto};
// const outraCoisa = Object.assign({}, produto, {material: 'porcelana'});
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(Object.values(produto));

for(let [chave, value] of Object.entries(produto)){
   console.log(chave, value);
}