function myScope() {
    const h1 = document.querySelector('.container h1')
    function getData() {
        const date = new Date();

        h1.innerHTML = date.toLocaleDateString('pt-BR', { dateStyle: 'full' }) + ` ${zeroAesquerda(date.getHours())}:${zeroAesquerda(date.getMinutes())}`;

        // h1.innerHTML = criaDate(date);
    }

    function zeroAesquerda(num) {
        return num >= 10 ? num : `0${num}`
    }

    // function criaDate(data) {
    //     const diaSemana = data.getDay();
    //     const numeroMes = data.getMonth();

    //     const nameDay = getDayWeektext(diaSemana);
    //     const nameMonth = getNameMonth(numeroMes);

    //     return `${nameDay}, ${data.getDate()} de ${nameMonth} de ${data.getFullYear()} ${zeroAesquerda(data.getHours())}:${zeroAesquerda(data.getMinutes())}`
    // }

    // function getDayWeektext(diaSemana) {
    //     const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado',];
    //     return diasSemana[diaSemana];
    // }

    // function getNameMonth(numeroMes) {
    //     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',];
    //     return meses[numeroMes];
    // }

    getData();
}

myScope();
