function saudacao(nome) {
    return `Bom dia ${nome}`;
}

const variavel = saudacao('Luiz');
// console.log(variavel);

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(3, 2));  

// const raiz = function (n) {
//     return n ** 0.5;
// };

const raiz = (n) => {
    return n ** 0.5;
};

console.log(raiz(9));