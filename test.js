$(document).ready(function(){

  $("#buyPointButton").click(function(){
    buyGenerator(0);
    console.log("you clicked!");
  });

  $("#buyLineButton").click(function(){
    buyGenerator(1);
    console.log("you clicked!");
  });

  $("#buyTriangleButton").click(function(){
    buyGenerator(2);
    console.log("you clicked!");
  });

  $("#buySquareButton").click(function(){
    buyGenerator(3);
    console.log("you clicked!");
  });

  $("#buyPentagonButton").click(function(){
    buyGenerator(4);
    console.log("you clicked!");
  });

  $("#buyHexagonButton").click(function(){
    buyGenerator(5);
    console.log("you clicked!");
  });

  $("#buyHeptagonButton").click(function(){
    buyGenerator(6);
    console.log("you clicked!");
  });

  $("#buyOctagonButton").click(function(){
    buyGenerator(7);
    console.log("you clicked!");
  });

  $("#buyNonagonButton").click(function(){
    buyGenerator(8);
    console.log("you clicked!");
  });

  $("#buyDecagonButton").click(function(){
    buyGenerator(9);
    console.log("you clicked!");
  });

  $("#homeButton").click(function(){ // clicking the home button hides other windows and shows the home window
    $("#mainGameWindow").show();
    $("#upgradeWindow").hide();
  });

  $("#upgradeShopButton").click(function(){
    $("#mainGameWindow").hide();
    $("#upgradeWindow").show();
  });

  $("#achievementButton").click(function(){
    $("#mainGameWindow").hide();
    $("#upgradeWindow").hide();
    $("#achievementWindow").show();
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
      playerCurrency -= 50;
      generatorMultipliers[0] *= 2; // multiply currency generation by points by 2
      onUpgradePurchase($(this));
      pointUpgradesPurchased[0] = true;
    }
    else{
      console.log("you cant afford that yet");
    }
  });

  $("#pointUpgrade2Button").click(function(){
    if (playerCurrency >= 1000) { // check the player has enough money to purchase the upgrade
      playerCurrency -= 1000;
      generatorMultipliers[0] *= 3; // multiply currency generation by points by 2
      onUpgradePurchase($(this));
      pointUpgradesPurchased[1] = true;
    }
    else{
      console.log("you cant afford that yet");
    }
  });

  $("#pointUpgrade3Button").click(function(){
    if (playerCurrency >= 5000) { // check the player has enough money to purchase the upgrade
      playerCurrency -= 5000;
      generatorMultipliers[0] *= 4; // multiply currency generation by points by 2
      onUpgradePurchase($(this));
      pointUpgradesPurchased[2] = true;
    }
    else{
      console.log("you cant afford that yet");
    }
  });

  $("#pointUpgrade4Button").click(function(){
    if (playerCurrency >= 1e7){
      playerCurrency -= 1e7;
      generatorMultipliers[0] *= 10;
      onUpgradePurchase($(this));
      pointUpgradesPurchased[3] = true;
    }
    else{
      console.log("you cant afford that yet");
    }
  });

  $("#pointUpgrade5Button").click(function(){
    if (playerCurrency >= 100000000000){
      playerCurrency -= 100000000000;
      generatorMultipliers[0] = generatorExponent[0]*1.2;
      onUpgradePurchase($(this));
      pointUpgradesPurchased[4] = true;
    }
    else{
      console.log("you cant afford that yet");
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

});
