'use strict'

$(document).ready(function(){
  console.log('Hello world!');

// Product header animation

  $('#familiar, #c-familiar').hover(function(){
    $('#c-familiar').css({
      'transform':'scale(2)'
    })
  },function(){
    $('#c-familiar').css({
      'transform':'scale(1)'
    })
  })

  $('#gourmet, #c-gourmet').hover(function(){
    $('#c-gourmet').css({
      'transform':'scale(2)'
    })
  },function(){
    $('#c-gourmet').css({
      'transform':'scale(1)'
    })
  })

  $('#premium, #c-premium').hover(function(){
    $('#c-premium').css({
      'transform':'scale(2)'
    })
  },function(){
    $('#c-premium').css({
      'transform':'scale(1)'
    })
  })

  $('#raviolini, #c-raviolini').hover(function(){
    $('#c-raviolini').css({
      'transform':'scale(2)'
    })
  },function(){
    $('#c-raviolini').css({
      'transform':'scale(1)'
    })
  })

  // Thumbnail replacement

  $('#thumb-2').hover(function(){
    $('#familiar-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-FAMILIAR_naranja.png')
  }, function(){
    $('#familiar-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-FAMILIAR_vistafrente.png')
  })

  $('#thumb-3').hover(function(){
    $('#familiar-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-FAMILIAR_verde.png')
  }, function(){
    $('#familiar-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-FAMILIAR_vistafrente.png')
  })

  // Scrolling from menu

  let historia = $('#historia');
  let historiaPosition = historia.position();
  let historiaPositionTop = historiaPosition.top;

  $('#menu-historia').click(function(){
    $(document).scrollTop(historiaPositionTop)
  })

});
