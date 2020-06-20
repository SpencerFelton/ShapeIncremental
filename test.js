$(document).ready(function(){

  $(".generatorButton").click(function(){
    switch($(this).attr("id")){
      case "buyPointButton":
        buyGenerator(0);
        break;
      case "buyLineButton":
        buyGenerator(1);
        break;
      case "buyTriangleButton":
        buyGenerator(2);
        break;
      case "buySquareButton":
        buyGenerator(3);
        break;
      case "buyPentagonButton":
        buyGenerator(4);
        break;
      case "buyHexagonButton":
        buyGenerator(5);
        break;
      case "buyHeptagonButton":
        buyGenerator(6);
        break;
      case "buyOctagonButton":
        buyGenerator(7);
        break;
      case "buyNonagonButton":
        buyGenerator(8);
        break;
      case "buyDecagonButton":
        buyGenerator(9);
      default:
        break;
    }
  });

  $(".navigationButton").click(function(){
    var windowName = $(this).attr("id"); // get the id of the clicked button
    windowName = windowName.replace("Button", "") + "Window"; // remove Button from the id, and replace it with Window to create a window ID
    $(".window").each(function(){ // search each element of class window
      if($(this).attr("id") != windowName){ // if the id doesnt match the desired windowID hide() it
        $(this).hide();
      }
      else { // otherwise show() it
        $(this).show();
      }
    });
  });

  function onUpgradePurchase(jQuerySelector){
    jQuerySelector.css("background-color", "green"); //Change the background colour to green
    jQuerySelector.css("color", "black"); // change button text colour to black
    jQuerySelector.text("PURCHASED"); // change the button text to PURCHASED
    jQuerySelector.css("pointer-events", "none"); // diable the button so it cant be clicked again
  }

  function changeElementColour(idString, colour){
    $("#" + idString).css("background-color", colour);
  }

  $("#pointUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pointUpgrade1").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
    }
    onUpgradePurchase($(this));
    changeElementColour("pointUpgrade2", "yellow");
    $("#pointUpgrade2").css("pointer-events", "auto");
  });

  $("#pointUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pointUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
    }
    onUpgradePurchase($(this));
    changeElementColour("pointUpgrade3", "yellow");
  });
});
