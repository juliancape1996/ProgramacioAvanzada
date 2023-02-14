let valor =0

const ramDisponibleGb = valor =>{
    valor = valor*(Math.pow(10,-9));
    return valor;
}
function ramDisponibleMb(valor) {
    valor = valor*(Math.pow(10,-6));
    return valor;
}

module.exports = {
    ramDisponibleGb,
    ramDisponibleMb
}
