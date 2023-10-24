// event link pada saat di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap element
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html').animate({            
      scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'swing');

	e.preventDefault();
	
});


// Parallax

// About
$(window).on('load', function() {
	$('.pKiri').addClass('pTampil');
	$('.pKanan').addClass('pTampil');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+wScroll/4+'%)'

	});
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+wScroll/8+'%)'

	});
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+wScroll/100+'%)'

	});


	// Portfolio
	if (wScroll > $(' .portfolio').offset().top - 250) {
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('tampil');
			}, 300 * (i+1));
		});
		//
	}

});