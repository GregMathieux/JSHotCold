//alert("Je suis ici");
console.log("Début du script JS");

var chiffre = Math.floor((Math.random() * 100) + 1);
console.log("Le chiffre secret est: " + chiffre);

function valid(){
  var choix = document.getElementById('userinput').value;
  var diff = Math.abs(choix - chiffre);
  if (diff==0) {
    document.getElementById('chaudFroid').innerHTML = '<img src="./img/goblet_of_fire1.jpg">';
  } else if( diff < 5){
    document.getElementById('chaudFroid').innerHTML ='<img src="./img/chaud.jpg">';
  } else{
    document.getElementById('chaudFroid').innerHTML ='<img src="./img/froid.jpg">';
  }
}
