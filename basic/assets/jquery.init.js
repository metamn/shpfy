jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  // Show excerpt on Frontpage
  jQuery("#index #info span.more").click(function(){
    var arrow = jQuery(this).html();     
    if (arrow == "→") {
      arrow = "&larr;";
    } else {
      arrow = "&rarr;";
    };
    jQuery(this).html(arrow);  
    jQuery("#index #info #excerpt").toggle();
  });
  
});   
