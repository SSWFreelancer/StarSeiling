document.addEventListener('DOMContentLoaded', function(event) {	
	function handleScroll() {
		var header = document.querySelector('.header');
		var scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll > 1) {
      header.classList.add('show');
    } else {
      header.classList.remove('show');
    }
	}
	handleScroll();
	window.addEventListener('scroll', handleScroll);

	var faqTop = document.querySelectorAll('.faq__top');
	if(faqTop){
		faqTop.forEach(function(faqTop) {
		    faqTop.addEventListener('click', function(event) {
		    		event.preventDefault();
		    		faqTop.parentNode.classList.toggle('active');
		    		faqTop.classList.toggle('active');
		        slideToggle(faqTop.nextElementSibling);
		    });
		});
	}
	function slideToggle(element) {
	  var target = element.style;
	  if (target.maxHeight) {
	    target.maxHeight = null;
	    element.classList.remove('active');
	  } else {
	    target.maxHeight = element.scrollHeight + 'px';
	    element.classList.add('active');
	  }
	}
	var body = document.querySelector('body');
	var dataPopup = document.querySelectorAll('[data-topopup]');
	if(dataPopup){
		dataPopup.forEach(function(dataPopup){
			dataPopup.addEventListener('click', function(event){
				event.preventDefault();
				var dataContent = document.querySelector(this.getAttribute('data-topopup'));
				if(dataContent){
					dataContent.classList.add('open');
					body.classList.add('lockPopup');
				}
			})
		});
	}
	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose){
			popupClose.addEventListener('click', function(event){
				popupClose.closest('.popup').classList.remove('open');
				body.classList.remove('lockPopup');
			})
		});
	}
   if(document.querySelector('[data-fancybox]')){
		 	Fancybox.bind("[data-fancybox]", {
			  Images: {
			  	zoom:false,
			  	zoomOpacity:false,
			  },
			  Thumbs: {
			    type: "classic",
			  },
		 	});
   }
});
