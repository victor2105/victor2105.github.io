Iugu.setAccountID("47981085EF434E64A14903BE299AFFF9");


Iugu.setTestMode(true); // Only on test mode


jQuery(function($) {
  $('#payment-form').submit(function(evt) {
      var form = $(this);
      var tokenResponseHandler = function(data) {
          
          if (data.errors) {
              alert("Erro salvando cartão: " + JSON.stringify(data.errors));
          } else {
              $("#token").val( data.id );
              form.get(0).submit();
          }
          
          // Seu código para continuar a submissão
          // Ex: form.submit();
      }
      
      Iugu.createPaymentToken(this, tokenResponseHandler);
      return false;
  });
});