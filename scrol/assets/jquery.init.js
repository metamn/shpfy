jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  
  // Show collections, tags on mobile
  jQuery("#show-collections-link .link").click(function() {
    jQuery(this).hide('slow');
    jQuery("#show-collections").show("slow");
  });
  
  
  // Making the selected product type/vendor active at Collections page
  var urlParams = {};
  (function () {
      var e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
          q = window.location.search.substring(1);

      while (e = r.exec(q))
         urlParams[d(e[1])] = d(e[2]);
  })();  
  if (urlParams['q']) {
    jQuery(".collection #navigation .jquery-active a").each(function(index){
      if (jQuery(this).html() == urlParams['q']) {
        jQuery(this).addClass('active');
      }
    });
  }
  

  // Show the rest of the tags/collections/product types on click on Collections page
  jQuery("#navigation.collections .show-more").click(function() {
    if (jQuery(this).html() == "→") {
      jQuery(this).html('&larr;');
    } else {
      jQuery(this).html('&rarr;');
    }
    jQuery(this).next().toggle('slow');
  });

  
  // Add .col-x class to frontpage items
  jQuery(".index .section").each(function(index) {
    if ( index % 2 != 0) {
      jQuery(this).addClass("col-2");
    } else {
      jQuery(this).addClass("col-1");
    }
  });

  
  // Show date in blog sidebar on hover
  jQuery("#aside ul.hoverable li").hover(
    function () {
      jQuery(this).children(".date").fadeIn('slow');
    }, 
    function () {
      jQuery(this).children('.date').fadeOut('slow');
    }
  );
  
    
  // Marking the scroller bullet / list item active at Frontpage
  jQuery(".section #navigation a").click(function() {
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
