
//  Mobile menu
 $(".hamburger").click(function () {
 $(".header nav").toggleClass('open');
 });

// FAQ
$(".question").click(function () {
    var answer=$(this).find(".answer");
$(".answer").not(answer).slideUp();
    answer.slideToggle();
$(this).toggleClass("open");
});

// Sub-menu

var  windowWidth = $(window).width();

// Create a reusable function to wrap the if conditions
function setNavActions() {
    // Put this outside the if condition as it applies to both outcomes
    $('.sub-menu').hide();

    if (windowWidth >= 991){
        // Create the required hover event
        $('#our-products').hover(function(){
          $('.sub-menu').slideToggle();
        });
    }
    else if (windowWidth < 991) {
        // Create the required click event
        $('#our-products').click(function(){
          $('.sub-menu').slideToggle();
        });
    }
}

// Then on page load we call the function the first time
setNavActions();

// Now we add the resize listener, it will update the windowWidth and detach the events created (click and hover) 
// so they can be re attached based on whats needed.
$(window).on('resize', function(){
  windowWidth = $(window).width();
  // Detatch the events so they wont happen if not needed
  $('#our-products').unbind("mouseenter mouseleave click");
  // Call the function again which will re-reate the required event
  setNavActions();
});

// Slider - reviews

var myOptions = {
  autoplay:true,
  dots:true,
  prevArrow: '<i class="fa fa-chevron-left slick-prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-right slick-next" aria-hidden="true"></i>',
}
$('.mySlider').slick(myOptions);


$('.history-slider').slick({
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<i class="fa fa-chevron-left slick-prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-right slick-next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

