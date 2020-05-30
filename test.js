$(document).ready(function(){

  $("#buyPointButton").click(function(){
    buyGenerator(0);
  });

  $("#buyLineButton").click(function(){
    buyGenerator(1);
  });

  $("#buyTriangleButton").click(function(){
    buyGenerator(2);
  });

  $("#buySquareButton").click(function(){
    buyGenerator(3);
  });

  $("#buyPentagonButton").click(function(){
    buyGenerator(4);
  });

  $("#buyHexagonButton").click(function(){
    buyGenerator(5);
  });

  $("#buyHeptagonButton").click(function(){
    buyGenerator(6);
  });

  $("#buyOctagonButton").click(function(){
    buyGenerator(7);
  });

  $("#buyNonagonButton").click(function(){
    buyGenerator(8);
  });

  $("#buyDecagonButton").click(function(){
    buyGenerator(9);
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

  $("#lineUpgrade5Button").click(function(){

  });

  $("#lineUpgrade6Button").click(function(){

  });

  $("#lineUpgrade7Button").click(function(){

  });

  $("#lineUpgrade8Button").click(function(){

  });

  $("#lineUpgrade9Button").click(function(){

  });

  $("#lineUpgrade10Button").click(function(){

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
