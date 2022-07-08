// Função contrutora -> retorna objetos
// Funçao fabrica -> retorna objetos
//Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
   //Atributos ou métodos privados
   const ID = 1;

   const metodoInterno = function () {

   };

   //Atributos ou métodos públicos
   this.nome = nome;
   this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Guilherme', 'Augusto');
const p2 = new Pessoa('Luiz', 'Otávio');

console.log(p1);