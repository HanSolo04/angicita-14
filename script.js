// Esperamos a que todo el contenido HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURACIÓN ---
    // ¡IMPORTANTE! Reemplaza esta URL por la canción de YouTube que elegiste.
    const YOUTUBE_URL = "https://youtu.be/wvogJ3XeNnw?si=AFpNwF6nhCvJaegb"; 
    
    // --- Referencias a los elementos del DOM ---
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const mainQuestionHeading = document.getElementById('main-question');
    const buttonsContainer = document.querySelector('.buttons-container');

    // --- FUNCIÓN: Mover el botón "NO" ---
    function moverBotonNo() {
        // 1. Obtener las dimensiones de la ventana visible (viewport)
        const anchoVentana = window.innerWidth;
        const altoVentana = window.innerHeight;

        // 2. Obtener las dimensiones actuales del botón "NO"
        // Usamos offsetWidth/Height que incluye padding y bordes
        const anchoBoton = noBtn.offsetWidth;
        const altoBoton = noBtn.offsetHeight;

        // 3. Calcular los límites máximos para que el botón no se salga de la pantalla
        // Restamos el ancho del botón para asegurar que siempre quede dentro
        const maximoX = anchoVentana - anchoBoton - 20; // 20px de margen de seguridad
        const maximoY = altoVentana - altoBoton - 20;

        
        // 4. Generar posiciones aleatorias dentro de esos límites
        // Math.random() da un número entre 0 y 1. Lo multiplicamos por el máximo.
        const nuevaPosX = Math.random() * maximoX;
        const nuevaPosY = Math.random() * maximoY;

        noBtn.style.position = 'fixed';

        // 5. Aplicar las nuevas coordenadas
        // Es importante añadir 'px' al final. Asegúrate que en CSS el botón tenga position: fixed o absolute.
        noBtn.style.left = nuevaPosX + 'px';
        noBtn.style.top = nuevaPosY + 'px';
    }

    // --- EVENTOS DEL BOTÓN "NO" (El huidizo) ---
    // 'mouseover': Para cuando usan mouse (PC/Laptop)
    noBtn.addEventListener('mouseover', moverBotonNo);
    
    // 'touchstart': Para pantallas táctiles (Móvil/Tablet)
    // Usamos preventDefault para evitar comportamientos extraños de zoom en algunos móviles
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); 
        moverBotonNo();
    });


    // --- EVENTOS DEL BOTÓN "SÍ" (El éxito) ---
    yesBtn.addEventListener('click', () => {
        // 1. Cambiar el texto principal
        mainQuestionHeading.textContent = "¡Gracias, Love u Angilux! (Disfruta...)";
        
        // 2. Opcional: Ocultar los botones para que se vea más limpio
        buttonsContainer.style.display = 'none';

        // 3. Redirigir a YouTube después de una pequeña pausa dramática
        // setTimeout espera 2000 milisegundos (2 segundos) antes de ejecutar la redirección
        setTimeout(() => {
            window.location.href = YOUTUBE_URL;
        }, 2000);
    });

});