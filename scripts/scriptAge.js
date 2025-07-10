function calcularEdad() {
let fechaNacimiento = document.getElementById("fechaNacimiento").value;

if (fechaNacimiento === "") {
  document.getElementById("resultado").textContent = "Por favor ingresa una fecha.";
  return;
}

let nacimiento = new Date(fechaNacimiento);
let hoy = new Date();

let edad = hoy.getFullYear() - nacimiento.getFullYear();

let mesActual = hoy.getMonth();
let diaActual = hoy.getDate();
let mesNacimiento = nacimiento.getMonth();
let diaNacimiento = nacimiento.getDate();

if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
  edad--;
}

document.getElementById("resultado").textContent = "Tienes " + edad + " años.";
}
