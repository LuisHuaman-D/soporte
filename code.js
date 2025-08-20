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