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
    jQuerySelector.prop("disabled", true); // diable the button so it cant be clicked again
  }

  //POINT UPGRADE BUTTONS
  $("#pointUpgrade1Button").click(function(){
    if (playerCurrency >= 50) { // check the player has enough money to purchase the upgrade
      generatorMultipliers[0] *= 2; // multiply currency generation by points by 2
      onUpgradePurchase($(this));
      pointUpgradesPurchased[0] = true;
    }
  });

  $("#pointUpgrade2Button").click(function(){
    if (playerCurrency >= 1000) { // check the player has enough money to purchase the upgrade
      playerCurrency -= 1000;
      generatorMultipliers[0] *= 3; // multiply currency generation by points by 2
      onUpgradePurchase($(this));
      pointUpgradesPurchased[1] = true;
    }
  });

  $("#pointUpgrade3Button").click(function(){
    if (playerCurrency >= 5000) { // check the player has enough money to purchase the upgrade
      playerCurrency -= 5000;
      generatorMultipliers[0] *= 4; // multiply currency generation by points by 2
      onUpgradePurchase($(this));
      pointUpgradesPurchased[2] = true;
    }
  });

  $("#pointUpgrade4Button").click(function(){
    if (playerCurrency >= 1e6){
      playerCurrency -= 1e6;
      generatorMultipliers[0] *= 10;
      onUpgradePurchase($(this));
      pointUpgradesPurchased[3] = true;
    }
  });

  $("#pointUpgrade5Button").click(function(){
    if (playerCurrency >= 1e8){
      playerCurrency -= 1e8;
      generatorExponent[0] = generatorExponent[0]*1.2;
      onUpgradePurchase($(this));
      pointUpgradesPurchased[4] = true;
    }
  });

  $("#pointUpgrade6Button").click(function(){
    if (playerCurrency >= 1e15){
      playerCurrency -= 1e15;
      generatorMultipliers[0]*=250;
      onUpgradePurchase($(this));
      pointUpgradesPurchased[5] = true;
    }
  });
  $("#pointUpgrade7Button").click(function(){
    if (playerCurrency >= 1e20){
      playerCurrency -= 1e20;
      generatorMultipliers[0]*=500;
      onUpgradePurchase($(this));
      pointUpgradesPurchased[6] = true;
    }
  });
  $("#pointUpgrade8Button").click(function(){
    if (playerCurrency >= 1e25){
      playerCurrency -= 1e25;
      generatorMultipliers[0]*=1000;
      onUpgradePurchase($(this));
      pointUpgradesPurchased[7] = true;
    }
  });
  $("#pointUpgrade9Button").click(function(){
    if (playerCurrency >= 1e30){
      playerCurrency -= 1e30;
      generatorMultipliers[0]*=2000;
      onUpgradePurchase($(this));
      pointUpgradesPurchased[8] = true;
    }
  });
  $("#pointUpgrade10Button").click(function(){
    if (playerCurrency >= 1e35){
      playerCurrency -= 1e35;
      for(var i=0; i<10; i++){
        generatorMultipliers[i] *= 1000;
      }
      onUpgradePurchase($(this));
      pointUpgradesPurchased[9] = true;
    }
  });

  //LINE UPGRADE BUTTONS
  $("#lineUpgrade1Button").click(function(){ // Double output
    if(playerCurrency >= 2e4){
      playerCurrency-=2e4;
      generatorMultipliers[1] *= 2;
      onUpgradePurchase($(this));
      lineUpgradesPurchased[0] = true;
    }
  });

  $("#lineUpgrade2Button").click(function(){ //x3 output
    if(playerCurrency >= 2.5e5){
      playerCurrency-=2.5e5;
      generatorMultipliers[1] *= 3;
      onUpgradePurchase($(this));
      lineUpgradesPurchased[1] = true;
    }
  });

  $("#lineUpgrade3Button").click(function(){
    if(playerCurrency >= 1e7){
      playerCurrency-=1e7;
      generatorMultipliers[1] *= 4;
      onUpgradePurchase($(this));
      lineUpgradesPurchased[2] = true;
    }
  });

  $("#lineUpgrade4Button").click(function(){
    if(playerCurrency >= 5e8){
      playerCurrency-=5e8;
      generatorMultipliers[1]*=10;
      onUpgradePurchase($(this));
      lineUpgradesPurchased[3] = true;
    }
  });

  $("#lineUpgrade5Button").click(function(){
    if(playerCurrency >= 1e12){
      playerCurrency-=1e12;
      generatorExponent[1] = generatorExponent[1]*1.3;
      onUpgradePurchase($(this));
      lineUpgradesPurchased[4] = true;
    }
  });

  $("#lineUpgrade6Button").click(function(){
    if(playerCurrency >= 1e15){
      playerCurrency -= 1e15;
      generatorMultipliers[1] *= 250;
      onUpgradePurchase($(this));
      lineUpgradesPurchased[5] = true;
    }
  });

  $("#lineUpgrade7Button").click(function(){
    if(playerCurrency >= 1e20){
      playerCurrency -= 1e20;
      generatorMultipliers[1] *= 500;
      onUpgradePurchase($(this));
      lineUpgradesPurchased[6] = true;
    }
  });

  $("#lineUpgrade8Button").click(function(){
    if(playerCurrency >= 1e25){
      playerCurrency -= 1e25;
      generatorMultipliers[1] *= 1000;
      onUpgradePurchase($(this));
      lineUpgradesPurchased[7] = true;
    }
  });

  $("#lineUpgrade9Button").click(function(){
    if(playerCurrency >= 1e30){
      playerCurrency -= 1e30;
      generatorMultipliers[1] *= 2000;
      onUpgradePurchase($(this));
      lineUpgradesPurchased[8] = true;
    }
  });

  $("#lineUpgrade10Button").click(function(){
    if(playerCurrency >= 1e35){
      playerCurrency -= 1e35;
      for(var i=0; i<10; i++){
        generatorMultipliers[i] *= 1000;
      }
      onUpgradePurchase($(this));
      lineUpgradesPurchased[9] = true;
    }
  });


  //TRIANGLE UPGRADE BUTTONS
  $("#triangleUpgrade1Button").click(function(){
    if(playerCurrency >= 7e9){
      playerCurrency-=7e9;
      generatorMultipliers[2] *= 2;
      onUpgradePurchase($(this));
      triangleUpgradesPurchased[0] = true;
    }
  });

  $("#triangleUpgrade2Button").click(function(){
    if(playerCurrency >= 5e11){
      playerCurrency-=5e11;
      generatorMultipliers[2]*=3;
      onUpgradePurchase($(this));
      triangleUpgradesPurchased[1] = true;
    }
  });

  $("#triangleUpgrade3Button").click(function(){
    if(playerCurrency >= 1e12){
      playerCurrency-=1e12;
      generatorMultipliers[2]*=4;
      onUpgradePurchase($(this));
      triangleUpgradesPurchased[2] = true;
    }
  });

  $("#triangleUpgrade4Button").click(function(){
    if(playerCurrency >= 1e15){
      playerCurrency-=1e15;
      generatorMultipliers[2]*=10;
      onUpgradePurchase($(this));
      triangleUpgradesPurchased[3] = true;
    }
  });

  $("#triangleUpgrade5Button").click(function(){
    if(playerCurrency >= 1e16){
      playerCurrency-=1e16;
      generatorExponent[2] = generatorExponent[2]*1.4;
      onUpgradePurchase($(this));
      triangleUpgradesPurchased[4] = true;
    }
  });

  //SQUARE UPGRADE BUTTONS

});
