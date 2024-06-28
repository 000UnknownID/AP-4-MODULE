let currentCount = 0;

document.addEventListener('animationiteration', function(event) {
    if (event.animationName === 'rotate_dryer_right') {
      currentCount++;
    
      if(currentCount == 1) {
        $(event.target).animate({
            opacity: 0,
        }, 6000, function() {
            $(event.target).remove();
            $(".index__clear").animate({
                opacity: 1,
            }, 1000);
        });
      }
    }
  }, false);