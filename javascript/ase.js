(function($) {

	$(function(){
		$( '.menuhead h3' ).click(function(){
			$('#right .menu-subnav').slideToggle()
		});		
	});
	
	$(function(){
		$( '.moduletable-mobilenav h3' ).click(function(){
			$('.moduletable-mobilenav h3').css({'z-index': '999'});
			var docHeight = $(document).height();
			$("body").append("<div id='overlay'></div>");
			$('#mast .menu-mobile').slideToggle();
			$("#overlay").height(docHeight); 
		   	$('#overlay').toggleClass('show');
		});		
	});

	$(function(){
		$(window).on('resize', function() {
			if ($(window).width() > 1000) {
				$("#overlay").remove(".show");
				$(".menu-mobile").hide();
			}
		});
	});
	
	$(function(){
			$( '.moduletable-flexcontrols p a.next, .moduletable-flexcontrols p a.prev' ).click(function(event){
				var n = $(this).attr('href').substring(1);
				if (n == 'null') {
					return false;
				} else {
					$('.'+ n).addClass('showme').removeClass('hideme');
					$('.moduletable-flex:not(.'+ n +')').addClass('hideme').removeClass('showme');
					switch (n) {
						case "one" :
							$('.moduletable-flexcontrols p a.next').attr('href', '#two');
							$('.moduletable-flexcontrols p a.prev').attr('href','#null').addClass('disabled');
							break;
						case "two" :
							$('.moduletable-flexcontrols p a.next').attr('href', '#three').removeClass('disabled');
							$('.moduletable-flexcontrols p a.prev').attr('href','#one').removeClass('disabled');
							break;
						case "three" :
							$('.moduletable-flexcontrols p a.next').attr('href','#null').addClass('disabled');
							$('.moduletable-flexcontrols p a.prev').attr('href','#two');
							break;
						}
				}
			});		
	});
	
	$(function(){
		$( '.moduletable-homenews p.newscontrols a.next, .moduletable-homenews p.newscontrols a.prev' ).click(function(event){
			var n = $(this).attr('href').substring(1);
			if (n == 'newsnull') {
				return false;
			} else {
				$('.'+ n).addClass('showme').removeClass('hideme');
				$('.newsflash-homenews div:not(.'+ n +')').addClass('hideme').removeClass('showme');
				
				switch (n) {
					case "newsone" :
						$('.moduletable-homenews p a.next').attr('href', '#newstwo');
						$('.moduletable-homenews p a.prev').attr('href','#newsnull').addClass('disabled');
						break;
					case "newstwo" :
						$('.moduletable-homenews p a.next').attr('href', '#newsthree').removeClass('disabled');
						$('.moduletable-homenews p a.prev').attr('href','#newsone').removeClass('disabled');
						break;
					case "newsthree" :
						$('.moduletable-homenews p a.next').attr('href','#newsnull').addClass('disabled');
						$('.moduletable-homenews p a.prev').attr('href','#newstwo');
						break;
					}
			}
		});		
	});

	$(function(){
		$( '.moduletable-homenews2 p.newscontrols a.next, .moduletable-homenews2 p.newscontrols a.prev' ).click(function(event){
			var n = $(this).attr('href').substring(1);
			if (n == 'newsnull') {
				return false;
			} else {
				$('.'+ n).addClass('showme').removeClass('hideme');
				$('.newsflash-homenews2 div:not(.'+ n +')').addClass('hideme').removeClass('showme');
				switch (n) {
					case "newsone" :
						$('.moduletable-homenews2 p a.next').attr('href', '#newstwo').removeClass('disabled');
						$('.moduletable-homenews2 p a.prev').attr('href','#newsnull').addClass('disabled');
						break;
					case "newstwo" :
						$('.moduletable-homenews2 p a.next').attr('href', '#newsnull').addClass('disabled');
						$('.moduletable-homenews2 p a.prev').attr('href','#newsone').removeClass('disabled');
						break;
					}
			}
		});		
	});
	
	$(function(){
		$('.custom-aselogo, .custom-cselogo, .custom-utlogo').click(function(){
			window.location=$(this).find("a").attr("href");
			return false;
		});
	});
	
	$(function(){
		$('.moduletable-utilitynav ul li').click(function(){
			window.location=$(this).find("a").attr("href");
			return false;
		});
	});
	
	$(function() {
		$(".moduletable-mainnav > .menu > li.deeper").mouseenter(function(){
			var navclass = $(this).attr("class");
		  $(this).addClass("showme");
		}).mouseleave(function(){
			var navclass = $(this).attr("class");
		  $(this).removeClass("showme");
		});
	});
	
	$(function() {

		$(".switch a").click(function(e) { 

			var link = $(this).attr("href");
			
			$(link).slideToggle();
			$(this).toggleClass('active');
			
			e.preventDefault(); 

		});
	});
	
	$(function() {
		// Find all videos
		var $allVideos = $("iframe"),

    	// The element that is fluid width
    	$fluidEl = $("div.item-page, div.video, div.blog-undergrad, div.blog-news, div.item-pagealumprofiles, .item-page-undergrad, div.item-page-news, div.undergradprograms.undergradprograms");

		// Figure out and save aspect ratio for each video
		$allVideos.each(function() {
  			$(this)
    		.data('aspectRatio', this.height / this.width)

    		// and remove the hard coded width/height
    		.removeAttr('height')
    		.removeAttr('width');
		});

		// When the window is resized
		$(window).resize(function() {
  			var newWidth = $fluidEl.width();

  		// Resize all videos according to their own aspect ratio
	  		$allVideos.each(function() {
	    		var $el = $(this);
	    		$el
	      			.width(newWidth)
	      			.height(newWidth * $el.data('aspectRatio'));
			});

		// Kick off one resize to fix all videos on page load
		}).resize();
	});

	$(function(){
		$('a').each(function() {
		   var a = new RegExp('/' + window.location.host + '/');
		   var b = new RegExp('mailto:');
		   if(!a.test(this.href)) {
			   if(!b.test(this.href)) {
				   $(this).click(function(event) {
					   event.preventDefault();
					   event.stopPropagation();
					   window.open(this.href, '_blank');
				   });
			   }
			}
		});
	});

	
})(jQuery);