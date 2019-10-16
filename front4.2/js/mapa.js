var map;
var centerPos = new google.maps.LatLng(-23.735478,-46.583332);
var zoomLevel = 17;
var directionsDisplay; // Instanciaremos ele mais tarde, que será o nosso google.maps.DirectionsRenderer
var directionsService = new google.maps.DirectionsService();

//AIzaSyC5eap2_KdkX15pAeUu7c0vzmCq34ZR3Sc
function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer(); // Instanciando...
  var mapOptions = {
    center: centerPos,
    zoom: zoomLevel
  };
  map = new google.maps.Map( document.getElementById("map"), mapOptions );
  directionsDisplay.setMap(map);
  var locations = [
  ['First Shoppe', -23.735478, -46.583332]
      //-46.583332,-23.735478
  ];
     
  var markerImage = 'busao.png';
    
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(-23.735478, -46.583332),
    title: "Termo",
    icon : markerImage,
    map: map
  });

 

  marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(-23.735265, -46.582529),
      title: "Termo",
      icon : markerImage,
      map: map
  });

  marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(-23.735367, -46.580357),
      title: "Termo",
      icon : markerImage,
      map: map
  });

  marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(-23.735641, -46.580376),
      title: "Termo",
      icon : markerImage,
      map: map
  });

  marker5 = new google.maps.Marker({
    position: new google.maps.LatLng(-23.734522, -46.579736),
      title: "Termo",
      icon : markerImage,
      map: map
  });
  
      //-23.734522, -46.579736
  google.maps.event.addListener(marker, 'click', marca1);
  google.maps.event.addListener(marker2, 'click', marca2);
  google.maps.event.addListener(marker3, 'click', marca3);
  google.maps.event.addListener(marker4, 'click', marca4);
  google.maps.event.addListener(marker5, 'click', marca5);

  var origem = [-23.734522, -46.579736];
  var chegada = [-23.735478, -46.583332];
  

}
google.maps.event.addDomListener(window, 'load', initialize);
    
function marca1(event) {
  alert("Onibus disponíveis: - 409, 147, 314,431. Por favor selecione um na lista abaixo: ");

  //var select = document.querySelector("#combo-box");
  var onibus = [
    '409',
    '147',
    '314',
    '431'
  ];
  var select = document.getElementById("combo-box");
  while (select.length) {
    select.remove(0);
}
  onibus.forEach(function(item){
    addOption(item)
  });

  
};

function marca2(event) {
  alert("Onibus disponíveis: - 409, 147, 314,431. Por favor selecione um na lista abaixo: ");

  //var select = document.querySelector("#combo-box");
  var onibus = [
    '409',
    '147',
    '314',
    '431'
  ];
  var select = document.getElementById("combo-box");
  while (select.length) {
    select.remove(0);
}
  onibus.forEach(function(item){
    addOption(item)
  });

  //document.getElementById('esconde').textContent = posicao;
};

function marca3(event) {
  alert("Onibus disponíveis: -  147, 431. Por favor selecione um na lista abaixo: ");

  //var select = document.querySelector("#combo-box");
  var onibus = [
    '147',
    '431'
  ];
  var select = document.getElementById("combo-box");
  while (select.length) {
    select.remove(0);
}
  onibus.forEach(function(item){
    addOption(item)
  });
 
  //document.getElementById('esconde').textContent = posicao;
};

function marca4(event) {
  alert("Onibus disponíveis: -  147, 431, 195, 314. Por favor selecione um na lista abaixo: ");

  //var select = document.querySelector("#combo-box");
  var onibus = [
    '147',
    '431',
    '195',
    '314'
  ];
  var select = document.getElementById("combo-box");
  while (select.length) {
    select.remove(0);
}
  onibus.forEach(function(item){
    addOption(item)
  });

 // document.getElementById('esconde').textContent = posicao;
};
function marca5(event) {
  alert("Onibus disponíveis: -  147, 431, 314. Por favor selecione um na lista abaixo: ");

  //var select = document.querySelector("#combo-box");
  var onibus = [
    '147',
    '431',
    '314'
  ];
  var select = document.getElementById("combo-box");
  while (select.length) {
    select.remove(0);
}
  onibus.forEach(function(item){
    addOption(item)
  });

  //document.getElementById('esconde').innerHTML = '-23.734522, -46.579736';
};

function addOption(valor) {

  var select = document.getElementById("combo-box");
  var option = new Option(valor,valor);
  select.add(option);
  document.getElementById('botao2').style.display = 'inline';
  //document.getElementById('tabel').style.display = 'inline';
  //document.getElementById('tabela').style.marginLeft ='32%';
  //document.getElementById('tabela').style.marginTop ='3%';
  //document.getElementById('tabela').style.marginBottom ='3%';
}

function Buscar(){

  var xhr = new XMLHttpRequest();
  //xhr.open("GET", "http://18.221.146.148:1026/v2/entities/urn:ngsi-ld:mobilephone:");
  xhr.open("GET", "http://52.14.14.140:1026/v2/entities/urn:ngsi-ld:431");

  xhr.addEventListener("load", function() {
    var resposta = xhr.responseText;
    console.log(resposta);
    console.log(typeof resposta);
    var bus = JSON.parse(resposta);
    console.log(bus.location.value.coordinates);
    var local = bus.location.value.coordinates;
    markerbus = new google.maps.Marker({
      position: new google.maps.LatLng(local[0], local[1]),
        title: "Onibus",
        map: map
    });
   /* var request = { // Novo objeto google.maps.DirectionsRequest, contendo:
      origin:{lat: posicao[0], lng:posicao[1]}, // origem
      destination: {lat: local[0], lng:local[1]}, // destino
      travelMode: google.maps.TravelMode.DRIVING // meio de transporte, nesse caso, de carro
   };
  
   directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) { // Se deu tudo certo
         directionsDisplay.setDirections(result); // Renderizamos no mapa o resultado
      }
   });*/
    document.getElementById('info-bus').textContent = "409";
    document.getElementById('info-qtd').textContent = bus.quantidade.value;
  });           
  xhr.send(); 
}
