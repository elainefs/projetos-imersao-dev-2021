var valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?")

var valorEmDolaNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolaNumero * 5.00
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(`U$ ${valorEmDolaNumero} dólares são R$ ${valorEmRealFixado} reais`)