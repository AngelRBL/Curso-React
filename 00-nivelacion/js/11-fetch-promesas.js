fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// console.log(data)

// XMLHttpRequest() Ajax
// SOAP
// Arquitectura tipo Soap,
// trabaja con ajax

/* <xml>
  
</xml> */
