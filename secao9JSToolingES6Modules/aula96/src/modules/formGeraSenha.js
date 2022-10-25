import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const mainusculas = document.querySelector('.chk-mainusculas');
const minusculas = document.querySelector('.chk-minusculas');
const numeros = document.querySelector('.chk-numeros');
const simbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {

   gerarSenha.addEventListener('click', () => {
      senhaGerada.innerHTML = gera();
   });
}

function gera() {
   const senha = geraSenha(
      qtdCaracteres.value,
      mainusculas.checked,
      minusculas.checked,
      numeros.checked,
      simbolos.checked
   );
   return senha || 'Nada selecionado';
}