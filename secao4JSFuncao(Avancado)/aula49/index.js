// Function hoisting
function oi() {
    console.log('Oi');
}
oi();

//First-class objects (Objeto de primera class)
//Function expression
const SouUmDado = function () {
    console.log('Sou um dado');
};

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(SouUmDado); 

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
}
funcaoArrow();

// Dentro de um objeto
const ob = {
    falar: function() {
        console.log('Estou falando');
    }
}
ob.falar();


