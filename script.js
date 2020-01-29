$(document).ready(function(){
$('#keyboard-upper-container').css("display", 'none');
 


let toggle = function() {
    var on = false;
    return function() {
    if(!on) {
        on = true;
        //Do stuff if ON
        return;
    }
    //Do stuff if OFF
    on = false;
}
}();

toggle(); //Set OFF as default    

document.addEventListener('keydown',function(e) {
   var key = e.keyCode || e.which;
   if(key === 16) {
      toggle();
   }
}, false);

})