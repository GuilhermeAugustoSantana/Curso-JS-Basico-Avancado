function retornaFuncao(nome) { 
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Augusto');
const funcao2 = retornaFuncao('Adams');
console.dir(funcao);
console.dir(funcao2);

