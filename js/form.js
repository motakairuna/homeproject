// JavaScript File
$(function(){
    $('#btn-send').click(senfForm);
});


function sendForm(e){
  e.preventDefault();
  $.ajax({
      url: "https://formspree.io/motakairuna@gmail.com", 
      method: "POST",
      data: {
      name:$('#client-name').val(),
      email:$('#client-email').val(),
      tel:$('#client-tel').val(),
      comment:$('#comment').val()
  },
      dataType: "json"
  })
   .done(function(){
    $('form').html('<h1>Дякую</h1>') ;  
  });
}


