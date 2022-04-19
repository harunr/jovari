
(function($){
	$(function(){



        
       $('.car-item-thumb').magnificPopup({
       	type: 'iframe',
       	mainClass: 'mfp-fade',
       	removalDelay: 160,
       	preloader: false,

       	fixedContentPos: true
       });


		$('#hamburger div').click(function (e) {
			 e.preventDefault();
            $('.nav-wrap').fadeToggle();
            $('body').toggleClass('navshown');
        })
		
		
		
        
    
    // End the solutin card carousel
    
     })

	

})(jQuery)

