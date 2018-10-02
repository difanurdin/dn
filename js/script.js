// event pada saat link di klik
$('.page-scroll').on('click', function(){

// ambil isi href
var tujuan=$(this).attr('href');
// tangkap elemen ybs
var elemenTujuan =$(tujuan);

// pindahkan scroll
$('body').animate({
	scrollTop:elemenTujuan.offset().top-50
}, 1200,'swing');

e.preventDefault();


});


// parallax
 $(window).scroll(function){
 	var wScroll =$(this).scrollTop();

 	$('.jumbotron img').css({
     'transform' : 'translate(opx,'+wScroll/4 +'%)'
 	});

 });