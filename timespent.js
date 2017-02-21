// ==UserScript==
// @name        time spent
// @namespace   jprats@systemadmin.es
// @description time wasted
// @version     1
// @grant none
// ==/UserScript==
window.addEventListener('load', function() {
  var x = document.getElementsByName("dbfield:3:__raw_custom__:__single__:log_work_time_spent");
  var y = document.getElementsByName("dbfield:3:__raw_custom__:__single__:duration");
  
  var script = document.createElement('script');
  
  script.innerHTML = 'var timeStamp = Math.floor(Date.now() / 1000);function wasted() { var nouu = Math.floor(Date.now() / 1000); document.getElementsByName("dbfield:3:__raw_custom__:__single__:log_work_time_spent")[0].value=Math.floor(((nouu-timeStamp)/60)+1)+"m"; setTimeout( "wasted ()", 60250 );} wasted();';

  x[0].appendChild(script);
  y[0].appendChild(script);

}, false);

