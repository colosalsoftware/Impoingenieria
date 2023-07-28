// Esperar a que se cargue el documento
$(document).ready(function () {
    // Manejar el evento de envío del formulario
    $('#contactForm').submit(function (event) {
        event.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada

        // Realizar la solicitud AJAX al servidor de Formspree
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function (data) {
                // Mostrar el mensaje de éxito y ocultar el formulario
                $('#contactForm').hide();
                $('#successMessage').show();
            },
            error: function (err) {
                // Manejar el error en caso de que la solicitud falle
                console.error('Error al enviar el formulario:', err);
                // Puedes mostrar un mensaje de error aquí si lo deseas
            }
        });
    });
});