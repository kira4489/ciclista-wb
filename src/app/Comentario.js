class Comentario {
  obtenerComentarios() {
    fetch("https://eonet.sci.gsfc.nasa.gov/api/v3/categories", {
      method: "GET",
    }).then(function (respuesta) {
      console.log();
      if (respuesta.status === 200) {
        respuesta.json().then((categories) => {
          console.log(data.categories);
        });
        console.log(respuesta);
      } else {
        alert("alert en servidor");
      }
    });
  }
}
export default Comentario;
