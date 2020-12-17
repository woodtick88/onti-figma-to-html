$(function() {

    

	// hamburger icon

    $("#hamburger").click(function() {		

		$("#hamburger").toggleClass("hamburger-active");

		$('.overlay-mobile-menu').fadeToggle(100);
		
		
	});

	// mobile menu overlay close


	$('.overlay-mobile-menu .mobile-menu-wrapper').on('click', function (e) {

        if (e.target !== this) {
			return
		}

		$('.overlay-mobile-menu').fadeOut(100);	
		$("#hamburger").removeClass("hamburger-active");	

	});
	


	// header nav -> inner nav

	$('.header-nav-link .action-button').click(function() {

		$(this).parents('.header-nav-link').toggleClass('active-menu');
		$(this).parents('.header-nav-link').children('.header-inner-nav').slideToggle(300);
	
	});

	// second mobile-menu(inner-nav)

	$('.mobile-menu .mobile-menu-list .mobile-menu-item.mobile-menu-inner-nav').click(function() {
			
		let innerNav = $('.mobile-menu .mobile-menu-list .mobile-menu-item.mobile-menu-inner-nav .inner-nav');
		let innerNavHeight = innerNav.innerHeight();
		let mobileMenuList = $('.mobile-menu .mobile-menu-list');
		let mobileMenuListHeight = mobileMenuList.innerHeight();	

		if ( mobileMenuListHeight >  innerNavHeight) {
			innerNav.css({'min-height' : mobileMenuListHeight});
		} else {
			mobileMenuList.css({'min-height' : innerNavHeight});
		}

		innerNav.css({'min-height' : mobileMenuListHeight});
		innerNav.fadeIn(300)

	});

	$('.mobile-menu-item.mobile-menu-inner-nav .inner-nav-item .back').click(function(e) {

		e.stopPropagation();

		let innerNav = $('.mobile-menu .mobile-menu-list .mobile-menu-item.mobile-menu-inner-nav .inner-nav');
		let innerNavHeight = innerNav.innerHeight();
		let mobileMenuList = $('.mobile-menu .mobile-menu-list');
		let mobileMenuListHeight = mobileMenuList.innerHeight();


		innerNav.fadeOut(300)

		innerNav.css({'min-height' : 'auto'});
		mobileMenuList.css({'min-height' : 'auto'});

	 });



	// select customization


	if ( $('.custom-select').length ){
		
		$('.custom-select').selectric({
			disableOnMobile: false,
			nativeOnMobile: false
		});
		
	};


	// clear select


	if ( $('.options .options-reset').length ) { 

		$('.options .options-reset').click(function() {

			$('.custom-select').prop('selectedIndex', 0).selectric('refresh').change();

		});

	};



	// table sort on material page

	// const getSort = ({ target }) => {
	// 	const order = (target.dataset.order = -(target.dataset.order || -1));
	// 	const index = [...target.parentNode.cells].indexOf(target);
	// 	const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
	// 	const comparator = (index, order) => (a, b) => order * collator.compare(
	// 		a.children[index].innerHTML,
	// 		b.children[index].innerHTML
	// 	);
		
	// 	for(const tBody of target.closest('table').tBodies)
	// 		tBody.append(...[...tBody.rows].sort(comparator(index, order)));

	// 	for(const cell of target.parentNode.cells)
	// 		cell.classList.toggle('sorted', cell === target);
	// };

	// if ( $('thead .table-sort').length ){
		
	// 	document.querySelectorAll('thead .table-sort').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

	// };
	
	$('thead .table-sort').click(function() {
		$(this).toggleClass('table-sort-active');
	})




	// search input


	if ( $('.search-panel-wrapper-overlay').length ) {
		
		$('.main-header .user-interface .search').click(function() {

			$('.search-panel-wrapper-overlay').show(300);

		});

		$('.search-panel-wrapper-overlay .search-panel-close').click(function() {

			$('.search-panel-wrapper-overlay').hide(200);

		});

	};



	// information-slider


	if ( $('.information .information-partners .slider-info').length ) {

		$('.information .information-partners .slider-info').slick({
			infinite: true,
			dots: false,
			slidesToShow: 4,
			responsive: [
				{
				  breakpoint: 980,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
					breakpoint: 767,
					settings: {
					  slidesToShow: 2,
					  arrows: false
					}
				  }
			]
		});

	};


	if ( $('.information .information-command .slider-info').length ) {

		$('.information .information-command .slider-info').slick({
			infinite: true,
			dots: false,
			slidesToShow: 2,
			responsive: [
				{
					breakpoint: 767,
					settings: {
					  slidesToShow: 1,
					  arrows: false
					}
				  }
			]
		});

	};


	// profile_2-image-slider

	if ( $('.profile-2 .profile-2-image-slider').length ) {

		let profileSlide = $('.profile-2 .profile-2-image-slider');

		profileSlide.on('init', function(event, slick){

			if ( slick.slideCount >= 10 ) {

				$(this).parents('.profile-2-image-slider-wrapper').children('.slider-namber').children('.last').html( slick.slideCount );

			} else {

				$(this).parents('.profile-2-image-slider-wrapper').children('.slider-namber').children('.last').html( '0' + slick.slideCount );

			}

		});
		
		profileSlide.slick({
			infinite: true,
			dots: false,
			slidesToShow: 1
		});

		profileSlide.on('afterChange', function(event, slick, currentSlide, nextSlide){

			if ( (currentSlide + 1) >= 10 ) {

				$(this).parents('.profile-2-image-slider-wrapper').children('.slider-namber').children('.current').html( currentSlide + 1 );

			} else {

				$(this).parents('.profile-2-image-slider-wrapper').children('.slider-namber').children('.current').html( '0' + (currentSlide + 1) );

			}	
			
		});

		
		

		$('.profile-2-image-slider-wrapper').each(function() {

			let totalSlider = $(this).children('.profile-2-image-slider').find('.slider-item').length;

			

		});




	};

	








	$(window).scroll(function(){

		// fixed slider arrow at text-section

		if ( $('.text-slider').length ) {			

			const scrollTop = $(this).scrollTop();
			const toTextSection = $(".text-slider").offset().top;
			const heightTextSection = $(".text-slider").innerHeight();			

			if ( scrollTop > toTextSection && scrollTop <= toTextSection + heightTextSection - 160)  {				

				if ( $(window).width() >= '768' ) {
					$(".text-slider .slick-arrow").css({"top" : scrollTop - 180});
				}

				if ( $(window).width() <= '767' ) {
					$(".text-slider .slick-arrow").css({"top" : scrollTop - 120});
				}
						
			} else {

				if ( $(window).width() >= '1200' ) {
					$(".text-slider .slick-arrow").css({"top" : 38});
				} else if ( $(window).width() >= '768' ) {
					$(".text-slider .slick-arrow").css({"top" : -65});
				} else if ( $(window).width() <= '767' ) {
					$(".text-slider .slick-arrow").css({"top" : -57});
				}

			}

		};
		
		

		// information-section left menu fixed

		if ( $('.information-wrapper .information-menu').length ) {

			const scrollTop = $(this).scrollTop();
			const hegihtToInformationMenu = $('.information-wrapper .information-menu').offset().top;
			const innerHeightInformationSection = $('.information-wrapper').innerHeight();
			const innerHeightInformationMenu = $('.information-wrapper .information-menu .information-menu-list').innerHeight();			

			if ( $(window).width() >= '1100' ) {

				if ( scrollTop > (hegihtToInformationMenu - 60) && scrollTop < (innerHeightInformationSection - innerHeightInformationMenu) ) {
					$(".information-wrapper .information-menu .information-menu-list").css({"top" : 60, 'position' : 'fixed'});
				} else {
					$(".information-wrapper .information-menu .information-menu-list").css({"top" : 'inherit', 'position' : 'inherit'});
				}
				
			}

		};

		// profile_2-section registration button fixed

		if ( $('.profile-2 .profile-video .profile-video-registration').length ) {

			const scrollTop = $(this).scrollTop();
			const offsetProfileVideo = $('.profile-2 .profile-video').offset().top;
			const innerHeightProfileVideo = $('.profile-2 .profile-video').innerHeight();
			const profileRegistration = $('.profile-2 .profile-video .profile-video-registration');

			if ( $(window).width() <= '1100' ) { 	

				if ( scrollTop > (offsetProfileVideo + innerHeightProfileVideo) ) {

					profileRegistration.addClass('fixed-registration');

				} else {

					profileRegistration.removeClass('fixed-registration');					

				}

			}

		}


		// about-olympiad-section left-menu fixed

		if ( $('.about-olympiad .gallery-tabs-buttons-wrapper').length ) {

			const scrollTop = $(this).scrollTop();
			const hegihtToOlympiadSection = $('.about-olympiad').offset().top;
			const innerHeightOlympiadSection = $('.about-olympiad').innerHeight();
			const innerHeightOlympiadnMenu = $('.about-olympiad .gallery-tabs-buttons-wrapper .gallery-tabs-buttons').innerHeight();	
			

			if ( $(window).width() > '1200' ) {

				if ( scrollTop > hegihtToOlympiadSection && scrollTop < (hegihtToOlympiadSection + innerHeightOlympiadSection - innerHeightOlympiadnMenu) ) {
					$(".about-olympiad .gallery-tabs-buttons-wrapper .gallery-tabs-buttons").css({"top" : 0, 'position' : 'fixed'});
				} else {
					$(".about-olympiad .gallery-tabs-buttons-wrapper .gallery-tabs-buttons").css({"top" : "inherit", 'position' : 'inherit'});
				}
				
			}

			if ( $(window).width() <= '1200' ) {

				if ( scrollTop > hegihtToOlympiadSection && scrollTop < (hegihtToOlympiadSection + innerHeightOlympiadSection - innerHeightOlympiadnMenu) ) {
					$(".about-olympiad .gallery-tabs-buttons-wrapper").css({"top" : 0, 'position' : 'fixed'});
				} else {
					$(".about-olympiad .gallery-tabs-buttons-wrapper").css({"top" : "inherit", 'position' : 'inherit'});
				}
				
			}

		};



		

	});




	// left menu in section information_1


	$(".information-menu .information-menu-list").on("click","a", function (event) {

        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
		
    });




	// area-section active inner menu in table

	if ( $('.area-wrapper').length ) {

		$('.area-wrapper .materials-table .open-list').click(function() {

			$('.area-wrapper .materials-table .open-list').removeClass('active-open-list');
			$('.area-wrapper .materials-table .profile-list').slideUp(100);


			if (  $(this).parents("td").children(".profile-list").is(':visible') ) {

				$(this).removeClass('active-open-list');

				$(this).parents("td").children(".profile-list").slideUp(300);

			} else {

				$(this).addClass('active-open-list');

				$(this).parents("td").children(".profile-list").slideDown(300);

			}
			

		});

	};


	// tabs on index page section - about-olympiad

	if ( $('.about-olympiad').length ) {

		$(".tab-item").not(":first").fadeOut();
		$(".gallery-tabs-buttons .tab").click(function() {
			$(".gallery-tabs-buttons .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab-item").fadeOut(200).eq($(this).index()).fadeIn()
		}).eq(0).addClass("active"); 

	};


	// index page scroll .whom-about-button to #id-section


	if ( $('.whom .whom-about-button').length ) { 

		$(".whom .whom-about-button").click(function (event) {

			event.preventDefault();
			let id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
			
		});	

	};


	// profile_1 section choose buttons


	if ( $('.profile .choose-profile').length ) {

		$('.profile .choose-profile .item .input-title').click(function() {

			$('.profile .choose-profile .item .input-title').removeClass('active-choose-button');

			$(this).addClass('active-choose-button');

		});

	 };


	

	
	

 


	













});
