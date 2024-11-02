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