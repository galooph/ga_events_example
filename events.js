$(document).ready(function() {
  // Add the custom click handler for the Trigger Event button.
  $('#buttons button').button().click(function(event) {
    ga('send', 'event', 'button', 'click', 'Trigger Event button clicked');
  });
  
  // Set up the jQueryUI widgets.
  // First, the accordion - see http://api.jqueryui.com/1.8/accordion/#event-change
  $("#accordion").accordion({
    change: function(event, ui) {ga('send', 'event', 'accordion', 'click', ui.newContent.context.textContent + ' expanded')}
  });
  
  // Second, the tabs - see http://api.jqueryui.com/1.8/tabs/#event-select
  $("#tabs").tabs({
    select: function(event, ui) {ga('send', 'event', 'tab', 'click', ui.tab.innerText + ' selected')}
  });
});