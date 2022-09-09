const pessoa = {
   nome: 'Gui',
   sobrenome: 'Augusto'
};

const chave = 'nome';
// console.log(pessoa[chave]);
// console.log(pessoa['sobrenome']);

const pessoa1 = new Object();
pessoa1.nome = 'Gui';
pessoa1.sobrenome = 'Augusto';
pessoa1.idade = '2'
pessoa1.falarNome = () => `${this.nome} está falando seu nome.`;
pessoa1.getDataNascimento = () => {
   const dataAtual = new Date();
   return dataAtual.getFullYear() - this.idade;
};

// for(let chave in pessoa1) console.log(pessoa1[chave]);

// Factory functions / Constructor functions / Classes

//Factory
function criaPessoa(nome, sobrenome) {
   return {
      nome,
      sobrenome,
      get nomeCompleto() {
         return `${this.nome} ${this.sobrenome}`
      }
   };
}

function Pessoa(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Gui', 'Augusto');
Object.freeze(p1);
p1.nome = 'outra';
console.log(p1);
