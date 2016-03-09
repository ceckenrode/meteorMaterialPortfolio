$(document).ready(function() {
  


$(document).on('click', '#submitForm', function(event) {
  event.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  var subject = $('#subject').val();
  var message = $('#message').val();

  $.ajax({
  type: "POST",
  crossDomain: true,
  // dataType: 'jsonp',
  url: "https://docs.google.com/forms/d/1XtkLm1rJhkeXFcmN5-3pbFq0WQpv58C7N9TMHunwHUE/formResponse",
  data: {"entry.1405079923": name, "entry.10097707": email, "entry.1695378437": subject, "entry.1193375964": message}
})

  $('#name').val('');
  $('#email').val('');
  $('#subject').val('');
  $('#message').val('');

});
 

});
