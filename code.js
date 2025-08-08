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