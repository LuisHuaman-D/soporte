    <footer>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const allLinks = document.querySelectorAll('a');
                function updateWhatsAppLinks() {
                    allLinks.forEach(link => {
                        const currentHref = link.getAttribute('href');
                
                        if (currentHref && currentHref.includes('whatsapp.com')) {
                            if (window.innerWidth > 700) {
                                const newHref = currentHref.replace('api.whatsapp.com', 'api.whatsapp.com');
                                link.setAttribute('href', newHref);
                            } else {
                                // Cambiar a api.whatsapp.com para móviles
                                const newHref = currentHref.replace('api.whatsapp.com', 'api.whatsapp.com');
                                link.setAttribute('href', newHref);
                            }
                        }
                    });
                }
                updateWhatsAppLinks();
            });


            document.addEventListener('DOMContentLoaded', function () {
                var originalTitle = "🙋‍♂️ Técnico de Computadoras A Domicilio";
                var intervalId;
                var phrases = [
                    "🙋‍♂️ ¡No te vayas! - Escríbenos...",
                    "🔧 ¿Necesitas ayuda con tu PC?",
                    "💻 ¡Hablemos ahora!"
                ];
                var phraseIndex = 0;

                // Función para hacer parpadear el título con múltiples frases
                function startBlinking() {
                    intervalId = setInterval(function () {
                        // Cambia el título con las frases del array
                        document.title = phrases[phraseIndex];
                        phraseIndex = (phraseIndex + 1) % phrases.length;  // Cambia de frase cíclicamente
                    }, 1500);  // Cambia cada 1 segundo (1000 ms)
                }

                // Función para detener el parpadeo y restaurar el título original
                function stopBlinking() {
                    clearInterval(intervalId);  // Detenemos el parpadeo
                    document.title = originalTitle;  // Restauramos el título original
                }

                // Escuchamos el cambio de visibilidad de la página
                document.addEventListener('visibilitychange', function () {
                    if (document.hidden) {
                        startBlinking();  // Comienza el parpadeo cuando la pestaña esté oculta
                    } else {
                        stopBlinking();  // Detiene el parpadeo cuando la pestaña esté visible
                    }
                });
            });
        </script>

        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <script src="code.js"></script>
       
    </footer>