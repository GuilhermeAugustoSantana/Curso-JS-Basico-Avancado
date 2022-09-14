function Produto(nome, preco){
   this.nome = nome;
   this.preco = preco;
}

Produto.prototype.desconto = function(percertual){
   this.preco = this.preco - (this.preco * (percertual / 100))
};

Produto.prototype.aumento = function(percertual){
   this.preco = this.preco + (this.preco * (percertual / 100))
};



const p1 = new Produto('Casaco', 100);

const p2 = {
   nome: 'Caneca',
   preco: 20
};

Object.setPrototypeOf(p2, p1);

p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
   preco: {
      writable: true,
      configurable: true,
      value: 100,
      enumerable: true
   }
});
p3.aumento(10);
console.log(p3);