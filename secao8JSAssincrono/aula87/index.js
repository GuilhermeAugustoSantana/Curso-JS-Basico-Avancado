function rand(min, max) {
   min *= 1000;
   max *= 1000;
   return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
   return new Promise((resolve, reject) => {
      if (typeof msg !== 'string') {
         reject(false);
         return;
      }
      
      setTimeout(() => {
         resolve(msg);
      }, tempo)
   });
};

const promise = [
   'Primeiro valor',
   esperaAi('Promise 1', 3000),
   esperaAi('Promise 2', 50000),
   esperaAi('Promise 3', 5000),
   'Outro valor'
];

// Promise.all Promise.race Promise.resolve Promise.rejec
Promise.all(promise)
   .then(function (valor) {
      console.log(valor);
   })
   .catch(function (erro) {
      console.log(erro);
   });

 

