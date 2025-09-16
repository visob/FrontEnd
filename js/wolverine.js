const imagenesLogan = [
  "img/logan.png",
  "img/logan2.jpeg",
  "img/logan3.jpeg",
  "img/logan4.jpeg"
];
let indiceImagen = 0;


function cambiarImagen() {
  const img = document.getElementById("profile-image");

  img.style.opacity = 0;

  setTimeout(() => {
    indiceImagen = (indiceImagen + 1) % imagenesLogan.length;
    img.src = imagenesLogan[indiceImagen];

    img.style.opacity = 1;
  }, 400);
}


function scrollSuave(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}



function datoRandom() {
  const datos = [
    "mi nombre real es James Howlett, aunque la mayoría me conoce como Logan.",
    "Nací en Canadá a finales del siglo XIX.",
    "Mis garras originalmente eran de hueso, no de metal.",
    "El adamantium fue implantado en mi cuerpo en el experimento del proyecto Arma X.",
    "He peleado en la Primera y la Segunda Guerra Mundial.",
    "Formé parte del equipo Alpha Flight, antes de unirme a los X-Men.",
    "Mi primera aparición fue en The Incredible Hulk #180 (1974).",
    "Soy considerado uno de los mutantes más populares de Marvel.",
    "He tenido una fuerte relación con Jean Grey, aunque ella siempre estuvo con Cíclope.",
    "Fuí mentor de varios jóvenes mutantes como Kitty Pryde, Rogue y Jubilee.",
    "He pasado parte de mi vida en Japón, donde aprendí artes marciales y me casé.",
    "Mi factor de curación me hace casi inmortal y ralentiza mucho el envejecimiento.",
    "El esqueleto recubierto de adamantium me hace prácticamente indestructible.",
    "Aunque soy rudo y solitario, en el fondo tengo un gran sentido del honor.",
    "He sido miembro de los Vengadores además de los X-Men.",
    "En la saga 'Old Man Logan' se muestra un futuro donde sobrevivo a todos.",
    "En la película Logan (2017) se muestra mi faceta más humana y vulnerable.",
    "Mi frase icónica es: 'Soy el mejor en lo que hago, pero lo que hago no es muy agradable.'"
  ];

  const random = datos[Math.floor(Math.random() * datos.length)];
  alert(random);
}

document.addEventListener("DOMContentLoaded", function () {
  var carrusel = document.querySelector('#carruselJose');
  if (carrusel) {
    new bootstrap.Carousel(carrusel, {
      interval: 1300, 
      ride: 'carousel'
    });
  }
});
