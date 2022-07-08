const nome = 'Guilherme';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Augusto';
    falaNome();
}

usaFalaNome();
