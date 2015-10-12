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
	$('#l-submit, #l-err').hide();

	$('#file').change(function(e){
    var file = $(this).val();

    if(file != "" && file != null) {
      var ext = file.split('.').pop();
      
      if(ext == "tmTheme") {
       $('#l-submit').show();
       $('#l-err').hide();
     } else {
      $('#l-err').show();
      $('#l-submit').hide();
    }
  }
});

});

var client = new ZeroClipboard( document.getElementById("git_clone") );

client.on( "ready", function( readyEvent ) {
  // alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    event.target.style.display = "none";
    alert("Copied text to clipboard: " + event.data["text/plain"] );
  } );
} );
