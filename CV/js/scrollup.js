jQuery(function($) {
	//reset scroll
	$.scrollTo(0);
	$('.scrollup').click(function() {$.scrollTo($('body'), 1100); });
});
		
$(window).scroll(function() {
	if($(this).scrollTop()>200) $('.scrollup').fadeIn();
	else $('.scrollup').fadeOut();		
});