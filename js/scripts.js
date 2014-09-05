// INITIALIZE AND TOGGLE BOARD

$(function() {
  $("#board").sortable({
			disabled: true,
			appendTo: 'body',
	    forcePlaceholderSize: true,
	    opacity: 0.5,
	    revert: true
	});
  $("#board").disableSelection();
  $("#toggle-board").click(function() {
  	if($(this).hasClass("enabled")){
  		$("#board").sortable("disable");
  		$(this).removeClass("enabled");
      $(this).children("span.icon-note.lock").hide();
      $(this).children("span.icon-note.unlock").show();
  		$(this).children("span.fa").removeClass("fa-unlock-alt").addClass("fa-lock");
  	} else{
  		$("#board").sortable("enable");
  		$(this).addClass("enabled");
      $(this).children("span.icon-note.lock").show();
  		$(this).children("span.icon-note.unlock").hide();
  		$(this).children("span.fa").removeClass("fa-lock").addClass("fa-unlock-alt");
  	}
	});
});