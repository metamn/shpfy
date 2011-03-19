jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  // horizontal grid
  var horizontal = "";
  for (i=0; i<400; i++) {
    horizontal += '<div class="col">&nbsp;</div>';
  }
  
  jQuery("body").append(
    '<div id="grid">' + horizontal + '</div>'  
  );
    
});   
