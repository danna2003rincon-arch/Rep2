let cuadroAzul = document.getElementById("cuadro-azul");
let botonCerrar = document.getElementById("boton-cerrar");

let intervalo;

document.addEventListener("DOMContentLoaded", function () {

  setTimeout(function () {
    intervalo = setInterval(mostrarYOcultar, 300000);
  }, 2000); // espera 2 segundos

});

function mostrarYOcultar() {
  if (cuadroAzul.style.visibility == "hidden") {
    cuadroAzul.style.visibility = "visible";
  } else {
    cuadroAzul.style.visibility = "hidden";
  }
}

botonCerrar.addEventListener("click", function () {
  cuadroAzul.style.visibility = "hidden";
  clearInterval(intervalo);
});
