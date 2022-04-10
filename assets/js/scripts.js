// JavaScript

/* Muestra el Tooltip en los botones "Enviar por correo" y "Añadir a favoritos" */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// jQuery

/* Función para mostrar pop-up al apretar "Eniar por correo" */
$(document).ready(function () {
    $('#enviarCorreo').click(function (){
        alert("El correo fue enviado correctamente...");
    });


/* Función para convertir títulos de "Ingredientes" y "Preparación" a color rojo */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        })

    $('b').on("dblclick",function (){
        $(this).css('color', 'red');
    });


    /* Función para mostrar y ocultar info. en tarjeta */
    $("#panqueques").click(function(){
        $('#receta1').toggle(1000,function() {
        });
    });
    $("#tiramisu").click(function(){
        $('#receta2').toggle(1000,function() {
        });
    });
    $("#plateada").click(function(){
        $('#receta3').toggle(1000,function() {
        });
    });
});