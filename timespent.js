// ==UserScript==
// @name        time spent
// @namespace   jprats@systemadmin.es
// @description time wasted
// @version     3
// @grant none
// ==/UserScript==
window.addEventListener('load', function() {
  var log_work     = document.getElementsByName("dbfield:3:__raw_custom__:__single__:log_work_time_spent");
  var duration     = document.getElementsByName("dbfield:3:__raw_custom__:__single__:duration");
  var ask_question = document.getElementsByName("dbfield:3:__raw_custom__:__single__:ask_question_time_spent");
  var redirect     = document.getElementsByName("dbfield:3:__raw_custom__:__single__:redirect_time_spent");
  var delegate     = document.getElementsByName("dbfield:3:__raw_custom__:__single__:delegate_time_spent");
  var completed    = document.getElementsByName("dbfield:3:__raw_custom__:__single__:complete_task_time_spent");
  var assign       = document.getElementsByName("dbfield:3:__raw_custom__:__single__:assign_time_spent");
  var hold         = document.getElementsByName("dbfield:3:__raw_custom__:__single__:on_hold_time_spent");

  var script_lw = document.createElement('script');
  script_lw.innerHTML = 'var timeStamp = Math.floor(Date.now() / 1000);function wasted() { var nouu = Math.floor(Date.now() / 1000); document.getElementsByName("dbfield:3:__raw_custom__:__single__:log_work_time_spent")[0].value=Math.floor(((nouu-timeStamp)/60)+1)+"m"; setTimeout( "wasted ()", 60250 );} wasted();';

  for (var i=0; i < log_work.length; i++)
  {
    log_work[i].appendChild(script_lw);
  }

  var script_dur = document.createElement('script');
  script_dur.innerHTML = 'var timeStamp_dur = Math.floor(Date.now() / 1000);function wasted_dur() { var nouu = Math.floor(Date.now() / 1000); document.getElementsByName("dbfield:3:__raw_custom__:__single__:duration")[0].value=Math.floor(((nouu-timeStamp)/60)+1)+"m"; setTimeout( "wasted_dur()", 60250 );} wasted_dur();';

  for (var i=0; i < duration.length; i++)
  {
    duration[i].appendChild(script_dur);
  }

  var script_ask_question = document.createElement('script');
  script_ask_question.innerHTML = 'var timeStamp_aq = Math.floor(Date.now() / 1000);function wasted_aq() { var nouu = Math.floor(Date.now() / 1000); document.getElementsByName("dbfield:3:__raw_custom__:__single__:ask_question_time_spent")[0].value=Math.floor(((nouu-timeStamp)/60)+1)+"m"; setTimeout( "wasted_aq()", 60250 );} wasted_aq();';

  for (var i=0; i < ask_question.length; i++)
  {
    ask_question[i].appendChild(script_ask_question);
  }

  var script_redirect = document.createElement('script');
  script_redirect.innerHTML = 'var timeStamp_rd = Math.floor(Date.now() / 1000);function wasted_rd() { var nouu = Math.floor(Date.now() / 1000); document.getElementsByName("dbfield:3:__raw_custom__:__single__:redirect_time_spent")[0].value=Math.floor(((nouu-timeStamp)/60)+1)+"m"; setTimeout( "wasted_rd()", 60250 );} wasted_rd();';

  for (var i=0; i < redirect.length; i++)
  {
    redirect[i].appendChild(script_redirect);
  }

  var script_dele = document.createElement('script');
  script_dele.innerHTML = 'var timeStamp_dele = Math.floor(Date.now() / 1000);function wasted_dele() { var nouu = Math.floor(Date.now() / 1000); document.getElementsByName("dbfield:3:__raw_custom__:__single__:delegate_time_spent")[0].value=Math.floor(((nouu-timeStamp)/60)+1)+"m"; setTimeout( "wasted_dele()", 60250 );} wasted_dele();';

  for (var i=0; i < delegate.length; i++)
  {
    delegate[i].appendChild(script_dele);
  }

  var script_com = document.createElement('script');
  script_com.innerHTML = 'var timeStamp_com = Math.floor(Date.now() / 1000);function wasted_com() { var nouu = Math.floor(Date.now() / 1000); document.getElementsByName("dbfield:3:__raw_custom__:__single__:complete_task_time_spent")[0].value=Math.floor(((nouu-timeStamp_com)/60)+1)+"m"; setTimeout( "wasted_com()", 60250 );} wasted_com();';

  for (var i=0; i < completed.length; i++)
  {
    completed[i].appendChild(script_com);
  }

  var script_as = document.createElement('script');
  script_as.innerHTML = 'var timeStamp_as = Math.floor(Date.now() / 1000);function wasted_as() { var nouu = Math.floor(Date.now() / 1000); document.getElementsByName("dbfield:3:__raw_custom__:__single__:assign_time_spent")[0].value=Math.floor(((nouu-timeStamp_as)/60)+1)+"m"; setTimeout( "wasted_as()", 60250 );} wasted_as();';

  for (var i=0; i < assign.length; i++)
  {
    assign[i].appendChild(script_as);
  }

  var script_hold = document.createElement('script');
  script_hold.innerHTML = 'var timeStamp_hold = Math.floor(Date.now() / 1000);function wasted_hold() { var nouu = Math.floor(Date.now() / 1000); document.getElementsByName("dbfield:3:__raw_custom__:__single__:on_hold_time_spent")[0].value=Math.floor(((nouu-timeStamp_hold)/60)+1)+"m"; setTimeout( "wasted_hold()", 60250 );} wasted_hold();';

  for (var i=0; i < hold.length; i++)
  {
    hold[i].appendChild(script_hold);
  }

  //log_work[0].appendChild(script);

}, false);
