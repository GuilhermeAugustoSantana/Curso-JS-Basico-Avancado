// COnstrutora -> molde (classe)
function Pessoa(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () { return `${this.nome} ${this.sobrenome}`; };

const p1 = new Pessoa('Guilherme', 'Augusto');

console.log(p1.nomeCompleto());