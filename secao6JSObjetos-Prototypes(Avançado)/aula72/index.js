function Produto(nome, preco, estoque) {
   this.nome = nome;
   this.preco = preco;

   Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra valor
      configurable: true, //configurável
      get: function () {return estoque;},
      set: function (valor) {if (typeof valor !== 'number') throw new TypeError('mensagem');}
   });
}

function criaProduto(nome){
   return {
      get nome(){return nome;},
      set nome(valor){nome = valor}
   }
}

const p1 = new Produto('Camiseta', 20, 3);