//Factory function (Função fárica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'falando nada') {
            return `${this.nome} está ${assunto}`
        },
        
        altura,
        peso,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Guilherme', 'Augusto', 1.75, 55);
p1.nomeCompleto = 'Augusto adams Santana'
console.log(p1.nomeCompleto);