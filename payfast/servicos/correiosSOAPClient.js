var soap = require('soap');

function CorreioSOAPCliente() {
    this._url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';
}

module.exports = function () {
    return CorreioSOAPCliente;
}

CorreioSOAPCliente.prototype.calculaPrazo = function (args, callback) {
    soap.createClient(this._url, function (erro, cliente) {
        console.log('cliente soap criado');

        cliente.CalcPrazo(args, callback);

    });
}

