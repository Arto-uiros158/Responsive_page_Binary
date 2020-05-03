jQuery(document).ready(function($) {
	// IMAGE-BACKGROUND (IBG)
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();

	//FILTER
	$('.filter__item').click(function(event) {
		var i = $(this).data('filter');
		if (i == 1) {
			$('.portfolio__column').show();
		} else {
			$('.portfolio__column').hide();
			$('.portfolio__column.filter_' + i).show();
		}

		$('.filter__item').removeClass('active');
		$(this).addClass('active');			
	});
	
	//GO-TO
	$('.go-to').click(function() {
			var target = $(this).attr('href').replace('#','');
		$('body, html').animate(
			{
				scrollTop: $('.' + target).offset().top
			},
			500
		);
	});

});