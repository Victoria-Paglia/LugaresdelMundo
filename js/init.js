const DESTINOS_URL = "";

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

  let userLogged = JSON.parse(localStorage.getItem('User-Logged')).email;
  let usuario = document.getElementById("usuario")
  let profile = document.getElementById("profile")

  if (userLogged) {
    usuario.innerText += userLogged;
  };
  
  document.getElementById("salir").addEventListener("click",function() {
      localStorage.removeItem('userLogged');
      localStorage.removeItem('profile')
      window.location = 'index.html';
  })
});
