jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  
  // Mobile navigation at frontpage
  jQuery("#navigation.mobile").localScroll();
  
  // Marking the scroller bullet / list item active 
  jQuery("#navigation.desktop a").click(function() {
    jQuery(this).parent().parent().children().removeClass("inactive");
    jQuery(this).parent().addClass("inactive");
  });
  
  // Scrolling products at frontpage on all sections
  jQuery.localScroll.defaults.axis = 'xy';
  jQuery(".section").each(function(){ 
    jQuery.localScroll({
      target: "#" + jQuery(this).attr('id') + " #articles", 
      duration: 1000,
      hash: false,
      onBefore:function( e, anchor, $target ){
        var sectionID = $target.selector.split(" ")[0];
        //var sectionID = "#" + $target[0].id.toString();  
        var targetID = "#" + anchor.id.toString();
        if ( jQuery(sectionID).find(targetID).length == 0 ) {
          return false;
        }
      },
      onAfter:function( anchor, settings ){
      }
    });
  });
 
  
  // Show product details on hover, at frontpage
  jQuery(".section #article.thumb #figure").hover(
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
