// //Strict Mode
// //first intro description height
$(document).ready(function(){

// //Run on Window Load
$(window).load(function(){
  //Page loader
  $('#page-loader').fadeOut(1000, function(){});

    // after 5 second timeout - fade out
    setTimeout(function(){$('#page-loader').fadeOut(1000);}, 1000);

});
});
