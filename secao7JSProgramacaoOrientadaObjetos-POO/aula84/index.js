//705.484.450.52
class ValidaCPF {
   constructor(cpfEnviado) {
      Object.defineProperty(this, 'cpfLimpo', {
         writable: false,
         enumerable: true,
         configurable: false,
         value: cpfEnviado.replace(/\D+/g, '')
      });
   }

   eSequencia() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
   }

   geraNovoCpf() {
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
      const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
   }

   static geraDigito(cpfSemDigitos) {
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;

      for (let stringNumerca of cpfSemDigitos) {
         total += reverso * Number(stringNumerca);
         reverso--;
      }

      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
   }

   valida() {
      if (!this.cpfLimpo) return false;
      if (typeof this.cpfLimpo !== 'string') return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.eSequencia()) return false;
      this.geraNovoCpf();

      return this.novoCPF === this.cpfLimpo;
   }

}

let cpf = new ValidaCPF('705.484.450.52');
// cpf = new ValidaCPF('111.111.111-11');
if (cpf.valida()) console.log('CPF válido'); 
else console.log('CPF inválido');
