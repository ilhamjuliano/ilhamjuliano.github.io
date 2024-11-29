// event klik link
$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap elemen
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('html').animate({            

      scrollTop: elemenTujuan.offset().top - 50

	}, 1300, 'easeInOutExpo');

	e.preventDefault();

});


// Parallax

// about
$(window).on('load', function() {
	$('.pKiri').addClass('pTampil');
	$('.pKanan').addClass('pTampil');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+wScroll/4+'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+wScroll/2+'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+wScroll/1.5+'%)'
	});

	// porfolio
	if(wScroll > $('.portfolio').offset().top - 250) {
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('tampil')
			}, 300 * (i+1));
			

		})
		
	}


});