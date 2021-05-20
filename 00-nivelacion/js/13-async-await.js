// const saludo = () => {
//   return new Promise((resolve) => {
//     resolve("Hola Mundo");
//   });
// };
// saludo().then((res) => console.log(res));

// Todas las Funciones async se convierten en promesas
// const salu2 = async () => {
//   return "Hola Mundo";
// };
// salu2().then((res) => console.log(res));

const peticion = async () => {
  setTimeout(() => {
    const datos = {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    };
    console.log(datos);
  }, 1000);
};
peticion().then(console.log);
