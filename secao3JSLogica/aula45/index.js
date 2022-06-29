try {
    //executa quando não há erro
} catch (e) {
    // executa quando há erro
} finally {
    // executa sempre
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) throw TypeError('Esperando instacia de Date.');

    if (!data) data = new Date();

    return data.toLocaleTimeString('pt-Br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:12:12')
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {
    console.log(e);
} finally {
    console.log('Algo');
}