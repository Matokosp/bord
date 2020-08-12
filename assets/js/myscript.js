// WINDOW VH

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// SCROLL WINDOW TO ID

$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
				event.preventDefault();
				$('html, body').stop().animate({
						scrollTop: target.offset().top
				}, 1000);
		}
});

// Menu Slide

	var menuHideShow = $('.menu').hasClass('menu_show');

	function desplazar (){
		$('.menu').toggleClass('menu_show');
    $('.hamburger_div').toggleClass('hamburger_div-slide');
		$('#hambIconOne').toggleClass('hamburger_icon_one');
		$('#hambIconTwo').toggleClass('hamburger_icon_two');
		$('#hambIconThree').toggleClass('hamburger_icon_three');
		// $('.menuicon').toggleClass('menuicon-black');
	}
	$('.hamburger_div').on('click', function(e){
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.menu').hasClass('menu_show');
		console.log(menuHideShow)
	})

	window.addEventListener('click', function(e){
		if (menuHideShow = true && e.target.className != 'menu menu_show') {
			$('.menu').removeClass('menu_show');
			$('.hamburger_div').removeClass('hamburger_div-slide');
			$('#hambIconOne').removeClass('hamburger_icon_one');
			$('#hambIconTwo').removeClass('hamburger_icon_two');
			$('#hambIconThree').removeClass('hamburger_icon_three');
		}
	})




  // RESPONSIVE

  var x = window.matchMedia("(min-width: 1000px)");
  //
	function myFunction(x) {
	  if (x.matches) { // If media query matches

        var sectionOne = $('#sectionOne').offset();
        var sectionOne = $('#sectionTwo').offset();
	  		var windowHeight = $( window ).height();
	  		var position = $(window).scrollTop();


  //       // MENU CHANGE
  //
        $(window).on('scroll', function(){
          if ($(window).scrollTop() >= sectionOne.top * 1 / 10) {
            $('.menu').css('background-color', '#fff');
            $('.hamburger_div').css('width', '180px');
            $('.hamburger_logo:nth-child(2)').css('opacity', '0');
            $('.hamburger_logo:nth-child(3)').css('opacity', '1');
          } else {
            $('.menu').css('background-color', 'transparent');
            $('.hamburger_div').css('width', '240px');
            $('.hamburger_logo:nth-child(2)').css('opacity', '1');
            $('.hamburger_logo:nth-child(3)').css('opacity', '0');
          }
        })

        $('#animationOnceLogo').on('mouseenter', function(){
          $(this).prop('src', 'none');
          $(this).prop('src', 'assets/images/animation.gif')
        });

        $('#cardAnimationOne').on('mouseenter', function(){
          $('#cardAnimationOne').prop('src', '');
          $(this).prop('src', 'assets/images/isotipo.gif');
        });

        // $('#cardAnimationTwo').on('mouseenter', function(){
        //   $('#cardAnimationTwo').prop('src', 'none');
        //   $('#cardAnimationTwo').prop('src', 'assets/images/isotipo.gif')
        // });
        //
        // $('#cardAnimationThree').on('mouseenter', function(){
        //   $('#cardAnimationThree').prop('src', 'none');
        //   $('#cardAnimationThree').prop('src', 'assets/images/isotipo.gif')
        // });

		}
	}

	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes
