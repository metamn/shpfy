jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){

  
  // Highlight More button on Frontpage
  jQuery("#latest #more").hover(
    function () {
      jQuery(this).addClass('highlight');
    },
    function () {
      jQuery(this).removeClass('highlight');
    }
  );
  jQuery("#sales #more").hover(
    function () {
      jQuery(this).addClass('sale');
    },
    function () {
      jQuery(this).removeClass('sale');
    }
  );

  // Accordions  
  // Open the first pane
  jQuery(".accordion h4.first").addClass("current");
  jQuery(".accordion h4.first").next(".pane").show();
  
  jQuery(".accordion h4").toggle(
    function () {
      jQuery(this).addClass("current");
      jQuery(this).next(".pane").show();
    },
    function () {
      jQuery(this).removeClass("current");
      jQuery(this).next(".pane").hide();
    }
  );
  
  // Click on Search in the Header
  jQuery("#main-menu .search").click(function(){
    // hide all menu items 
    jQuery("#shopping-menu").children(".item").hide();
    jQuery("#shopping-menu .search-menu").fadeIn('slow');
  });
  
    
  // Highlight items on hover
  jQuery("#item.product, #add-to-cart").hover(
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
    var wrap = jQuery("#product-image");    
    var img = new Image();
    img.onload = function() {
      // change the image
      wrap.find("img").attr("src", newImage);
      wrap.find("a").attr("href", newImage);
    };
    img.src = newImage;       
  }).filter(":first").click();
   
  
  // Scrolling featured products
  jQuery.localScroll.defaults.axis = 'xy';
  jQuery.localScroll.hash({
		target: '#featured', 
		queue: true,
		duration: 1500
	});
	jQuery.localScroll({
		target: '#featured', 
		queue: true,
		duration: 1000,
		hash: true,
		onBefore:function( e, anchor, $target ){
			
		},
		onAfter:function( anchor, settings ){
			
		}
	});
    
});   
