// Control del desplazamiento del scroll
document.addEventListener('DOMContentLoaded', function () {
   
    var links = document.querySelectorAll('a[href^="#"]:not(.gallery-link,.next,.close)');
    
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault(); 
        var targetId = this.getAttribute('href').substring(1); 
        var targetElement = document.getElementById(targetId); 
        var offset = 80; 
        var targetPosition = targetElement.offsetTop - offset; 
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' 
        });
      });
    });
});

//CAMBIO DE FONDO
document.getElementById('cambiarFondo').addEventListener('click', function() {
    var seccion = document.getElementById('nosotros');
    
  // Toggle entre las clases de fondo
    
    seccion.classList.toggle('fondo-2');
});

//API REST DE SHEETDB.IO
const API_URL = "https://sheetdb.io/api/v1/ur7bnj33qj7t6"

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = document.querySelector("form");

    let dataForm = new FormData(form);

    dataForm.append("ticket_time", new Date().toString());

    await fetch(API_URL, {
        method: "POST",
        body: dataForm,
    });

    form.classList.add("animation");

    alert("GRACIAS! Pronto nos comunicaremos con vos!");
    window.location.href = "/"; 
   
});

//STOP DE VIDEOS AL CAMBIAR DE IMAGEN O CERRAR LA GALERIA 
document.addEventListener("DOMContentLoaded", function () {
 

  function stopAllVideos() {
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
  }
  
   const closeButton = document.querySelectorAll(".close");
  closeButton.forEach(button => {
    button.addEventListener("click", function () {
      stopAllVideos();
      
    });
  });

  const nextButton = document.querySelectorAll(".next");
  nextButton.forEach(button => {
    button.addEventListener("click", function () {
      stopAllVideos();
    });
  });

  
  
});




