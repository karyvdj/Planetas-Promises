 function getJSON(url) {
     return new Promise(function(resolve, reject) {  //retorna promise para poder agregar then o catch
         var ajax = new XMLHttpRequest();  //crear la instancia de un objeto
         ajax.open("GET", url);  //abrir la conexion
         ajax.send();  // se envia
         ajax.onreadystatechange = function() { // pregunta si hay un cambio de estado del AJAX (0 no inicia , 1 preparando , 2 mandada, 3 proceso, 4 completada)
             if (ajax.readyState == 4) {
                 resolve(JSON.parse(ajax.responseText)); //convierte en strig en objeto
             };
         };
     });
 };

 getJSON("data/earth-like-results.json") //obtener un JSON
 .then(function(mensaje){  //obtener el resultado de uno en particular
   console.log(mensaje)
   return(getJSON(mensaje.results[0]))
 })
 .then(function(resultado){ //se mete en una funcion para que la asincronía no se rompa
   console.log(resultado)
   mostrarPlaneta(resultado);
 })

var plantillaPlanetas = '<div class="row">'+
  '<div class="col s12 m9 offset-m1">'+
    '<div class="card horizontal">'+
      '<img src="https://dummyimage.com/250x250/000/fff">'+
      '<div class="card-content">'+
        '<h4>__planeta__</h4>'+
        '<p>Orbita: <b>__orbita__</b></p>'+
        '<p>Descubierto en <b>__fecha__</b>con <b>__telescopio__</b></p>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>';

function mostrarPlaneta (planeta) {
  var contenedorPlanetas = document.getElementById('contendorPlanetas')
  var nombre = planeta.pl_name;
  var orbita = planeta.pl_orbper;
  var fecha = planeta.pl_disc;
  var telescopio = planeta.pl_telescope;

  var plantillaFinal = plantillaPlanetas.replace("__planeta__", nombre)
  .replace("__orbita__", orbita)
  .replace("__fecha__", fecha)
  .replace("__telescopio__",telescopio)

  contendorPlanetas.innerHTML= plantillaFinal;
};
