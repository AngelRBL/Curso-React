const saludo = () => {
  document.write("<li>Hola Mundo</li>")
}
document.write("<ol>")

setInterval(saludo, 2000)

document.write("</ol>")