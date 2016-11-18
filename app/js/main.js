'use strict';

$(document).ready(function () {
  console.log('Agencia creativa Agatiello - 2016');

  // Product header animation

  $('#familiar, #c-familiar').hover(function () {
    $('#c-familiar').css({
      'transform': 'scale(2)'
    });
  }, function () {
    $('#c-familiar').css({
      'transform': 'scale(1)'
    });
  });

  $('#gourmet, #c-gourmet').hover(function () {
    $('#c-gourmet').css({
      'transform': 'scale(2)'
    });
  }, function () {
    $('#c-gourmet').css({
      'transform': 'scale(1)'
    });
  });

  $('#premium, #c-premium').hover(function () {
    $('#c-premium').css({
      'transform': 'scale(2)'
    });
  }, function () {
    $('#c-premium').css({
      'transform': 'scale(1)'
    });
  });

  $('#raviolini, #c-raviolini').hover(function () {
    $('#c-raviolini').css({
      'transform': 'scale(2)'
    });
  }, function () {
    $('#c-raviolini').css({
      'transform': 'scale(1)'
    });
  });

  // Thumbnail replacement

  $('#thumb-1').hover(function () {
    $('#familiar-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-FAMILIAR_amarilla.png');
  }, function () {
    $('#familiar-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-FAMILIAR_vistafrente.png');
  });


  $('#thumb-2').hover(function () {
    $('#familiar-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-FAMILIAR_naranja.png');
  }, function () {
    $('#familiar-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-FAMILIAR_vistafrente.png');
  });

  $('#thumb-3').hover(function () {
    $('#familiar-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-FAMILIAR_verde.png');
  }, function () {
    $('#familiar-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-FAMILIAR_vistafrente.png');
  });

  $('#thumbG-1').hover(function () {
    $('#gourmet-pic').attr('src', 'src/images/160701_Hog_Pastahogar_GOURMET-verde.png');
  }, function () {
    $('#gourmet-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-GOURMET_dorada.png');
  });

  $('#thumbG-2').hover(function () {
    $('#gourmet-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-GOURMET_rosa.png');
  }, function () {
    $('#gourmet-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-GOURMET_dorada.png');
  });

  $('#thumbG-3').hover(function () {
    $('#gourmet-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-GOURMET_coral.png');
  }, function () {
    $('#gourmet-pic').attr('src', 'src/images/160701_Hog_Pastahogar_-GOURMET_dorada.png');
  });

  // Scrolling from menu

  var mq = window.innerWidth;

  $('.toHistoria').click(function(){
      var scroll = $('#historia').position();
      if (mq <= 480) {
        $('.toHistoria').attr("href","#historia")
      } else {
        $('html,body').animate({
            scrollTop: scroll.top - 100,
        }, 800, function(){
            $('html,body').clearQueue();
        });
      }
  })

  $('.toGourmet').click(function(){
      var scroll = $('.pastahogarGourmet').position();
      if (mq <= 480) {
        $('.toGourmet').attr("href","#pastahogarGourmet")
      } else {
        $('html,body').animate({
            scrollTop: scroll.top,
        }, 800, function(){
            $('html,body').clearQueue();
        });
      }
  })

  $('.toRaviolini').click(function(){
      var scroll = $('.accRaviolini').position();
      if (mq <= 480) {
        $('.toRaviolini').attr("href","#accRaviolini")
      } else {
        $('html,body').animate({
            scrollTop: scroll.top,
        }, 800, function(){
            $('html,body').clearQueue();
        });
      }
  })

    $('.toPremium').click(function(){
      var scroll = $('#pastahogarPremium').position();
      if (mq <= 480) {
        $('.toPremium').attr('href','#pastahogarPremium')
      } else {
        $('html,body').animate({
          scrollTop: scroll.top,
        }, 800, function(){
          $('html,body').clearQueue();
        })
      }
    })

    $('.toContacto').click(function(){
      var scroll = $('#contactoScroll').position();
      if (mq <= 480) {
        $('.toContacto').attr('href','#contactoScroll')
      } else {
        $('html,body').animate({
          scrollTop: scroll.top,
        }, 800, function(){
          $('html,body').clearQueue();
        })
      }
    })

    $('.toFamiliar').click(function(){
      var scroll = $('#familiarScroll').position();
      if (mq <= 480) {
        $('.toFamiliar').attr('href','#familiarScroll')
      } else {
        $('html,body').animate({
          scrollTop: scroll.top,
        }, 800, function(){
          $('html,body').clearQueue();
        })
      }
    })

    $('.toServTec').click(function(){
      var scroll = $('#serv-tec').position();
      if (mq <= 480) {
        $('.toServTec').attr('href','#serv-tec')
      } else {
        $('html,body').animate({
          scrollTop: scroll.top,
        }, 800, function(){
          $('html,body').clearQueue();
        })
      }
    })

    // FORM COLLECT DATA

  $('#select-ventas').click(function () {
    $('#input-contacto').html('Ventas');
  });

  $('#select-informes').click(function () {
    $('#input-contacto').html('Informes');
  });

  $('#select-internet').click(function () {
    $('#dropdown-conocio').html('Internet');
  });

  $('#select-viaPublica').click(function () {
    $('#dropdown-conocio').html('VÃ­a PÃºblica');
  });

  $('#select-recomendacionPersonal').click(function () {
    $('#dropdown-conocio').html('Recomendación Personal');
  });

  function collectData() {
    let nombre = $('#input-nombre').val();
    let email = $('#input-email').val();
    let telefono = $('#input-telefono').val();
    let direccion = $('#input-direccion').val();
    let pais = $('#input-pais').val();
    let provincia = $('#input-provincia').val();
    let ciudad = $('#input-ciudad').val();
    let comoNosConocio = $('#dropdown-conocio').html();
    let destinatario = $('#input-contacto').html();
    let mensaje = $('#input-consulta').val();

    if (nombre == "" || email == "" || telefono == "" || direccion == "" || pais == "" || provincia == "" || ciudad == "") {
      $('#col-consulta').append("<div class='alert alert-danger alerta-consulta' role='alert'> <strong> Revise los datos </strong> Usted no ha completado todos los datos requeridos. <div>");
    } else if ( destinatario =="Contacto<span class='glyphicon glyphicon-menu-down'></span>") {
        $('#col-consulta').append("<div class='alert alert-danger alerta-consulta' role='alert'> <strong> Revise los datos </strong> Olvidó dirigir su consulta a un contacto. <div>");
    } else {
      $('#col-consulta').append("<div class='alert alert-success alerta-consulta' role='alert'> <strong> ¡Gracias! </strong> Hemos recibido su mensaje. Nos estaremos contactando con usted a la brevedad. <div>");

        let datos = {
      'nombreYApellido': nombre,
      'email': email,
      'telefono': telefono,
      'direccion': direccion,
      'pais': pais,
      'provincia': provincia,
      'ciudad': ciudad,
      'comoNosConocio': comoNosConocio,
      'destinatario': destinatario,
      'mensaje': mensaje,
    };


    }
    console.log(datos);
  }

  $('#submit-button').click(function () {
    collectData();
  });

  $('#resp-menu').click(function(){
    $('#nav-bar').toggleClass('active');
  })

  $('#menu-productos').click(function(){
    $('#productos').toggleClass('active')
  })
});
