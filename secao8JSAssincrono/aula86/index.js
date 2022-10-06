function aleatorio(min, max) {
   min *= 1000;
   max *= 1000;
   return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, temp) {
   return new Promise((resolve, reject) => {
      if(typeof msg != 'string') reject('BAD VALUE');
   
      setTimeout(() => {
         resolve(msg);
      }, temp);
   });
}


esperaAi('Conexão com o BD', aleatorio(1, 3))
   .then(resposta => {
      console.log(resposta);
      return esperaAi('Buscando dados da BASE', aleatorio(1, 3));
   })
   .then(resposta => {
      console.log(resposta);
      return esperaAi(222222, aleatorio(1, 3));
   })
   .then(resposta => {
      console.log(resposta);
   })
   .then(resposta => {
      console.log("Exibe dados na tela");
   })
   .catch(e =>{
      console.log('ERRO:', e);
   });
