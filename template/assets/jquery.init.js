jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  // Click on Search in the Main Menu  
  jQuery("#header #nav #main-menu .search").toggle (
    function () {
      jQuery("#header #search").fadeIn('slow');
    },
    function () {
      jQuery("#header #search").fadeOut('slow');
    }
  );
    
  
   
    
});   
