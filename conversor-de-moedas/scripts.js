function converter() {
  var valorEmDolarTexto = prompt(
    "Qual o valor em dólar que você quer converter? \n (Dólar Padrão = U$ 5.00)"
  );

  var valorEmDolaNumero = parseFloat(valorEmDolarTexto);

  var valorEmReal = valorEmDolaNumero * 5.0;
  var valorEmRealFixado = valorEmReal.toFixed(2);

  alert(
    `U$ ${valorEmDolaNumero} dólares são aproximadamente R$ ${valorEmRealFixado} reais`
  );
}
