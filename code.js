
/*var lazyLoadInstance = new LazyLoad({
  
});*/

var swiper = new Swiper(".mySwiper", {
  loop: true,
  /*freeMode: true,*/
  fadeEffect: {
    crossFade: true
  },
autoplay: {
 delay: 7000,
 disableOnInteraction: true
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


/*
const sliderImg = document.getElementById("slidertop")
const imgMovil = [
    {url: "./img/tecnicodecomputadoras.webp", alt:"tecnico de computadoras a domicilio" },
    {url: "./img/tecnicodecomputadoras-esamblaje-de-pc (2).webp", alt:"tecnico de computadoras a domicilio" },
    {url: "./img/tecnicodecomputadorasadomicilio.webp", alt:"tecnico de computadoras a domicilio" },
];
const imgEscritorio = [
  {url: "./img/tecnico-de-computadoras-a-domicilio.webp", alt:"tecnico de computadoras a domicilio" },
  {url: "./img/tecnico-a-domicilio-lima.webp", alt:"tecnico de computadoras a domicilio" },
  {url: "./img/ENSAMBLAJE-DE-PC.webp", alt:"tecnico de computadoras a domicilio" },
];

function addImagenes(imgArray) {
  sliderImg.innerHTML = '';
  imgArray.forEach(image => {
    const divImgs = document.createElement("div");
    divImgs.classList.add("swiper-slide");

    const imgElementos = document.createElement("img");
    imgElementos.src = image.url;
    imgElementos.alt = image.alt;

    divImgs.appendChild(imgElementos); 

    sliderImg.appendChild(divImgs);
  });
}

function actualizarImagenes() {
  if (window.innerWidth < 600) {
      addImagenes(imgMovil);
  } else {
      addImagenes(imgEscritorio);
  }
}
actualizarImagenes();

//window.addEventListener('resize', actualizarImagenes);

*/