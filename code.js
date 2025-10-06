var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: false
  },
autoplay: {
 delay: 6000,
 /*disableOnInteraction: true*/
  pauseOnMouseEnter: true
},

 /*pagination: {
 el: ".swiper-pagination",
 clickable: true
},*/
navigation: {
 nextEl: ".swiper-button-next",
 prevEl: ".swiper-button-prev"
},
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 3,
      spaceBetween: 30, 
    }
  }
  
});


  // Swiper para marcas
const swiperMarcas = new Swiper(".mySwiperMarcas", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
   speed: 3000,                   // cuanto mayor, más lento
  autoplay: {
    delay:100,                    // sin pausas

  },
  breakpoints: {
    400: { slidesPerView: 4 },
    640: { slidesPerView: 6 },
    1024: { slidesPerView: 7 }
  }
});



document.addEventListener("DOMContentLoaded", function() {
    const rucInput = document.getElementById("rucInput");
    const contactarAsesorBtn = document.querySelector(".contactarases");

    const rucPattern = /^(10|20)\d{9}$/;

    rucInput.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, "");
        if (this.value.length > 11) {
            this.value = this.value.slice(0, 11);
        }

        if (rucPattern.test(this.value)) {
            contactarAsesorBtn.classList.remove("disabled");
        } else {
            contactarAsesorBtn.classList.add("disabled");
        }
    });

    contactarAsesorBtn.addEventListener("click", function(event) {
        if (this.classList.contains("disabled")) {
            event.preventDefault();
            return; 
        }

        const rucValue = rucInput.value;
        const numeroTelefono = "51972186481";

        let mensajeRUC = `RUC: ${rucValue}`;
        let mensajeServicios = `¡Hola! deseo cotizar sus servicios de:`;

        const whatsappLink = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensajeRUC)}%0A${encodeURIComponent(mensajeServicios)}`;

        window.open(whatsappLink, "_blank");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("whatsapp-btn");
    const sound = document.getElementById("notif-sound");
    let alreadyShown = false;
    let audioUnlocked = false;

    // Desbloquea el audio con el primer clic
    document.addEventListener("click", () => {
        if (!audioUnlocked) {
            sound.play().then(() => {
                sound.pause();     // lo pausamos inmediatamente
                sound.currentTime = 0;
                audioUnlocked = true; // ya está listo para sonar en scroll
               // console.log("🔓 Audio desbloqueado");
            }).catch(() => {});
        }
    });

 function showBtnWithSound() {
        if (alreadyShown) return;

        btn.classList.add("show-bounce");

        if (audioUnlocked) {
            sound.currentTime = 0;
            sound.play().catch(() => {});
        }

        // Rebote sutil cada 10s
        setInterval(() => {
            btn.classList.remove("rebounce");
            void btn.offsetWidth;
            btn.classList.add("rebounce");
        }, 10000);

        alreadyShown = true;
        window.removeEventListener("scroll", checkScroll);
        document.removeEventListener("click", showBtnWithSound);
    }


    function checkScroll() {
        if (window.scrollY > 200) {
            showBtnWithSound();
        }
    }

    window.addEventListener("scroll", checkScroll);
});


/*
barra de atención inicio
*/

function getLocalTimeByZone(timeZone) {
  const options = { timeZone, hour: '2-digit', minute: '2-digit', hour12: false };
  const formatter = new Intl.DateTimeFormat([], options);
  const parts = formatter.formatToParts(new Date());
  const hour = parseInt(parts.find(p => p.type === 'hour').value);
  return hour;
}

// ✅ Actualizar la barra según hora de Lima
function updateAvailability() {
  const hour = getLocalTimeByZone('America/Lima');
  let percentage = 0;
  let message = '';

  if (hour >= 8 && hour < 10) {
    percentage = 100;
  } else if (hour >= 10 && hour < 11) {
    percentage = 95;
  } else if (hour >= 11 && hour < 12) {
    percentage = 80;
  } else if (hour >= 12 && hour < 13) {
    percentage = 60;
  } else if (hour >= 13 && hour < 14) {
    percentage = 49;
  } else if (hour >= 14 && hour < 15) {
    percentage = 19;
    message = 'Agenda para mañana, te atendemos antes del mediodía previa coordinación.';
  } else if (hour >= 15 && hour < 16) {
    percentage = 10;
    message = 'Agenda para mañana, te atendemos antes del mediodía previa coordinación.';
  } else {
    percentage = 0;
    message = 'Agenda para mañana, te atendemos antes del mediodía previa coordinación.';
  }

  const progressEl = document.getElementById('progress');
  const textEl = document.getElementById('progress-text');
  const messageEl = document.getElementById('message');

  // Actualizar barra y texto
  progressEl.style.width = percentage + '%';
  textEl.textContent = percentage + '%';
  messageEl.textContent = message;

  // Agregar efecto visual cuando está al 100%
  if (percentage === 100) {
    progressEl.classList.add('pulse');
  } else {
    progressEl.classList.remove('pulse');
  }
}

// ✅ Ejecutar al cargar
updateAvailability();

// 🔄 Actualizar automáticamente cada hora
setInterval(updateAvailability, 60 * 60 * 1000); // cada 1 hora
/*
barra de atención fin
*/

//Interacción de clientes
 /*
 const usuarios = [
    "Juan", "Pedro", "Luis", "María", "Ana", "Carlos", "Laura", "Diego", "Carmen", "Sofía",
    "Manuel", "Lucía", "José", "Elena", "Andrés", "Valentina", "Raúl", "Paola", "Felipe", "Isabel"
  ];

  let lastMensaje = "";
  let iniciado = false;

  function obtenerDiaRelativo(diasDesdeHoy) {
    const hoy = new Date();
    const objetivo = new Date();
    objetivo.setDate(hoy.getDate() + diasDesdeHoy);

    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const objetivoDia = objetivo.getDay();

    if (diasDesdeHoy === 0) return "hoy";
    if (diasDesdeHoy === 1) return "mañana";
    return `el ${diasSemana[objetivoDia]}`;
  }

  function generarMensaje() {
    let mensaje = "";
    let intentos = 0;

    do {
      const nombre = usuarios[Math.floor(Math.random() * usuarios.length)];
      const dias = Math.floor(Math.random() * 5);
      const cuando = obtenerDiaRelativo(dias);
      mensaje = `${nombre} agendó una visita para ${cuando}`;
      intentos++;
    } while (mensaje === lastMensaje && intentos < 10);

    lastMensaje = mensaje;
    return mensaje;
  }

  function mostrarToast(mensaje) {
    const toast = document.getElementById("toast");
    toast.textContent = mensaje;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 5500);
  }

  function cicloToasts() {
    const mensaje = generarMensaje();
    mostrarToast(mensaje);

    const siguienteEn = Math.floor(Math.random() * 8000) + 40000;
    setTimeout(cicloToasts, siguienteEn);
  }

  // Inicia con scroll + retardo de 3 segundos
  window.addEventListener("scroll", () => {
    if (!iniciado) {
      iniciado = true;

      setTimeout(() => {
        cicloToasts();
      }, 3000);
    }
  }, { once: true });
  */

/*
  const usuarios = [
    "Juan", "Pedro", "Luis", "María", "Ana", "Carlos", "Laura", "Diego", "Carmen", "Sofía",
    "Manuel", "Lucía", "José", "Elena", "Andrés", "Valentina", "Raúl", "Paola", "Felipe", "Isabel"
];

let ultimoMensaje = "";
let iniciado = false;
let usuariosViendo = 2;
let mensajeHoyMostrado = false; // Nueva variable de control

// Generadores de mensajes
const generarMensajeHoy = () => {
    const nombre = usuarios[Math.floor(Math.random() * usuarios.length)];
    return `${nombre} agendó una visita para hoy.`;
};

const generarMensajeOtroDia = () => {
    const nombre = usuarios[Math.floor(Math.random() * usuarios.length)];
    const diaActual = obtenerDiaSemana(0);
    let dias;
    let cuando;
    do {
        dias = Math.floor(Math.random() * 6) + 1; // de 1 a 6 días
        cuando = obtenerDiaSemana(dias);
    } while (cuando.includes(diaActual));
    return `${nombre} agendó una visita para ${cuando}.`;
};

const generarMensajeVisualizacion = () => {
    const cambio = Math.random() < 0.5 ? -1 : 1;
    usuariosViendo = Math.max(1, Math.min(5, usuariosViendo + cambio));
    return `${usuariosViendo} usuarios están viendo el sitio web ahora mismo.`;
};

// Función para obtener el nombre del día
function obtenerDiaSemana(diasDesdeHoy) {
    const hoy = new Date();
    const objetivo = new Date();
    objetivo.setDate(hoy.getDate() + diasDesdeHoy);
    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const nombreDia = diasSemana[objetivo.getDay()];
    if (diasDesdeHoy === 0) return "hoy";
    if (diasDesdeHoy === 1) return "mañana";
    return `el ${nombreDia}`;
}

// Función principal para generar el mensaje
function generarMensaje() {
    const ahora = new Date();
    const hora = ahora.getHours() + ahora.getMinutes() / 60;

    let mensajesDisponibles = [];

    // Lógica para añadir los generadores de mensajes a la lista
    // Solo añadimos el mensaje "hoy" si el horario lo permite Y no se ha mostrado
    if (hora >= 8.5 && hora < 12 && !mensajeHoyMostrado) {
        mensajesDisponibles.push(generarMensajeHoy);
    }

    // El mensaje de "otro día" se añade si el horario lo permite (8:30 a 23:00)
    if (hora >= 8.5 && hora < 20) {
        mensajesDisponibles.push(generarMensajeOtroDia);
    }
    
    // El mensaje de visualización siempre está disponible
    mensajesDisponibles.push(generarMensajeVisualizacion);

    let mensajeFinal = "";
    let intentos = 0;

    do {
        // Elegimos un generador al azar de la lista
        const generador = mensajesDisponibles[Math.floor(Math.random() * mensajesDisponibles.length)];
        mensajeFinal = generador();
        intentos++;
        
        // Si el generador elegido es el de "hoy", activamos el interruptor
        if (generador === generarMensajeHoy) {
            mensajeHoyMostrado = true;
        }
    } while (mensajeFinal === ultimoMensaje && intentos < 10);

    ultimoMensaje = mensajeFinal;
    return mensajeFinal;
}

function mostrarToast(mensaje) {
    const toast = document.getElementById("toast");
    toast.textContent = mensaje;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 5500);
}

function cicloToasts() {
    const mensaje = generarMensaje();
    mostrarToast(mensaje);

    const siguienteEn = Math.floor(Math.random() * 20000) + 35000;
    setTimeout(cicloToasts, siguienteEn);
}

// Inicia con scroll + retardo de 3 segundos
window.addEventListener("scroll", () => {
    if (!iniciado) {
        iniciado = true;
        setTimeout(() => {
            cicloToasts();
        }, 4000);
    }
}, { once: true });

*/