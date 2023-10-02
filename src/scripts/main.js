AOS.init();

const dataDoEvento = new Date("Dec 12 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAgora;

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteEvento = Math.floor(distanciaAteEvento / (diaEmMs));
    const horasAteEvento = Math.floor((distanciaAteEvento % (diaEmMs)) / (horaEmMs));
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
    const seguntosAteEvento = Math.floor((distanciaAteEvento % minutoEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${seguntosAteEvento}s`

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "Evento Expirado"
    }
}, 1000)