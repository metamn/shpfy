jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
    
  // Highlight products on hover
  jQuery("#latest #item, #sales #item, .collection #items #item").hover(
    function () {
      jQuery(this).addClass('hover');
    },
    function () {
      jQuery(this).removeClass('hover');
    }
  );
  
  
  // Pull up the Ecosystem
  jQuery("#eco").click(function(){        
    jQuery("#ecosystem").slideToggle(700);
    jQuery(this).slideToggle(700);        
  }); 


  // Accordion on Product and Checkout page
  jQuery("#navigation .link").next().hide();   
  jQuery("#navigation .link").click(function(){
    jQuery(this).next().slideToggle(200);
  }); 
  
  
  // Click on Thumbnail at the Product page
  jQuery("#product #thumbs img.link").click(function(){
    var newImage = jQuery(this).attr('rev');  
    var wrap = jQuery(this).parent().parent().prev().children();    
    var img = new Image();
    img.onload = function() {
      // change the image
      wrap.find("img").attr("src", newImage);
      wrap.find("a").attr("href", newImage);
    };
    img.src = newImage;       
  }).filter(":first").click();
  
  
  // Show excerpt on Collections, Search, Blog
  // 1. change arrow
  // 2. hide original excerpt
  // 3. insert full content
  // 4. change div width
  jQuery(".collection #item #description span.more, #blog #content #description span.more ").click(function(){        
    // hide
    jQuery(this).prev().slideToggle(200);        
    // insert
    jQuery(this).next().slideToggle(200);
    // arrow
    var arrow = jQuery(this).html();     
    if (arrow == "→") {
      arrow = "&larr;";
    } else {
      arrow = "&rarr;";
    };
    jQuery(this).html(arrow);     
  });
  
  
  // Click on Thumbnail at the Collections & Search page
  jQuery("#collection #item img.link, #search #item img.link").click(function(){
    var newImage = jQuery(this).attr('rev');  
    var wrap = jQuery(this).parent().parent().prev().children();    
    var img = new Image();
    img.onload = function() {
      // change the image
      wrap.find("img").attr("src", newImage);
      wrap.find("a").attr("href", newImage);
    };
    img.src = newImage;    
        
  }).filter(":first").click();
  
  
  
  // Show excerpt on Frontpage, Blog
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
