jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  
  // Scrolling products at frontpage
 jQuery.localScroll.defaults.axis = 'xy';
  jQuery.localScroll.hash({
    target: '#latest', 
    queue: true,
    duration: 1500
  });
  jQuery.localScroll({
    target: '#latest', 
    queue: true,
    duration: 1000,
    hash: true,
    onBefore:function( e, anchor, $target ){
	
    },
    onAfter:function( anchor, settings ){
	
    }
  });
  
  // Show product details on hover, at frontpage
  jQuery("#section #article.thumb #figure").hover(
    function () {
      jQuery(this).next().fadeIn('slow');
    }, 
    function () {
      jQuery(this).next().fadeOut('slow');
    }
  );  
  
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
