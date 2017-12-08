// Smooth scroll for links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});



$( document ).ready(function() {
  $('#tade-register-btn').click(function(){
    var nameInp = $('#tade-name-input').val()
    var emailInp = $('#tade-email-input').val()

    var domainDev  = 'plandy-91a56.firebaseapp.com'
    var domainProd = 'aplano.de'
    var domain = domainDev

    createCookie(nameInp+'_|_'+emailInp, domain)
    window.location.href(domain + '/register')
  })
});


function createCookie(cookieValie, domain) {
  var expires;

  var date = new Date();
  date.setTime(date.getTime() + (60 * 1000)); // saving just for one min
  expires = date.toGMTString();


  var cookieStr =  `regdata=${cookieValie}; expires=${expires}; path=/; domain=${domain}`
  console.log('setting cookie: ' + cookieStr);
  document.cookie = cookieStr
};
