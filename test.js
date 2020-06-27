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
    if(playerCurrency >= 50){ // currency Check
      playerCurrency -= 50;
      onUpgradePurchase($(this)); //change colour, disable click events
      changeElementColour("pointUpgrade2", "yellow"); // channge colour of next upgrade
      $("#pointUpgrade2").css("pointer-events", "auto"); // enable next upgrade
      generatorMultipliers[0] *= 2; // upgrade effect
    }
  });

  $("#pointUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc); // pointTree.desc is placeholder
  });
  $("#pointUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pointUpgrade3", "yellow");
      $('#pointUpgrade3').css("pointer-events", "auto");
      generatorMultipliers[0] *= 2;
    }
  });

  $("#pointUpgrade3").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pointUpgrade3").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pointUpgrade4", "yellow"); // upgrade paths become available
      changeElementColour("pointUpgrade7", "yellow");

      $("#pointUpgrade4").css("pointer-events", "auto");
      $("#pointUpgrade7").css("pointer-events", "auto");
      generatorMultipliers[0] *= 2;
    }
  });

  $("#pointUpgrade4").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pointUpgrade4").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pointUpgrade5", "yellow");
      $("#pointUpgrade5").css("pointer-events", "auto");

      changeElementColour("pointUpgrade7", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("pointUpgrade8", "grey");
      changeElementColour("pointUpgrade9", "grey");

      $("#pointUpgrade7").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#pointUpgrade8").css("pointer-events", "none");
      $("#pointUpgrade9").css("pointer-events", "none");
      generatorMultipliers[0] *= 2;
    }
  });

  $("#pointUpgrade5").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pointUpgrade5").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pointUpgrade6", "yellow");
      $("#pointUpgrade6").css("pointer-events", "auto");
      generatorMultipliers[0] *= 2;
    }
  });

  $("#pointUpgrade6").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pointUpgrade6").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[0] *= 2;
    }
  });

  $("#pointUpgrade7").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pointUpgrade7").click(function(){ // 2nd branch of the upgrade tree
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pointUpgrade8", "yellow");
      $("#pointUpgrade8").css("pointer-events", "auto");

      changeElementColour("pointUpgrade4", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("pointUpgrade5", "grey");
      changeElementColour("pointUpgrade6", "grey");

      $("#pointUpgrade4").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#pointUpgrade5").css("pointer-events", "none");
      $("#pointUpgrade6").css("pointer-events", "none");
      generatorMultipliers[0] *= 2;
    }
  });

  $("#pointUpgrade8").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pointUpgrade8").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pointUpgrade9", "yellow");
      $("#pointUpgrade9").css("pointer-events", "auto");
      generatorMultipliers[0] *= 2;
    }
  });

  $("#pointUpgrade9").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pointUpgrade9").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[0] *= 2;
    }
  });

  //lineUpgrade events
  $("#lineUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#lineUpgrade1").click(function(){
    if(playerCurrency >= 50){ // currency Check
      playerCurrency -= 50;
      onUpgradePurchase($(this)); //change colour, disable click events
      changeElementColour("lineUpgrade2", "yellow"); // channge colour of next upgrade
      $("#lineUpgrade2").css("pointer-events", "auto"); // enable next upgrade
      generatorMultipliers[1] *= 2; // upgrade effect
    }
  });

  $("#lineUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc); // pointTree.desc is placeholder
  });
  $("#lineUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("lineUpgrade3", "yellow");
      $('#lineUpgrade3').css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#lineUpgrade3").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#lineUpgrade3").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("lineUpgrade4", "yellow"); // upgrade paths become available
      changeElementColour("lineUpgrade7", "yellow");

      $("#lineUpgrade4").css("pointer-events", "auto");
      $("#lineUpgrade7").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#lineUpgrade4").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#lineUpgrade4").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("lineUpgrade5", "yellow");
      $("#lineUpgrade5").css("pointer-events", "auto");

      changeElementColour("lineUpgrade7", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("lineUpgrade8", "grey");
      changeElementColour("lineUpgrade9", "grey");

      $("#lineUpgrade7").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#lineUpgrade8").css("pointer-events", "none");
      $("#lineUpgrade9").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#lineUpgrade5").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#lineUpgrade5").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("lineUpgrade6", "yellow");
      $("#lineUpgrade6").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#lineUpgrade6").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#lineUpgrade6").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  $("#lineUpgrade7").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#lineUpgrade7").click(function(){ // 2nd branch of the upgrade tree
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("lineUpgrade8", "yellow");
      $("#lineUpgrade8").css("pointer-events", "auto");

      changeElementColour("lineUpgrade4", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("lineUpgrade5", "grey");
      changeElementColour("lineUpgrade6", "grey");

      $("#lineUpgrade4").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#lineUpgrade5").css("pointer-events", "none");
      $("#lineUpgrade6").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#lineUpgrade8").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#lineUpgrade8").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("lineUpgrade9", "yellow");
      $("#lineUpgrade9").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#lineUpgrade9").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#lineUpgrade9").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  //triangle upgrade events
  $("#triangleUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#triangleUpgrade1").click(function(){
    if(playerCurrency >= 50){ // currency Check
      playerCurrency -= 50;
      onUpgradePurchase($(this)); //change colour, disable click events
      changeElementColour("triangleUpgrade2", "yellow"); // channge colour of next upgrade
      $("#triangleUpgrade2").css("pointer-events", "auto"); // enable next upgrade
      generatorMultipliers[1] *= 2; // upgrade effect
    }
  });

  $("#triangleUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc); // pointTree.desc is placeholder
  });
  $("#triangleUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("triangleUpgrade3", "yellow");
      $('#triangleUpgrade3').css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#triangleUpgrade3").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#triangleUpgrade3").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("triangleUpgrade4", "yellow"); // upgrade paths become available
      changeElementColour("triangleUpgrade7", "yellow");

      $("#triangleUpgrade4").css("pointer-events", "auto");
      $("#triangleUpgrade7").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#triangleUpgrade4").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#triangleUpgrade4").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("triangleUpgrade5", "yellow");
      $("#triangleUpgrade5").css("pointer-events", "auto");

      changeElementColour("triangleUpgrade7", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("triangleUpgrade8", "grey");
      changeElementColour("triangleUpgrade9", "grey");

      $("#triangleUpgrade7").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#triangleUpgrade8").css("pointer-events", "none");
      $("#triangleUpgrade9").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#triangleUpgrade5").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#triangleUpgrade5").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("triangleUpgrade6", "yellow");
      $("#triangleUpgrade6").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#triangleUpgrade6").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#triangleUpgrade6").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  $("#triangleUpgrade7").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#triangleUpgrade7").click(function(){ // 2nd branch of the upgrade tree
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("triangleUpgrade8", "yellow");
      $("#triangleUpgrade8").css("pointer-events", "auto");

      changeElementColour("triangleUpgrade4", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("triangleUpgrade5", "grey");
      changeElementColour("triangleUpgrade6", "grey");

      $("#triangleUpgrade4").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#triangleUpgrade5").css("pointer-events", "none");
      $("#triangleUpgrade6").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#triangleUpgrade8").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#triangleUpgrade8").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("triangleUpgrade9", "yellow");
      $("#triangleUpgrade9").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#triangleUpgrade9").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#triangleUpgrade9").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  //square upgrade events
  $("#squareUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#squareUpgrade1").click(function(){
    if(playerCurrency >= 50){ // currency Check
      playerCurrency -= 50;
      onUpgradePurchase($(this)); //change colour, disable click events
      changeElementColour("squareUpgrade2", "yellow"); // channge colour of next upgrade
      $("#squareUpgrade2").css("pointer-events", "auto"); // enable next upgrade
      generatorMultipliers[1] *= 2; // upgrade effect
    }
  });

  $("#squareUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc); // pointTree.desc is placeholder
  });
  $("#squareUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("squareUpgrade3", "yellow");
      $('#squareUpgrade3').css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#squareUpgrade3").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#squareUpgrade3").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("squareUpgrade4", "yellow"); // upgrade paths become available
      changeElementColour("squareUpgrade7", "yellow");

      $("#squareUpgrade4").css("pointer-events", "auto");
      $("#squareUpgrade7").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#squareUpgrade4").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#squareUpgrade4").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("squareUpgrade5", "yellow");
      $("#squareUpgrade5").css("pointer-events", "auto");

      changeElementColour("squareUpgrade7", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("squareUpgrade8", "grey");
      changeElementColour("squareUpgrade9", "grey");

      $("#squareUpgrade7").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#squareUpgrade8").css("pointer-events", "none");
      $("#squareUpgrade9").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#squareUpgrade5").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#squareUpgrade5").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("squareUpgrade6", "yellow");
      $("#squareUpgrade6").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#squareUpgrade6").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#squareUpgrade6").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  $("#squareUpgrade7").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#squareUpgrade7").click(function(){ // 2nd branch of the upgrade tree
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("squareUpgrade8", "yellow");
      $("#squareUpgrade8").css("pointer-events", "auto");

      changeElementColour("squareUpgrade4", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("squareUpgrade5", "grey");
      changeElementColour("squareUpgrade6", "grey");

      $("#squareUpgrade4").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#squareUpgrade5").css("pointer-events", "none");
      $("#squareUpgrade6").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#squareUpgrade8").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#squareUpgrade8").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("squareUpgrade9", "yellow");
      $("#squareUpgrade9").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#squareUpgrade9").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#squareUpgrade9").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  $(".grid-item").click(function(){ //test function
    console.log("still active");
  })
});
