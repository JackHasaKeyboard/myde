// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  $(":file").filestyle({buttonText: "upload color scheme"});

  /* ZeroClipboard.config( { swfPath: "http://davidwalsh.name/demo/ZeroClipboard.swf" } );

  var client = new ZeroClipboard( document.getElementById("git_clone") );

  alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    `this` === `client`;
    `event.target` === client;

    event.target.style.display = "none";
    alert("Copied text to clipboard: " + event.data["text/plain"] );
  } ); */
  
  $('#new_color').bind('change click', function() {
    if($(this).validate().checkForm()) {
      $('#submit').removeClass('button_disabled').attr('disabled', false);
      alert("It worked :D");
    } else {
      $('#submit').addClass('button_disabled').attr('disabled', true);
      alert("Didn't work m8 :l");
    }
  });

});