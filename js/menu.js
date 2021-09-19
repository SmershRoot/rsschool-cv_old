$(document).ready(function() {
	$('.burger-menu').click(function(){
        $('.burger-menu').toggleClass('open-menu');
        $('.navigator').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
    $('.nav_item').click(function(){
        $('.burger-menu').toggleClass('open-menu');
        $('.navigator').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});