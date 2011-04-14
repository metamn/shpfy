var _visit = new function(){
  var today = new Date().getTime();
  var base = document.location.protocol + '//shopify-aggregate.heroku.com/'
  var cookies = (document.cookie ? document.cookie : '').split(';');

  var uniqueId = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    }).toUpperCase();
  };

  var readCookie = function(permanent, key) {
    for(var i=0;i<cookies.length;i++) { 
      var c = cookies[i];
      var start=c.indexOf(key+'=');
      if (start!=-1) {
        return unescape(c.substring(start+key.length+1,c.length))
      }
    }
    return null;
  }

  var readStorage = function(permanent, key) {
    var storage = permanent ? 'localStorage' : 'sessionStorage';
    
    if (storage in window) return window[storage].getItem(key);
    else return false;
  }
    
  var setCookie = function(permanent, key, value) {
    var increment = (permanent) ? 1000*60*60*24*360*20 : 1000*60*30;
    var expire = new Date(today + increment);
    document.cookie = key + "=" + escape(value) + ";path=/" +";expires=" + expire.toUTCString() + ';domain=.shopify.com';
  };

  var setStorage = function(permanent, key, value) {
    var storage = permanent ? 'localStorage' : 'sessionStorage';
    if (storage in window) window[storage].setItem(key, value)
  };

  var fetch = function(permanent, key, func) {
    var cookie = readCookie(permanent, key);
    var local  = readStorage(permanent, key);
    var value  = cookie || local || func.call();

    if (!cookie || !permanent) setCookie(permanent, key, value);
    if (!local)  setStorage(permanent, key, value);

    return value; 
  };

  var referrer = (window.decodeURI)?window.decodeURI(document.referrer):document.referrer;
  var landing_page = (window.decodeURI)?window.decodeURI(window.location):window.location;

  var uniq = fetch(true, '_y', function() { return uniqueId(); });
  var visit = fetch(false, '_s', function(){ return uniqueId(); });
 
  setTimeout(function() {
    new Image().src = base + 'record.gif?y='+ uniq + '&s='+visit+'&r=' +encodeURIComponent(referrer)+'&l='+encodeURIComponent(landing_page)+'&'+ today;
  });

  this.tag = function(name) {
    new Image().src = base + 'record-tag.gif?y='+ uniq + '&s='+visit+'&n=' + encodeURIComponent(name);
  }
};
