const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');

const raizQuadrada = document.getElementById('raizQuadrada');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('NaN');
const arredondandoBaixo = document.getElementById('arredondandoBaixo');
const arredondandoCima = document.getElementById('arredondandoCima');
const DuasCasaDecimais = document.getElementById('DuasCasaDecimais');

numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}<p>`;
inteiro.innerHTML = `<p>${numero} é inteiro ${Number.isInteger(numero)}<p>`;
nan.innerHTML = `<p>é NaN ${Number.isNaN(numero)}<p>`;
arredondandoBaixo.innerHTML = `<p>Arredondado para baixo:  ${(Math.floor(numero))}<p>`;
arredondandoCima.innerHTML = `<p>Arredondado para cima:  ${(Math.ceil(numero))}<p>`;
DuasCasaDecimais.innerHTML = `<p>Com duas casa decimais:  ${(numero.toFixed(2))}<p>`;