//defineProperty - defineProperties
function Produto(nome, preco, estoque) {
   Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra valor
      value: estoque, //valor
      writable: false, // pode alterar
      configurable: true //configurável
   });

   Object.defineProperties(this, {
      nome: {
         enumerable: true, // mostra valor
         value: nome, //valor
         writable: true, // pode alterar
         configurable: true //configurável
      },
      preco: {
         enumerable: true, // mostra valor
         value: preco, //valor
         writable: true, // pode alterar
         configurable: true //configurável
      },
   });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));