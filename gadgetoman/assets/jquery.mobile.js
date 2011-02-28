jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){

  // Use these functions only when mobile.css is loaded !!
  var mobile = ( jQuery(".mobile").css("display") === "block" );
  if (mobile) {
    
    // Scrolling featured items on mobile  
    jQuery("#featured .section ul").children().addClass('hidden');
    jQuery("#featured0").removeClass('hidden');
    
    jQuery("#featured .nav a").click(function(event){    
      var target = jQuery(this).attr('href');
      if (jQuery(this).attr('class') == "next") {
        jQuery(target).removeClass('hidden');
      } else {
        jQuery(this).parent().parent().parent().addClass('hidden');
      }   
    });
  
  }
    
});   
