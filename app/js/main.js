'use strict';

$(document).ready(function () {
  console.log('Agatiello - 2016');

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

  // Scrolling from menu

  var historia = $('#historia');
  var historiaPosition = historia.position();
  var historiaPositionTop = historiaPosition.top;

  $('#menu-historia').click(function () {
    $(document).scrollTop(historiaPositionTop);
  });

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
    var nombre = $('#input-nombre').val();
    var email = $('#input-email').val();
    var telefono = $('#input-telefono').val();
    var direccion = $('#input-direccion').val();
    var pais = $('#input-pais').val();
    var provincia = $('#input-provincia').val();
    var ciudad = $('#input-ciudad').val();
    var comoNosConocio = $('#dropdown-conocio').html();
    var destinatario = $('#input-contacto').html();
    var mensaje = $('#input-consulta').val();

    if (nombre == "" || email == "" || telefono == "" || direccion == "" || pais == "" || provincia == "" || ciudad == "") {
      $('#col-consulta').append("<div class='alert alert-danger alerta-consulta' role='alert'> <strong> Revise los datos </strong> Usted no ha completado todos los datos requeridos. <div>");
    } else if ( destinatario =="Contacto<span class='glyphicon glyphicon-menu-down'></span>") {
        $('#col-consulta').append("<div class='alert alert-danger alerta-consulta' role='alert'> <strong> Revise los datos </strong> Olvidó dirigir su consulta a un contacto. <div>");
    } else {
      $('#col-consulta').append("<div class='alert alert-success alerta-consulta' role='alert'> <strong> ¡Gracias! </strong> Hemos recibido su mensaje. Nos estaremos contactando con usted a la brevedad. <div>");

        var datos = {
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
