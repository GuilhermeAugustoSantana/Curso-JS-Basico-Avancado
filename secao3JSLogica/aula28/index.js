// const tresHoras = 60 * 60 * 4 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia);

// const data = new Date(2019, 0); // a, m, d, h, M, s, ms
const data = new Date('2019-04-20 20:20:59.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());
// console.log(Date.now());