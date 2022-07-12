function Calculadora() {
   this.display = document.querySelector('.display');

   this.inicia = () => {
      this.capturaCliques();
      this.capturaEnter();
   };

   this.capturaEnter = () => {
      document.addEventListener('keyup', event => {

         if (event.keyCode === 13) this.realizaConta();
      });
   };

   this.capturaCliques = () => {
      document.addEventListener('click', event => {
         const element = event.target;

         if (element.classList.contains('btc-num')) this.addNumDisplay(element);
         if (element.classList.contains('btc-clear')) this.clear();
         if (element.classList.contains('btc-del')) this.delete();
         if (element.classList.contains('btc-eq')) this.realizaConta();

         this.display.focus();
      });
   };

   this.addNumDisplay = element => this.display.value += element.innerText;

   this.clear = () => this.display.value = '';

   this.delete = () => this.display.value = this.display.value.slice(0, -1);

   this.realizaConta = () => {

      try {
         const conta = eval(this.display.value);
         if (!conta) {
            alert('Conta inválida')
            return;
         }

         this.display.value = String(conta);
      } catch (e) {
         alert('Conta inválida')
         return;
      }
   };

}

const calculadora = new Calculadora();
calculadora.inicia();
