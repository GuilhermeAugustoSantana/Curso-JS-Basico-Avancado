function funcao([valor1, valor2, valor3]) {
    // console.log(valor1 + valor2 + valor3);
}

funcao([10, 0, 30]);

const conta = function (operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;       
    }
    console.log(acumulador);
}
    

conta('-', 1, 20, 30, 40, 50)