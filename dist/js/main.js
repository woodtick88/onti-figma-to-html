$(function() {

    

	// hamburger icon

    $("#hamburger").click(function() {		

		$("#hamburger").toggleClass("hamburger-active");

		$('.main-header .header-nav .header-nav-mobile .overlay-mobile-menu').fadeToggle(100);
		
		
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



	// table sort on material page

	const getSort = ({ target }) => {
		const order = (target.dataset.order = -(target.dataset.order || -1));
		const index = [...target.parentNode.cells].indexOf(target);
		const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
		const comparator = (index, order) => (a, b) => order * collator.compare(
			a.children[index].innerHTML,
			b.children[index].innerHTML
		);
		
		for(const tBody of target.closest('table').tBodies)
			tBody.append(...[...tBody.rows].sort(comparator(index, order)));

		for(const cell of target.parentNode.cells)
			cell.classList.toggle('sorted', cell === target);
	};

	if ( $('thead .table-sort').length ){
		
		document.querySelectorAll('thead .table-sort').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

	};
	
	$('thead .table-sort').click(function() {
		$(this).toggleClass('table-sort-active');
	})


	// search input


	if ( $('.search-panel-wrapper-overlay').length ){
		
		$('.main-header .user-interface .search').click(function() {

			$('.search-panel-wrapper-overlay').show(300);

		});

		$('.search-panel-wrapper-overlay .search-panel-close').click(function() {

			$('.search-panel-wrapper-overlay').hide(200);

		});

	};

 


	













});
