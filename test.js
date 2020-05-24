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
  //POINT UPGRADE BUTTONS
  $("#pointUpgrade1Button").click(function(){
    if (playerCurrency >= 50) { // check the player has enough money to purchase the upgrade
      playerCurrency -= 50;
      generatorMultipliers[0] *= 2; // multiply currency generation by points by 2
      $("#pointUpgrade1").hide(); // hide the button and description so it cant be pressed twice
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
      $("#pointUpgrade2").hide(); // hide the button and description so it cant be pressed twice
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
      $("#pointUpgrade3").hide(); // hide the button and description so it cant be pressed twice
      pointUpgradesPurchased[2] = true;
    }
    else{
      console.log("you cant afford that yet");
    }
  });

  $("#pointUpgrade4Button").click(function(){
    if (playerCurrency >= 100000000){
      playerCurrency -= 100000000;
      generatorMultipliers[0] *= 10;
      $("#pointUpgrade4").hide();
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
      $("#pointUpgrade5").hide();
      pointUpgradesPurchased[4] = true;
    }
    else{
      console.log("you cant afford that yet");
    }
  });

  //LINE UPGRADE BUTTONS
  $("#lineUpgrade1Button").click(function(){

  });

  $("#lineUpgrade2Button").click(function(){

  });

  $("#lineUpgrade3Button").click(function(){

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
