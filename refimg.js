const nombresImagenes = [
    "tecnico-de-computadoras-22.jpg",
    "tecnico-de-computadoras_Mesa de trabajo 1.jpg",
    "tecnico-de-computadoras-02.jpg",
    "tecnico-de-computadoras-27.jpg",
    "tecnico-de-computadoras-03.jpg",
    "tecnico-de-computadoras-04.jpg",
    "tecnico-de-computadoras-24.jpg",
    "tecnico-de-computadoras-05.jpg",
    "tecnico-de-computadoras-06.jpg",
    "tecnico-de-computadoras-07.jpg",
    "tecnico-de-computadoras-08.jpg",
    "tecnico-de-computadoras-22.jpg",
    "tecnico-de-computadoras-09.jpg",
    "tecnico-de-computadoras-10.jpg",
    "tecnico-de-computadoras-27.jpg",
    "tecnico-de-computadoras-11.jpg",
    "tecnico-de-computadoras-12.jpg",
    "tecnico-de-computadoras-13.jpg",
    "tecnico-de-computadoras-14.jpg",
    "tecnico-de-computadoras-24.jpg",
    "tecnico-de-computadoras-15.jpg",
    "tecnico-de-computadoras-16.jpg",
    "tecnico-de-computadoras-17.jpg",
    "tecnico-de-computadoras-23.jpg",
    "tecnico-de-computadoras-18.jpg",
    "tecnico-de-computadoras-19.jpg",
    "tecnico-de-computadoras-20.jpg",
    "tecnico-de-computadoras-21.jpg",
    "tecnico-de-computadoras-24.jpg",
    "tecnico-de-computadoras-25.jpg",
    "tecnico-de-computadoras-26.jpg",
    "tecnico-de-computadoras-27.jpg",
    "tecnico-de-computadoras-28.jpg"
  ];
  
  // Selecciona el contenedor
  const contenedor = document.querySelector('.refimg');
  
  // Inserta cada imagen
  nombresImagenes.forEach(nombre => {
    const img = document.createElement('img');
    img.src = `img/ref/${nombre}`;
    img.alt = nombre;
    img.style.margin = '5px';
    img.style.maxWidth = ''; // Ajusta según diseño
     contenedor.appendChild(img);
  });