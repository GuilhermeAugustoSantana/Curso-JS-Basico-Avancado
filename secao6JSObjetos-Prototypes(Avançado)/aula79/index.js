const falar = {
   falar() {
      console.log(`${this.nome} está falando`);
   }
}
//ou posso usar isso  = Object.assing({}, falar);
const pessoaPrototype = { ...falar };

function criaPessoa(nome, sobrenome) {
   return Object.create(pessoaPrototype, {
      nome: { value: nome },
      sobrenome: { value: sobrenome }
   })
}