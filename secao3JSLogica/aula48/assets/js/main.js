const novaTarefa = document.querySelector('.novaTarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const listaTarefas = document.querySelector('.listaTarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

novaTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!novaTarefa.value) return;
        criaTarefa(novaTarefa.value);
    }
});

function limpaInput() {
    novaTarefa.value = '';
    novaTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
}



function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    listaTarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();

btnAddTarefa.addEventListener('click', function (e) {
    if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
});

document.addEventListener('click', function (e) {
    const elemento = e.target;

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefas();
    }
});
