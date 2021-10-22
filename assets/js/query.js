$('a[href^="#"]').on('click',function() {
    if (window.matchMedia('(max-width: 1000px)').matches){
      let target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top-180
      }, 800,
    
      function () {
        window.location.hash = target;
      })
      
    }

    else{
      let target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top-70
      }, 800,

      function () {
        window.location.hash = target;
      })

    };
});