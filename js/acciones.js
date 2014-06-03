// JavaScript Document
$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
	 alert ("listo");
  $('.boton_vibrar').tap(function (){
    navigator.notification.vibrate(500);
  });
 },false); //deviceready
 
  $('#logo img').tap(function(e){	
	
	
	
    $('#logo img').toggleClass('clicked');
	$('#vista img').toggleClass('clicked');
	
});//click 



    $('#vista img').tap(function(e){	
    $('#vista img').toggleClass('clicked');
	$('#ham img').toggleClass('clicked');
 $.mobile.navigate( "#principal" );	
});//click 

    //$('#vista img').tap(function(e){	
	// $("#roar")[0].play();	
	// $.mobile.navigate( "#principal" );
	//});
	
	$('#vida').tap(function (e) {
 	 $.mobile.navigate( "#ray1" );
	});


$('#enfer').tap(function (e) {
 	 $.mobile.navigate( "#enf" );
	});




$('#cuidar').tap(function (e) {
 	 $.mobile.navigate( "#c" );
	
	});
	
	
$('#tip').tap(function (e) {
 	 $.mobile.navigate( "#tipos" );
	
	});
	
	
	$('#domo').tap(function (e) {
 	 $.mobile.navigate( "#domo1" );
	
	});
	
	
	$('#acerca').tap(function (e) {
		
 	 $.mobile.navigate( "#de" );
	
	});
	
	
	
 
}); //document ready


