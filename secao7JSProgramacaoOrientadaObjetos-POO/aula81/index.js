const _velocidade = Symbol('velocidade');
class Carro {
   constructor(nome) {
      this.nome = nome;
      this[_velocidade] = 0;
   }

   set velocidade(valor) {
      if (typeof valor !== 'number') return;
      if (valor >= 100 || valor <= 0) return;
      this[_velocidade] = valor;
   }

   get velocidade() {
      return this[_velocidade];
   }

   acelerar() {
      if (this[_velocidade] >= 100) return;
      this[_velocidade]++;
   }

   freiar() {
      if (this[_velocidade] <= 0) return;
      this[_velocidade]--;
   }

}

const c1 = new Carro('Fusca');

class Pessoa {
   constructor(nome, sobrenome){
      this.nome;
      this.sobrenome;
   }

   get nomeCompleto(){
      return this.nome + ' ' + this.sobrenome;
   }

   set nomeCompleto(valor){
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
   }
}

const p1 = new Pessoa('GUi', 'augusto');
p1.nomeCompleto = 'Guilherme augusto adams Santana';
console.log(p1.nomeCompleto);
console.log(p1);