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

  function generatorMultiplier(generator, cost, multiplier, upgradeNumber, buttonClicked){ // generator is an index, cost is the price of an upgrade. multiplier is the amount to multiply total production by, upgradeNumber correspondes to the nth upgrade for that generator, buttonClicked is a jQuery variable of that element in the DOM
    upgradesArray = [];
    switch (generator){ // generator is an index, corresponding to the index of generators in the generatorArray, 0 = points, 1 = lines etc
      case 0:
        upgradesArray = pointUpgradesPurchased;
        break;
      case 1:
        upgradesArray = lineUpgradesPurchased;
        break;
      case 2:
        upgradesArray = triangleUpgradesPurchased;
        break;
      case 3:
        upgradesArray = squareUpgradesPurchased;
        break;
      case 4:
        upgradesArray = pentagonUpgradesPurchased;
        break;
      case 5:
        upgradesArray = hexagonUpgradesPurchased;
        break;
      case 6:
        upgradesArray = heptagonUpgradesPurchased;
        break;
      case 7:
        upgradesArray = octagonUpgradesPurchased;
        break;
      case 8:
        upgradesArray = nonagonUpgradesPurchased;
        break;
      case 9:
        upgradesArray = decagonUpgradesPurchased;
        break;
      default:
        break;
    }

    if(playerCurrency >= cost){
      playerCurrency-=cost;
    }
    generatorMultipliers[generator] *= multiplier;
    onUpgradePurchase(buttonClicked);
    upgradesArray[upgradeNumber] = true;
  }

  //POINT UPGRADE BUTTONS
  $("#pointUpgrade1Button").click(function(){
    generatorMultiplier(0, 50, 2, 0, $(this)); // generator points = 0, lines = 1 etc, cost, multiplier, button
  });

  $("#pointUpgrade2Button").click(function(){
    generatorMultiplier(0, 1000, 3, 1, $(this));
  });

  $("#pointUpgrade3Button").click(function(){
    generatorMultiplier(0, 5000, 4, 2, $(this));
  });

  $("#pointUpgrade4Button").click(function(){
    generatorMultiplier(0, 1e6, 5, 3, $(this));
  });

  $("#pointUpgrade5Button").click(function(){ // not a multiplier - so leave for now
    if (playerCurrency >= 1e8){
      playerCurrency -= 1e8;
      generatorExponent[0] = generatorExponent[0]*1.2;
      onUpgradePurchase($(this));
      pointUpgradesPurchased[4] = true;
    }
  });

  $("#pointUpgrade6Button").click(function(){
    generatorMultiplier(0, 1e15, 10, 5, $(this));
  });

  $("#pointUpgrade7Button").click(function(){
    generatorMultiplier(0, 1e20, 15, 6, $(this));
  });

  $("#pointUpgrade8Button").click(function(){
    generatorMultiplier(0, 1e25, 25, 7, $(this));
  });

  $("#pointUpgrade9Button").click(function(){
    generatorMultiplier(0, 1e30, 50, 8, $(this));
  });

  $("#pointUpgrade10Button").click(function(){ // generatorMultiplier only deals with 1 generator multipier atm so leave for now
    if (playerCurrency >= 1e35){
      playerCurrency -= 1e35;
      for(var i=0; i<10; i++){
        generatorMultipliers[i] *= 10;
      }
      onUpgradePurchase($(this));
      pointUpgradesPurchased[9] = true;
    }
  });

  //LINE UPGRADE BUTTONS
  $("#lineUpgrade1Button").click(function(){ // Double output
    generatorMultiplier(1, 2e4, 2, 0, $(this));
  });

  $("#lineUpgrade2Button").click(function(){ //x3 output
    generatorMultiplier(1, 2.5e5, 3, 1, $(this))
  });

  $("#lineUpgrade3Button").click(function(){ //x4 output
    generatorMultiplier(1, 1e7, 4, 2, $(this));
  });

  $("#lineUpgrade4Button").click(function(){
    generatorMultiplier(1, 5e8, 5, 3, $(this));
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
    generatorMultiplier(1, 1e15, 10, 5, $(this));
  });

  $("#lineUpgrade7Button").click(function(){
    generatorMultiplier(1, 1e20, 15, 6, $(this));
  });

  $("#lineUpgrade8Button").click(function(){
    generatorMultiplier(1, 1e25, 25, 7, $(this));
  });

  $("#lineUpgrade9Button").click(function(){
    generatorMultiplier(1, 1e30, 50, 8, $(this));
  });

  $("#lineUpgrade10Button").click(function(){
    if(playerCurrency >= 1e35){
      playerCurrency -= 1e35;
      for(var i=0; i<10; i++){
        generatorMultipliers[i] *= 10;
      }
      onUpgradePurchase($(this));
      lineUpgradesPurchased[9] = true;
    }
  });


  //TRIANGLE UPGRADE BUTTONS
  $("#triangleUpgrade1Button").click(function(){
    generatorMultiplier(2, 7e9, 2, 0, $(this));
  });

  $("#triangleUpgrade2Button").click(function(){
    generatorMultiplier(2, 5e11, 3, 1, $(this));
  });

  $("#triangleUpgrade3Button").click(function(){
    generatorMultiplier(2, 1e12, 4, 2, $(this));
  });

  $("#triangleUpgrade4Button").click(function(){
    generatorMultiplier(2, 1e15, 5, 3, $(this));
  });

  $("#triangleUpgrade5Button").click(function(){
    if(playerCurrency >= 1e16){
      playerCurrency-=1e16;
      generatorExponent[2] = generatorExponent[2]*1.4;
      onUpgradePurchase($(this));
      triangleUpgradesPurchased[4] = true;
    }
  });

  $("#triangleUpgrade6Button").click(function(){
    generatorMultiplier(2, 1e15, 10, 5, $(this));
  });

  $("#triangleUpgrade7Button").click(function(){
    generatorMultiplier(2, 1e20, 15, 6, $(this));
  });

  $("#triangleUpgrade8Button").click(function(){
    generatorMultiplier(2, 1e25, 25, 7, $(this));
  });

  $("#triangleUpgrade9Button").click(function(){
    generatorMultiplier(2, 1e20, 50, 8, $(this));
  })

  $("#triangleUpgrade10Button").click(function(){
    if(playerCurrency >= 1e35){
      playerCurrency -= 1e35;
    }
    for(var i=0; i<10; i++){
      generatorMultipliers[i] *= 10;
    }
    onUpgradePurchase($(this));
    triangleUpgradesPurchased[9] = true;
  });

  //SQUARE UPGRADE BUTTONS
  $("#squareUpgrade1Button").click(function(){
    generatorMultiplier(3, 7e12, 2, 0, $(this));
  });

  $("#squareUpgrade2Button").click(function(){
    generatorMultiplier(3, 7e15, 3, 1, $(this));
  });

  $("#squareUpgrade3Button").click(function(){
    generatorMultiplier(3, 7e18, 4, 2, $(this));
  });

  $("#squareUpgrade4Button").click(function(){
    generatorMultiplier(3, 7e21, 5, 3, $(this));
  });

  $("#squareUpgrade5Button").click(function(){
    if(playerCurrency >= 1e24){
      playerCurrency-=1e24;
      generatorExponent[3] = generatorExponent[3]*2;
      onUpgradePurchase($(this));
      squareUpgradesPurchased[4] = true;
    }
  });

  $("#squareUpgrade6Button").click(function(){
    generatorMultiplier(3, 7e45, 10, 5, $(this));
  });

  $("#squareUpgrade7Button").click(function(){
    generatorMultiplier(3, 7e50, 15, 6, $(this));
  });

  $("#squareUpgrade8Button").click(function(){
    generatorMultiplier(3, 7e55, 25, 7, $(this));
  });

  $("#squareUpgrade9Button").click(function(){
    generatorMultiplier(3, 7e60, 50, 8, $(this));
  });

  $("#squareUpgrade10Button").click(function(){
    if(playerCurrency >= 1e65){
      playerCurrency -= 1e65;
    }
    for(var i=0; i<10; i++){
      generatorMultipliers[i] *= 10;
    }
    onUpgradePurchase($(this));
    squareUpgradesPurchased[9] = true;
  });

  //PENTAGON UPGRADES
  $("#pentagonUpgrade1Button").click(function(){
    generatorMultiplier(4, 7e12, 2, 0, $(this));
  });

  $("#pentagonUpgrade2Button").click(function(){
    generatorMultiplier(4, 7e12, 3, 1, $(this));
  });

  $("#pentagonUpgrade3Button").click(function(){
    generatorMultiplier(4, 7e12, 4, 2, $(this));
  });

  $("#pentagonUpgrade4Button").click(function(){
    generatorMultiplier(4, 7e12, 5, 3, $(this));
  });

  $("#pentagonUpgrade5Button").click(function(){
    if(playerCurrency >= 1e24){
      playerCurrency-=1e24;
      generatorExponent[4] = generatorExponent[4]*2;
      onUpgradePurchase($(this));
      pentagonUpgradesPurchased[4] = true;
    }
  });

  $("#pentagonUpgrade6Button").click(function(){
    generatorMultiplier(4, 7e12, 10, 5, $(this));
  });

  $("#pentagonUpgrade7Button").click(function(){
    generatorMultiplier(4, 7e12, 15, 6, $(this));
  });

  $("#pentagonUpgrade8Button").click(function(){
    generatorMultiplier(4, 7e12, 25, 7, $(this));
  });

  $("#pentagonUpgrade9Button").click(function(){
    generatorMultiplier(4, 7e12, 50, 8, $(this));
  });

  $("#pentagonUpgrade10Button").click(function(){
    if(playerCurrency >= 7e12){
      playerCurrency -= 7e12;
    }
    for(var i=0; i<10; i++){
      generatorMultipliers[i] *= 10;
    }
    onUpgradePurchase($(this));
    pentagonUpgradesPurchased[9] = true;
  });


});
