function meuEscopo() {

    function getTimeFromSeconds(segundos) {
        let data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const relogio = document.querySelector('#relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target;

        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausa');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;

        }

        if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausa');
            clearInterval(timer);
        }

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausa');
            clearInterval(timer);
            iniciaRelogio()
        }

    });
}
meuEscopo();
