// For in -> lê os indices ou chaves do objeto
const pessoa = {
    nome: 'Gui',
    sobrenome: 'Augusto',
    idade: 18
};

// console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}