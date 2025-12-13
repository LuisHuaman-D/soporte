var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "slider",
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
autoplay: {
 delay: 8000,
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
        if (window.scrollY > 50) {
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

  if (hour >= 6 && hour < 10) {
    percentage = 100;
  } else if (hour >= 10 && hour < 11) {
    percentage = 99;
  } else if (hour >= 11 && hour < 12) {
    percentage = 89;
  } else if (hour >= 12 && hour < 13) {
    percentage = 67;
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
