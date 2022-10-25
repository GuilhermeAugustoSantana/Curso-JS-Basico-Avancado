export const nome = 'Guilherme';
const sobrenome = 'Augusto';
const idade = 18;
const cpf = 'fdfçs';

/*export default*/ function soma(x, y) {
   return x + y;
}

export {sobrenome as default, idade, soma};

// export { nome as nome2, sobrenome, idade, soma };