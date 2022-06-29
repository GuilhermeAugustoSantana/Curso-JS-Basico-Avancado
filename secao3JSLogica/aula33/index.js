const pessoa = {
    nome: 'Gui',
    idade: 18,
    endereco: {
        rua: 'Av.Jorge',
        numero: 1080
    }
}

// Atribuição via desestruturação
const {endereco: { rua, numero }, endereco, ...resto } = pessoa;

console.log(endereco, resto);
