/*
  Oficina Como Criar Coisas Inteligentes com NodeJS e Arduino - 15/10/2019
  Feira do Polo Digital de Manaus 2019
  Facilitador:       Orlewilson Bentes Maia
  Data Criacao:      14/03/2019
  Data Atualizacao:  15/10/2019
  Descricao:         Projeto 02 – Mini Estação Meteorológica - NodeJS
*/

// importando bibliotecas
// para acesso serial a placa Arduino
var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

// abre a porta de comunicação (não se esqueca de mudar a porta)
var port = new SerialPort('COM4', {
	baudRate: 9600
});

// variáveis

// formatador de conteúdo
const parser = port.pipe(new Readline({delimiter: '\r\n'}))

// placa pronta
console.log("Aguardando dados pela porta serial...");  

// lê o conteúdo da porta serial
parser.on('data', function (data) {
	// mostra os dados no console lidos pela porta serial do arduino
	console.log(data);    
});