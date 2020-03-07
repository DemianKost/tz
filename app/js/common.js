$(function() {

	// Custom JS
	$('.team-item').hover( function() {
		$(this).children( '.team-social' ).toggle('normal').css('display', 'flex', 'justify-content', 'center');
	});

});
