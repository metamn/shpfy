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
  
  // Show excerpt on Collections
  // 1. change arrow
  // 2. hide original excerpt
  // 3. insert full content
  // 4. change div width
  jQuery("#collection #item #description span.more").click(function(){
    var parentSize = jQuery(this).parents("#item").height();
    var newSize = jQuery(this).next().height();
    
    // arrow
    var arrow = jQuery(this).html();     
    if (arrow == "→") {
      arrow = "&larr;";            
      var size = newSize + parentSize;
    } else {
      arrow = "&rarr;";
      var size = "22em";
    };
    jQuery(this).html(arrow);  
    
    // hide
    jQuery(this).prev().toggle(200);
    // insert
    jQuery(this).next().toggle(200);
    
    // change div size    
    jQuery(this).parents("#item").height(size).delay(400);
  });
  
  
  
  
  // jQZoom
  // On Product 
  // after image change jqzoom is reloaded, see below
  jQuery('.product-zoom').jqzoom({
	    zoomWidth: 230,
	    zoomHeight: 230,
      xOffset: 10,
      yOffset: 0,
      position: "right",
      title: false,
      preload: 0,
      zoomType: 'reverse'
  });
  
  // Click on Thumbnail at the Collections page
  jQuery("#collection #item img.link").click(function(){
    var newImage = jQuery(this).attr('rev');
    var wrap = jQuery(this).parent().parent().prev().children();    
    var img = new Image();
    img.onload = function() {
      // change the image
      wrap.find("img").attr("src", newImage);
      wrap.find("a").attr("href", newImage);
    };
    img.src = newImage;    
    
    // jQZoom
    jQuery('.product-zoom').jqzoom({
	      zoomWidth: 380,
	      zoomHeight: 330,
        xOffset: 10,
        yOffset: 0,
        position: "right",
        title: false,
        preload: 0,
        zoomType: 'reverse'
    });
    
  }).filter(":first").click();
  
});   
