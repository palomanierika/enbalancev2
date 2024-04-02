document.addEventListener('DOMContentLoaded', function() {
    // Función para actualizar la barra de progreso y el porcentaje
    function actualizarProgreso(montoRecaudado, meta) {
        // Calcular el porcentaje recaudado
        var porcentaje = (montoRecaudado / meta) * 100;

        // Obtener el elemento de la barra de progreso y la imagen
        var progressBar = document.getElementById('progress');
        var img = document.getElementById('eb3');

        // Actualizar el ancho de la barra de progreso
        if(progressBar) {
            progressBar.style.width = porcentaje + '%';

            // Actualizar la posición horizontal de la imagen
            if (img) {
                var nuevaPosicion = (porcentaje / 100) * (progressBar.offsetWidth - img.offsetWidth);
                img.style.left = nuevaPosicion + 'px';
            }

            // Actualizar el porcentaje mostrado
            document.getElementById('porcentaje').textContent = porcentaje.toFixed(2) + '%';
        } else {
            console.error("No se encontró el elemento con ID 'progress'.");
        }
    }

    // Variables para almacenar el monto recaudado y la meta
    var montoRecaudado = 9000;
    var meta = 25000; // Esta es la meta total

    // Llama a la función actualizarProgreso con el monto recaudado y la meta
    actualizarProgreso(montoRecaudado, meta);
});



document.addEventListener('DOMContentLoaded', function() {
    var openFormBtn = document.getElementById('openFormBtn');
    var modal = document.getElementById('modal');
    var closeButton = document.getElementsByClassName('close')[0];
    var contribucionForm = document.getElementById('contribucionForm');
    var body = document.body;

    openFormBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        body.classList.add('no-scroll'); // Agregar la clase para deshabilitar el desplazamiento
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        body.classList.remove('no-scroll'); // Quitar la clase para habilitar el desplazamiento
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            body.classList.remove('no-scroll'); // Quitar la clase para habilitar el desplazamiento si se hace clic fuera del modal
        }
    });

    contribucionForm.addEventListener('submit', function(event) {
        var comprobante = document.getElementById('comprobante');

    });
    
    // Ocultar el formulario al cargar la página
    modal.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', function() {
    var emailBtn = document.getElementById('emailBtn');

    emailBtn.addEventListener('click', function() {
        var subject = "Duda sobre En Balance";
        var body = "Hola,%0D%0A%0D%0ATengo una duda sobre En Balance:%0D%0A%0D%0A";
        var mailtoUrl = 'mailto:elcricoenbalance@gmail.com?subject=' + subject + '&body=' + body;
        window.location.href = mailtoUrl;
    });
});