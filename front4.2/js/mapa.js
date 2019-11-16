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
  var posicao = [-23.735478, -46.583332];
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
    addOption(item, posicao)
  });

  
};

function marca2(event) {
  alert("Onibus disponíveis: - 409, 147, 314,431. Por favor selecione um na lista abaixo: ");
  var posicao = [-23.735265, -46.582529];
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
  addOption(item, posicao)
});

  //document.getElementById('esconde').textContent = posicao;
};

function marca3(event) {
  alert("Onibus disponíveis: -  147, 431. Por favor selecione um na lista abaixo: ");
  var posicao = [-23.735367, -46.580357];
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
  addOption(item, posicao)
});
 
  //document.getElementById('esconde').textContent = posicao;
};

function marca4(event) {
  alert("Onibus disponíveis: -  147, 431, 195, 314. Por favor selecione um na lista abaixo: ");
  var posicao = [-23.735641, -46.580376];
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
  addOption(item, posicao)
});

 // document.getElementById('esconde').textContent = posicao;
};
function marca5(event) {
  alert("Onibus disponíveis: -  147, 431, 314. Por favor selecione um na lista abaixo: ");
  var posicao = [-23.734522, -46.579736];
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
  addOption(item, posicao)
});

  //document.getElementById('esconde').innerHTML = '-23.734522, -46.579736';
};

function addOption(valor, posicao) {

  var select = document.getElementById("combo-box");
  var option = new Option(valor,posicao);
  select.add(option);
  console.log(option);
  document.getElementById('botao2').style.display = 'inline';
  //document.getElementById('tabel').style.display = 'inline';
  //document.getElementById('tabela').style.marginLeft ='32%';
  //document.getElementById('tabela').style.marginTop ='3%';
  //document.getElementById('tabela').style.marginBottom ='3%';
}

function Buscar(){
  var posicao = document.getElementById("combo-box").value;
  var bus = document.getElementById("combo-box").options[document.getElementById("combo-box").selectedIndex].text;
  //var itemselecionado = select.options[select.selectedIndex].value;
  var pos = posicao.split(',');
  var pos2 = pos.map(Number);
  console.log(bus);
  var xhr = new XMLHttpRequest();
  //xhr.open("GET", "http://18.221.146.148:1026/v2/entities/urn:ngsi-ld:mobilephone:");

  if(bus == '431'){
    xhr.open("GET", "http://52.14.14.140:1026/v2/entities/urn:ngsi-ld:431");
    document.getElementById('info-bus').textContent = "431";
  }
  else{
    alert("Ônibus não cadastrado ainda..");
    return;
  }

  xhr.addEventListener("load", function() {
    var resposta = xhr.responseText;
    console.log(resposta);
    console.log(typeof resposta);
    var bus = JSON.parse(resposta);
    console.log( bus.location.value);
    var local = bus.location.value.split(',');
    var local2 = local.map(Number);
    console.log(local2);
    markerbus = new google.maps.Marker({
      position: new google.maps.LatLng(local2[0], local2[1]),
        title: "Onibus",
        map: map
    });
    var request = { // Novo objeto google.maps.DirectionsRequest, contendo:
      origin:{lat: local2[0], lng:local2[1]}, // origem
      destination:{lat: pos2[0], lng:pos2[1]},
      //destination:{lat: local[0], lng:local[1]}, // destino
      travelMode: google.maps.TravelMode.DRIVING // meio de transporte, nesse caso, de carro
   };
  
   directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) { // Se deu tudo certo
         directionsDisplay.setDirections(result); // Renderizamos no mapa o resultado
         //var point = response.routes[ 0 ].legs[ 0 ];
        // alert(point.duration.text);
      }
   });
    
    document.getElementById('info-qtd').textContent = bus.quantidade.value;
    CalculaDistancia(pos2, local2);
  });           
  xhr.send(); 
  
}

function CalculaDistancia(pos2, local) {
  //$('#litResultado').html('Aguarde...');
  //Instanciar o DistanceMatrixService
  var service = new google.maps.DistanceMatrixService();
  //executar o DistanceMatrixService
  var origem = {lat: local[0], lng:local[1]};
  var destino = {lat: pos2[0], lng:pos2[1]};
  service.getDistanceMatrix(
    {
        //Origem
        origins:[origem, origem], // origem
        destinations:[destino, destino],
        //Modo (DRIVING | WALKING | BICYCLING)
        travelMode: google.maps.TravelMode.DRIVING,
        //Sistema de medida (METRIC | IMPERIAL)
        unitSystem: google.maps.UnitSystem.METRIC
        //Vai chamar o callback
    }, callback);
}
//Tratar o retorno do DistanceMatrixService
function callback(response, status) {
  //Verificar o Status
  if (status != google.maps.DistanceMatrixStatus.OK)
      //Se o status não for "OK"
      $('#litResultado').html(status);
  else {
      //Se o status for OK
      //Endereço de origem = response.originAddresses
      //Endereço de destino = response.destinationAddresses
      //Distância = response.rows[0].elements[0].distance.text
      //Duração = response.rows[0].elements[0].duration.text
     /* $('#litResultado').html("<strong>Origem</strong>: " + response.originAddresses +
          "<br /><strong>Destino:</strong> " + response.destinationAddresses +
          "<br /><strong>Distância</strong>: " + response.rows[0].elements[0].distance.text +
          " <br /><strong>Duração</strong>: " + response.rows[0].elements[0].duration.text
      );*/
      document.getElementById('info-tempo').textContent = response.rows[0].elements[0].duration.text;
      document.getElementById('info-dist').textContent = response.rows[0].elements[0].distance.text;
      //alert(response.rows[0].elements[0].distance.text + " " + response.rows[0].elements[0].duration.text);
    }
  }

  function AtualizarDados(){
    $.ajax({
      url: "http://52.14.14.140:1026/v2/entities/urn:ngsi-ld:431", //selecionando o endereço que iremos acessar no backend
      type: 'GET', //selecionando o tipo de requesição, PUT,GET,POST,DELETE
      sucess: function(){console.log("Sucesso")},//Em caso de sucesso
      error: function(){//Em caso de erro
        console.log("Erro");//Exibir o erro no console JS do navegador
      }
    }).done(function(resultados){
       

        document.getElementById('info-qtd').textContent = resultados.quantidade.value;

        console.log(resultados.quantidade.value);
    });//Fim chamada Ajax
  }