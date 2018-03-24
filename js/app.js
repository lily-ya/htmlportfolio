var main = function() {
  $('.filter').click(function() {
    $('.filter').removeClass("active");
    $(this).addClass("active");

  	// var selected = null;
  	var $selected = $(this).attr('data-filter')

  	var $category = $('#portfolio [data-category]');

  	$('.mix').addClass("hide");

  	if ($selected == 'all') {
  		$('.mix').removeClass('hide');
  	} else {
  		$category.filter('[data-category = "' + $selected + '"]')
          .removeClass('hide')
  	}
  });


    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};  

};

$(document).ready(main);

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: '.swiper-pagination',
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })   

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
         document.body.scrollTop = 0; // For Chrome, Safari and Opera 
         document.documentElement.scrollTop = 0; // For IE and Firefox
     }
