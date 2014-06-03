// JavaScript Document
$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
	 alert ("listo");
  $('.boton_vibrar').tap(function (){
    navigator.notification.vibrate(500);
  });
 },false); //deviceready
}); //document ready


