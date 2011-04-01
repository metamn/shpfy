jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  
  // Marking the scroller active 
  jQuery("#navigation a").click(function() {
    jQuery(this).parent().parent().children().removeClass("inactive");
    jQuery(this).parent().addClass("inactive");
  });
  
  // Scrolling products at frontpage
  jQuery.localScroll.defaults.axis = 'xy';
  jQuery(".section").each(function(){ 
    jQuery.localScroll({
      target: jQuery(this), 
      duration: 1000,
      hash: true,
      onBefore:function( e, anchor, $target ){
        //alert( $target[0].id + " > " + anchor.id);
        var d1 = "#" + $target[0].id.toString();  
        var d2 = "#" + anchor.id.toString();
        if ( jQuery(d1).find(d2).length == 0 ) {
          return false;
        }
      },
      onAfter:function( anchor, settings ){
      }
    });
  });
 
  
  // Show product details on hover, at frontpage
  jQuery("#section #article.thumb #figure").hover(
    function () {
      jQuery(this).next("#summary").fadeIn('slow');
    }, 
    function () {
      jQuery(this).next('#summary').fadeOut('slow');
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
