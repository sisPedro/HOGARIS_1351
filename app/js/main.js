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

  // FORM COLLECT DATA

    $('#select-rrhh').click(function(){
      $('#input-contacto').html('R.R.H.H')
    })

    $('#select-ventas').click(function(){
      $('#input-contacto').html('Ventas')
    })

    $('#select-informes').click(function(){
      $('#input-contacto').html('Informes')
    })

    $('#select-internet').click(function(){
      $('#dropdown-conocio').html('Internet')
    })

    $('#select-viaPublica').click(function(){
      $('#dropdown-conocio').html('Vía Pública')
    })

    $('#select-recomendacionPersonal').click(function(){
      $('#dropdown-conocio').html('Recomendación Personal')
    })

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
      'mensaje': mensaje
      }

      $('#col-consulta').append( "<div class='alert alert-success alerta-consulta' role='alert'> <strong> ¡Gracias! </strong> Hemos recibido su mensaje. Nos estaremos contactando con usted a la brevedad. <div>");

      console.log(datos)
    }

    $('#submit-button').click(function(){
      collectData();
    })

});