var gaRequest = new GlideAjax('CurrencyUtils');

gaRequest.addParam('sysparm_name', 'convert');
gaRequest.addParam('sysparm_source_currency', 'USD');
gaRequest.addParam('sysparm_target_currency', 'EUR');
gaRequest.addParam('sysparm_original_amount', '112,45');
gaRequest.addParam('sysparm_locale', 'de_DE');

gaRequest.getXMLAnswer(function(strAnswer) {
  var jsonAnswer = JSON.parse(strAnswer);

  if (jsonAnswer.error_message.length > 0) {
    alert(jsonAnswer.error_message);
  }
  else {
    alert(
      jsonAnswer.original_amount + ' ' + jsonAnswer.source_currency + ' make ' +
      jsonAnswer.converted_amount + ' ' + jsonAnswer.target_currency + 
      ' at an exchange rate of ' + jsonAnswer.exchange_rate
    );
  }
});
