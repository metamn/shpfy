jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  
  
  
  // Show date in blog sidebar on hover
  jQuery("#aside ul.hoverable li").hover(
    function () {
      jQuery(this).children(".date").fadeIn('slow');
    }, 
    function () {
      jQuery(this).children('.date').fadeOut('slow');
    }
  );
  
  // Mobile navigation at frontpage
  jQuery("#navigation.mobile").localScroll();
  
  
  // Marking the scroller bullet / list item active 
  jQuery("#navigation.desktop a").click(function() {
    jQuery(this).parent().parent().children().removeClass("active");
    jQuery(this).parent().addClass("active");
  });
  
  
  // Scrolling products at frontpage for all sections
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
    
  // Show product details on hover, at Frontpage
  jQuery(".section #article.thumb #figure").hover(
    function () {
      jQuery(this).next("#summary").fadeIn('slow');
    }, 
    function () {
      jQuery(this).next('#summary').fadeOut('slow');
    }
  );  
  
  
  // Click on Thumbnail at the Product page
  jQuery(".product #thumbs img.link").click(function(){
    var newImage = jQuery(this).attr('rev');  
    var wrap = jQuery(".product #figure");    
    var img = new Image();
    img.onload = function() {
      // change the image
      wrap.find("img").attr("src", newImage);
      wrap.find("a").attr("href", newImage);
    };
    img.src = newImage;       
  });    
});   
