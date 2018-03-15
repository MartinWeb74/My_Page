jQuery(document).ready(function($) {


    /* === Used in resume.html page to load the html progess bars ==== */    
    
    $('.level-bar-inner').css('width', '0');    
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {        
            var itemWidth = $(this).data('level');            
            $(this).animate({
                width: itemWidth
            }, 800);            
        });
    });
   
    /* === Used in index.html page ==== */
  
     //use delay to show the quotes with fade effect on an infinite loop
     function timer() {         
         $('.q1').fadeIn(4000).delay(8000).fadeOut(2000);
         $('.q2').delay(14000).fadeIn(4000).delay(8000).fadeOut(2000);
         $('.q3').delay(28000).fadeIn(4000).delay(8000).fadeOut(2000);
         $('.q4').delay(42000).fadeIn(4000).delay(8000).fadeOut(2000);
         $('.q5').delay(56000).fadeIn(4000).delay(8000).fadeOut(2000, timer); 
     }     
         $('.q1').fadeOut();
         $('.q2').fadeOut();
         $('.q3').fadeOut();
         $('.q4').fadeOut();
         $('.q5').fadeOut(timer);
   
     
  
    // Add smooth scrolling to all links
     $("a").on('click', function(event) {

     // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });

}); // end document.ready