jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  // Show excerpt on Frontpage
  jQuery("#index #info span.more").click(function(){
    jQuery("#index #info #excerpt").toggle();
  });
  
});   
