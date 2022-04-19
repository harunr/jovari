
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
        });
		
        
        $("#video").on("ended", function () {
            $("body").addClass("playShow");
        });
        
        $(".play-btn figure").on("click", function () {
            $("#video")[0].play(); 
            $("body").removeClass("playShow");
        });
		
		
        
    
    // End the solutin card carousel
    
     })

	

})(jQuery)

