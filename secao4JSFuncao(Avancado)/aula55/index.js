//IIFE -> Immediately invoked functio expression
(function(){
    const sobrenome = 'Guilherme';

    function CriaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(CriaNome('Guilherme'))
    }

    falaNome();
})();