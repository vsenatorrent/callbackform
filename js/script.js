var tel = $('.btnBorderSq');

tel.css({'position':'absolute','top':'-100px','right':'50px','transition': "top 0.9s cubic-bezier(.65, 1.95, .03, .32) 0.5s"});

$(window).scroll(function(){
  var coordBottom = $(document).outerHeight(true);
  var posBtnBottom = coordBottom - tel.height()-40;
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled > 600) {
    tel.css({'position': 'absolute', 'top': posBtnBottom})
  }
})



