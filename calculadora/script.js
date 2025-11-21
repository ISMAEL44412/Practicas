const numeros = document.querySelectorAll(".boton-numero");
const operaciones = document.querySelectorAll(".operacion");
const visor = document.querySelector(".visor");
const borrar_todo = document.querySelector("#borrar_todo");
const resultado = document.querySelector("#resultado");
const borrar = document.querySelector("#borrar");

// Agregar numeros y operaciones
numeros.forEach((numero) => {
  numero.addEventListener("click", function (evento) {
    visor.value += evento.target.id;
  });
});

operaciones.forEach((operacion) => {
  operacion.addEventListener("click", function (evento) {
    if (visor.value !== "") {
      let caracteres = visor.value;
      let letras = caracteres.split("");
      let expresion = letras[letras.length - 1];
      const caracter = ["+", "-", "/", "*"];
      if (caracter.includes(expresion)) {
        return;
      }
      visor.value += evento.target.id;
    }
  });
});

// borrar
borrar.addEventListener("click", function () {
  let caracteres = visor.value;
  let letras = caracteres.split("");
  letras.pop();
  caracteres = letras.join("");
  visor.value = caracteres;
});

borrar_todo.addEventListener("click", function () {
  visor.value = "";
});

// resultado
resultado.addEventListener("click", function () {
  let caracteres = visor.value;
  let letras = caracteres.split("");
  let expresion = letras[letras.length - 1];
  const caracter = ["+", "-", "/", "*"];
  if (caracter.includes(expresion)) {
    return;
  }
  if (visor.value != "") {
    let resultado = visor.value;
    visor.value = eval(resultado);
  }
});
