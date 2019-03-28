// le menu du haut

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

  