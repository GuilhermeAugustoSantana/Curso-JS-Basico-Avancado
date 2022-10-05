class DispositivoEletronico {
   constructor(nome) {
      this.nome = nome;
      this.ligado = false;
   }

   ligar() {
      if (this.ligado) {
         console.log(`${this.nome} já ligado`);
         return;
      }

      this.ligado = true;
   }

   desligar() {
      if (this.ligado) {
         console.log(`${this.nome} já deligado`);
         return;
      }

      this.ligado = false;
   }
}

class Smartphone extends DispositivoEletronico {
   constructor(nome, cor, modelo){
      super(nome);
      this.cor = cor;
      this.modelo = modelo
   }
};

class Tablet extends DispositivoEletronico {
   constructor(nome, temWifi){
      super(nome);
      this.temWifi = temWifi;
   }

   falaOi(){
      console.log('Oi');
   }
};



const s1 = new Smartphone('iPhone', 'Preto', 'Galax S10');
console.log(s1);

const t1 = new Tablet('iPad', 'Sim');
t1.falaOi();