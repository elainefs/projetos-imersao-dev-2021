var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")

var valorEmDolaNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolaNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)