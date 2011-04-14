

  var cookie = new Cookies();

  function initPage() {
    // read the cookie and get list of elements to be visibile
    var els = getDrops();
    
    // show all visible elements
    els.each(function(el){
      $(el).addClassName('showit');
      $(el).show();
    });

    // initialize observers
    $("category-navigation").select('h3 a').each(function(el){
      Event.observe(el, 'click', function(e){
        var div = $(el).up().next();
        $(div).toggle();
        setDrop(div.id, div.visible());
        e.preventDefault();
      });
    });
    
  }

  // return an array of all visible drops
  function getDrops() {
    var drops = [];
    var content = cookie.get('drops');
    if (content) {
      drops = content.split(",");
    }
    return drops;
  }
  
  // pass in drop id, and visible or not
  // setDrop('name', true/false)
  function setDrop(divid, is_visible) {
    var drops = getDrops();
    var new_drops;
    
    if (is_visible) {
      // add to array
      drops.push(divid);
      new_drops = drops.uniq();
    } else {
      // remove from array
      new_drops = drops.without(divid);
    }
    cookie.set('drops', new_drops.join(','));
  }

// 
//   cookie_sheet = "shopify-wiki-state";
// 
//   function readCookie() {
//     var list = $.cookie(cookie_sheet) || null;
//     if (list) {
//       return list.split(",");
//     } else {
//       return [];
//     }
//   }
//   
//   function setCookie(list) {
//     $.cookie(cookie_sheet, list.join(","));
//   }
//   
//   function updateCookie(domid, visible) {
//     var list = readCookie();
// 
//     if (visible) {
//       if (list.indexOf(domid) == -1) {
//         list.push(domid);   // add name to list
//       }
//     } else {
//       var index = list.indexOf(domid);
//       if (index > -1) {
//         list.splice(index, 1);   // remove name from list        
//       }
//     }
//     setCookie(list);
//   }
// 
//   function initSheet() {
//     var list = readCookie();
//    
//     jQuery.each(list, function(i, el){
//       $('#'+el).addClass('shown')
//     })
//   }
//   
//   $(document).ready(function(){
//     
//   initSheet();
//    
//   $("#category-navigation h3 a").toggle(function() {
// 
//       $(this).parent().find("div.drop").show();
//       var domid = $(this).parent().next("div").id;
//       updateCookie(domid, true);
//       return false;
//     },
//     function() {
//       $(this).parent().next("div.drop").hide();
//       var domid = $(this).parent().next("div").id;
//       updateCookie(domid, false);
//       return false;
//     }
//   );
// 
// 
// });
// 
