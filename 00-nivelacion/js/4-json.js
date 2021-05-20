// JSON
// JS => JavaScript
// O => Object
// N => Notation

// Este es un Objeto de javascript y es un objeto completamente valido
// Asi es como funciona la arquitectura rest
const Pelota = {
  color: "roja",
  tamaño: 3,
  rebota: false,
  setBotar: function () {
    this.rebota = true;
  },
};

const Usuario = {
  name: "Angel",
  edad: 24,
  email: "email@mail.com",
};

// Esto es la destructuracion
const { name, edad, email } = {
  name: "Angel",
  edad: 24,
  email: "email@mail.com",
};

document.write("<p>" + name + "</p>");
document.write("<p>" + edad + "</p>");
document.write("<p>" + email + "</p>");
