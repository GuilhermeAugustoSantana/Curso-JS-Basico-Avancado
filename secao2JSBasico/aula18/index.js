const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

function criaPessoa(nome, sobrenome, idade) {
    return { nome: nome, sobrenome: sobrenome, idade: idade }
}

const pessoa1 = criaPessoa('Luiz','Maria',25);
const pessoa2 = criaPessoa('Joao','Maria',21);
const pessoa3 = criaPessoa('Carlos','Maria',5);
console.log(pessoa1.nome, pessoa1.sobrenome);