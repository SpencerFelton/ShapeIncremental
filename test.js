$(document).ready(function(){

  $("#buyPointButton").click(function(){
    buyGenerator(0);
    console.log("you clicked!");
  });

  $("#buyLineButton").click(function(){
    buyGenerator(1);
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

  $("#pointUpgrade1Button").click(function(){
    if (playerCurrency >= 50) { // check the player has enough money to purchase the upgrade
      playerCurrency -= 50;
      generatorMultipliers[0] *= 2; // multiply currency generation by points by 2
      $("#pointUpgrade1").hide(); // hide the button and description so it cant be pressed twice
    }
    else{
      console.log("you cant afford that yet");
    }
  })
});
