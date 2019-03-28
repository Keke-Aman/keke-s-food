// Pour animation du ruban vert qui en haut à gauche

$(document).ready(function(){
    $("a").click(function(){
      $("#boite").animate({
          left: '1617px'
  });
    });
  }); 
  
  $(document).ready(function(){
    $("a").click(function(){
      $("#boite").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("th").click(function(){
      $("td").slideToggle("slow");
    });
  });

// C'est l'amination des images en diaporama
w3.slideshow(".aliment", 1000);
w3.slideshow(".aliment1", 1000);
w3.slideshow(".aliment2", 1000);
w3.slideshow(".aliment3", 1000);
w3.slideshow(".aliment4", 1000);

// function pour ajouter des commentaires 
          
          function myFunction() {
            var txt;
            var person = prompt("Entrez votre nom svp :", "KEKE'S FOOD CONTROL");
            if (person == null || person == "") {
            txt = "Entrez quelque chose.";
            } else {
            txt = "Hello " + person + " <br> Bienvenue sur KEKE'S FOOD CONTROL";
            }
            document.getElementById("texte").innerHTML = txt;
          }

          // Pour recevoir les commentaires 
          var toDoList =[];          

  //Le carre qui bouge du haut vers le bas 
          function myMove() {
            var elem = document.getElementById("animate");   
            var pos = 0;
            var id = setInterval(frame, 5);
            function frame() {
              if (pos == 35) {
                clearInterval(id);
              } else {
                pos++; 
                elem.style.top = pos + "px"; 
                elem.style.left = pos + "px"; 
              }
            }
          }

      // Le carré de droite qui affiche les 2 textes
				function mOver(obj) {
          obj.innerHTML = "<p> Merci !!!</p>"
          }
  
          function mOut(obj) {
          obj.innerHTML = "<p style='margin-top:-15px;'>KEKE\'S<br>FOOD<br>CONTROL</p>"
          }