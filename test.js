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

  function upgradeEffect(upgradeID){
    if(upgradeID == "pointUpgrade1"){
      alert("upgrade 1? completed it mate");
    }
  }

  $(".grid-item-upgrade").click(function(){
    var upgradeID = $(this).attr("id");
    var upgradeTree = null;

    if(upgradeID.includes("point")){
      upgradeTree = pointTree;
    }

    var upgradeInTree = searchTreeForID(upgradeID, upgradeTree); // returns a single json object

    if(playerCurrency >= upgradeInTree.cost){
      playerCurrency -= upgradeInTree.cost;
      onUpgradePurchase($("#"+upgradeID));
      if(upgradeID.includes("3")){ // the final upgrade before the branch, has multiple children so has own special case
        changeElementColour(upgradeInTree.child[0].id, "yellow");
        changeElementColour(upgradeInTree.child[1].id, "yellow");

        $("#"+upgradeInTree.child[0].id).css("pointer-events", "auto");
        $("#"+upgradeInTree.child[1].id).css("pointer-events", "auto");
      }
      if(upgradeID.includes("4")){ // first upgrade of 1st branch
        var branchUpgrade = searchTreeForID(upgradeID.replace("4", "3"), upgradeTree); //function has no knowledge of the whole tree, we know the upgrade is 4, so use that to find the parent JSON
        changeElementColour(branchUpgrade.child[1].id, "grey"); // change colour of all upgrades in other branch to show they're unavailable
        changeElementColour(branchUpgrade.child[1].child.id, "grey");
        changeElementColour(branchUpgrade.child[1].child.child.id, "grey");

        $("#"+branchUpgrade.child[0].id).css("pointer-events", "none");
        $("#"+branchUpgrade.child[0].child.id).css("pointer-events", "none");
        $("#"+branchUpgrade.child[0].child.child.id).css("pointer-events", "none");
      }
      if(upgradeID.includes("7")){ // first upgrade of 2nd branch
        var branchUpgrade = searchTreeForID(upgradeID.replace("7", "3"), upgradeTree);
        changeElementColour(branchUpgrade.child[0].id, "grey"); // change colour of all upgrades in other branch to show they're unavailable
        changeElementColour(branchUpgrade.child[0].child.id, "grey");
        changeElementColour(branchUpgrade.child[0].child.child.id, "grey");

        $("#"+branchUpgrade.child[1].id).css("pointer-events", "none");
        $("#"+branchUpgrade.child[1].child.id).css("pointer-events", "none");
        $("#"+branchUpgrade.child[1].child.child.id).css("pointer-events", "none");

        changeElementColour(upgradeInTree.child.id, "yellow");
        $("#"+upgradeInTree.child.id).css("pointer-events", "auto");
      }
      if(!upgradeID.includes("6") && !upgradeID.includes("9") && !upgradeID.includes("3")){ //upgrades 3,6 and 9 have either 0 or >1 children so they shouldnt access this
        changeElementColour(upgradeInTree.child.id, "yellow");
        $("#"+upgradeInTree.child.id).css("pointer-events", "auto");
      }

      upgradeEffect(upgradeID);
      //DO THE EFFECT - WRITE FUNCTION TAKING ID AND PERFORMING THE ACTION
    }
  });

  $("#pointUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pointUpgrade2").hover(function(){
    $(this).attr("title", pointTree.child.desc); // pointTree.desc is placeholder
  });
  $("#pointUpgrade3").hover(function(){
    $(this).attr("title", pointTree.child.child.desc);
  });
  $("#pointUpgrade4").hover(function(){
    $(this).attr("title", pointTree.child.child.child[0].desc);
  });
  $("#pointUpgrade5").hover(function(){
    $(this).attr("title", pointTree.child.child.child[0].child.desc);
  });
  $("#pointUpgrade6").hover(function(){
    $(this).attr("title", pointTree.child.child.child[0].child.child.desc);
  });
  $("#pointUpgrade7").hover(function(){
    $(this).attr("title", pointTree.child.child.child[1].desc);
  });
  $("#pointUpgrade8").hover(function(){
    $(this).attr("title", pointTree.child.child.child[1].child.desc);
  });
  $("#pointUpgrade9").hover(function(){
    $(this).attr("title", pointTree.child.child.child[1].child.child.desc);
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

  //pentagon upgrade events
  $("#pentagonUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pentagonUpgrade1").click(function(){
    if(playerCurrency >= 50){ // currency Check
      playerCurrency -= 50;
      onUpgradePurchase($(this)); //change colour, disable click events
      changeElementColour("pentagonUpgrade2", "yellow"); // channge colour of next upgrade
      $("#pentagonUpgrade2").css("pointer-events", "auto"); // enable next upgrade
      generatorMultipliers[1] *= 2; // upgrade effect
    }
  });

  $("#pentagonUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc); // pointTree.desc is placeholder
  });
  $("#pentagonUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pentagonUpgrade3", "yellow");
      $('#pentagonUpgrade3').css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#pentagonUpgrade3").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pentagonUpgrade3").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pentagonUpgrade4", "yellow"); // upgrade paths become available
      changeElementColour("pentagonUpgrade7", "yellow");

      $("#pentagonUpgrade4").css("pointer-events", "auto");
      $("#pentagonUpgrade7").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#pentagonUpgrade4").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pentagonUpgrade4").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pentagonUpgrade5", "yellow");
      $("#pentagonUpgrade5").css("pointer-events", "auto");

      changeElementColour("pentagonUpgrade7", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("pentagonUpgrade8", "grey");
      changeElementColour("pentagonUpgrade9", "grey");

      $("#pentagonUpgrade7").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#pentagonUpgrade8").css("pointer-events", "none");
      $("#pentagonUpgrade9").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#pentagonUpgrade5").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pentagonUpgrade5").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pentagonUpgrade6", "yellow");
      $("#pentagonUpgrade6").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#pentagonUpgrade6").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pentagonUpgrade6").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  $("#pentagonUpgrade7").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pentagonUpgrade7").click(function(){ // 2nd branch of the upgrade tree
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pentagonUpgrade8", "yellow");
      $("#pentagonUpgrade8").css("pointer-events", "auto");

      changeElementColour("pentagonUpgrade4", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("pentagonUpgrade5", "grey");
      changeElementColour("pentagonUpgrade6", "grey");

      $("#pentagonUpgrade4").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#pentagonUpgrade5").css("pointer-events", "none");
      $("#pentagonUpgrade6").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#pentagonUpgrade8").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pentagonUpgrade8").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("pentagonUpgrade9", "yellow");
      $("#pentagonUpgrade9").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#pentagonUpgrade9").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#pentagonUpgrade9").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  //hexagon upgrade events
  $("#hexagonUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#hexagonUpgrade1").click(function(){
    if(playerCurrency >= 50){ // currency Check
      playerCurrency -= 50;
      onUpgradePurchase($(this)); //change colour, disable click events
      changeElementColour("hexagonUpgrade2", "yellow"); // channge colour of next upgrade
      $("#hexagonUpgrade2").css("pointer-events", "auto"); // enable next upgrade
      generatorMultipliers[1] *= 2; // upgrade effect
    }
  });

  $("#hexagonUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc); // pointTree.desc is placeholder
  });
  $("#hexagonUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("hexagonUpgrade3", "yellow");
      $('#hexagonUpgrade3').css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#hexagonUpgrade3").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#hexagonUpgrade3").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("hexagonUpgrade4", "yellow"); // upgrade paths become available
      changeElementColour("hexagonUpgrade7", "yellow");

      $("#hexagonUpgrade4").css("pointer-events", "auto");
      $("#hexagonUpgrade7").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#hexagonUpgrade4").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#hexagonUpgrade4").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("hexagonUpgrade5", "yellow");
      $("#hexagonUpgrade5").css("pointer-events", "auto");

      changeElementColour("hexagonUpgrade7", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("hexagonUpgrade8", "grey");
      changeElementColour("hexagonUpgrade9", "grey");

      $("#hexagonUpgrade7").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#hexagonUpgrade8").css("pointer-events", "none");
      $("#hexagonUpgrade9").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#hexagonUpgrade5").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#hexagonUpgrade5").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("hexagonUpgrade6", "yellow");
      $("#hexagonUpgrade6").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#hexagonUpgrade6").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#hexagonUpgrade6").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  $("#hexagonUpgrade7").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#hexagonUpgrade7").click(function(){ // 2nd branch of the upgrade tree
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("hexagonUpgrade8", "yellow");
      $("#hexagonUpgrade8").css("pointer-events", "auto");

      changeElementColour("hexagonUpgrade4", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("hexagonUpgrade5", "grey");
      changeElementColour("hexagonUpgrade6", "grey");

      $("#hexagonUpgrade4").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#hexagonUpgrade5").css("pointer-events", "none");
      $("#hexagonUpgrade6").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#hexagonUpgrade8").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#hexagonUpgrade8").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("hexagonUpgrade9", "yellow");
      $("#hexagonUpgrade9").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#hexagonUpgrade9").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#hexagonUpgrade9").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  //heptagon upgrade events
  $("#heptagonUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#heptagonUpgrade1").click(function(){
    if(playerCurrency >= 50){ // currency Check
      playerCurrency -= 50;
      onUpgradePurchase($(this)); //change colour, disable click events
      changeElementColour("heptagonUpgrade2", "yellow"); // channge colour of next upgrade
      $("#heptagonUpgrade2").css("pointer-events", "auto"); // enable next upgrade
      generatorMultipliers[1] *= 2; // upgrade effect
    }
  });

  $("#heptagonUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc); // pointTree.desc is placeholder
  });
  $("#heptagonUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("heptagonUpgrade3", "yellow");
      $('#heptagonUpgrade3').css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#heptagonUpgrade3").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#heptagonUpgrade3").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("heptagonUpgrade4", "yellow"); // upgrade paths become available
      changeElementColour("heptagonUpgrade7", "yellow");

      $("#heptagonUpgrade4").css("pointer-events", "auto");
      $("#heptagonUpgrade7").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#heptagonUpgrade4").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#heptagonUpgrade4").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("heptagonUpgrade5", "yellow");
      $("#heptagonUpgrade5").css("pointer-events", "auto");

      changeElementColour("heptagonUpgrade7", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("heptagonUpgrade8", "grey");
      changeElementColour("heptagonUpgrade9", "grey");

      $("#heptagonUpgrade7").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#heptagonUpgrade8").css("pointer-events", "none");
      $("#heptagonUpgrade9").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#heptagonUpgrade5").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#heptagonUpgrade5").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("heptagonUpgrade6", "yellow");
      $("#heptagonUpgrade6").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#heptagonUpgrade6").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#heptagonUpgrade6").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  $("#heptagonUpgrade7").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#heptagonUpgrade7").click(function(){ // 2nd branch of the upgrade tree
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("heptagonUpgrade8", "yellow");
      $("#heptagonUpgrade8").css("pointer-events", "auto");

      changeElementColour("heptagonUpgrade4", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("heptagonUpgrade5", "grey");
      changeElementColour("heptagonUpgrade6", "grey");

      $("#heptagonUpgrade4").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#heptagonUpgrade5").css("pointer-events", "none");
      $("#heptagonUpgrade6").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#heptagonUpgrade8").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#heptagonUpgrade8").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("heptagonUpgrade9", "yellow");
      $("#heptagonUpgrade9").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#heptagonUpgrade9").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#heptagonUpgrade9").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  //octagon upgrade events
  $("#octagonUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#octagonUpgrade1").click(function(){
    if(playerCurrency >= 50){ // currency Check
      playerCurrency -= 50;
      onUpgradePurchase($(this)); //change colour, disable click events
      changeElementColour("octagonUpgrade2", "yellow"); // channge colour of next upgrade
      $("#octagonUpgrade2").css("pointer-events", "auto"); // enable next upgrade
      generatorMultipliers[1] *= 2; // upgrade effect
    }
  });

  $("#octagonUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc); // pointTree.desc is placeholder
  });
  $("#octagonUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("octagonUpgrade3", "yellow");
      $('#octagonUpgrade3').css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#octagonUpgrade3").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#octagonUpgrade3").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("octagonUpgrade4", "yellow"); // upgrade paths become available
      changeElementColour("octagonUpgrade7", "yellow");

      $("#octagonUpgrade4").css("pointer-events", "auto");
      $("#octagonUpgrade7").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#octagonUpgrade4").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#octagonUpgrade4").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("octagonUpgrade5", "yellow");
      $("#octagonUpgrade5").css("pointer-events", "auto");

      changeElementColour("octagonUpgrade7", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("octagonUpgrade8", "grey");
      changeElementColour("octagonUpgrade9", "grey");

      $("#octagonUpgrade7").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#octagonUpgrade8").css("pointer-events", "none");
      $("#octagonUpgrade9").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#octagonUpgrade5").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#octagonUpgrade5").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("octagonUpgrade6", "yellow");
      $("#octagonUpgrade6").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#octagonUpgrade6").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#octagonUpgrade6").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  $("#octagonUpgrade7").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#octagonUpgrade7").click(function(){ // 2nd branch of the upgrade tree
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("octagonUpgrade8", "yellow");
      $("#octagonUpgrade8").css("pointer-events", "auto");

      changeElementColour("octagonUpgrade4", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("octagonUpgrade5", "grey");
      changeElementColour("octagonUpgrade6", "grey");

      $("#octagonUpgrade4").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#octagonUpgrade5").css("pointer-events", "none");
      $("#octagonUpgrade6").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#octagonUpgrade8").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#octagonUpgrade8").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("octagonUpgrade9", "yellow");
      $("#octagonUpgrade9").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#octagonUpgrade9").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#octagonUpgrade9").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  //nonagon upgrade events
  $("#nonagonUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#nonagonUpgrade1").click(function(){
    if(playerCurrency >= 50){ // currency Check
      playerCurrency -= 50;
      onUpgradePurchase($(this)); //change colour, disable click events
      changeElementColour("nonagonUpgrade2", "yellow"); // channge colour of next upgrade
      $("#nonagonUpgrade2").css("pointer-events", "auto"); // enable next upgrade
      generatorMultipliers[1] *= 2; // upgrade effect
    }
  });

  $("#nonagonUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc); // pointTree.desc is placeholder
  });
  $("#nonagonUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("nonagonUpgrade3", "yellow");
      $('#nonagonUpgrade3').css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#nonagonUpgrade3").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#nonagonUpgrade3").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("nonagonUpgrade4", "yellow"); // upgrade paths become available
      changeElementColour("nonagonUpgrade7", "yellow");

      $("#nonagonUpgrade4").css("pointer-events", "auto");
      $("#nonagonUpgrade7").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#nonagonUpgrade4").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#nonagonUpgrade4").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("nonagonUpgrade5", "yellow");
      $("#nonagonUpgrade5").css("pointer-events", "auto");

      changeElementColour("nonagonUpgrade7", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("nonagonUpgrade8", "grey");
      changeElementColour("nonagonUpgrade9", "grey");

      $("#nonagonUpgrade7").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#nonagonUpgrade8").css("pointer-events", "none");
      $("#nonagonUpgrade9").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#nonagonUpgrade5").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#nonagonUpgrade5").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("nonagonUpgrade6", "yellow");
      $("#nonagonUpgrade6").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#nonagonUpgrade6").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#nonagonUpgrade6").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  $("#nonagonUpgrade7").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#nonagonUpgrade7").click(function(){ // 2nd branch of the upgrade tree
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("nonagonUpgrade8", "yellow");
      $("#nonagonUpgrade8").css("pointer-events", "auto");

      changeElementColour("nonagonUpgrade4", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("nonagonUpgrade5", "grey");
      changeElementColour("nonagonUpgrade6", "grey");

      $("#nonagonUpgrade4").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#nonagonUpgrade5").css("pointer-events", "none");
      $("#nonagonUpgrade6").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#nonagonUpgrade8").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#nonagonUpgrade8").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("nonagonUpgrade9", "yellow");
      $("#nonagonUpgrade9").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#nonagonUpgrade9").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#nonagonUpgrade9").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  //decagon upgrade events
  $("#decagonUpgrade1").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#decagonUpgrade1").click(function(){
    if(playerCurrency >= 50){ // currency Check
      playerCurrency -= 50;
      onUpgradePurchase($(this)); //change colour, disable click events
      changeElementColour("decagonUpgrade2", "yellow"); // channge colour of next upgrade
      $("#decagonUpgrade2").css("pointer-events", "auto"); // enable next upgrade
      generatorMultipliers[1] *= 2; // upgrade effect
    }
  });

  $("#decagonUpgrade2").hover(function(){
    $(this).attr("title", pointTree.desc); // pointTree.desc is placeholder
  });
  $("#decagonUpgrade2").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("decagonUpgrade3", "yellow");
      $('#decagonUpgrade3').css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#decagonUpgrade3").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#decagonUpgrade3").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("decagonUpgrade4", "yellow"); // upgrade paths become available
      changeElementColour("decagonUpgrade7", "yellow");

      $("#decagonUpgrade4").css("pointer-events", "auto");
      $("#decagonUpgrade7").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#decagonUpgrade4").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#decagonUpgrade4").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("decagonUpgrade5", "yellow");
      $("#decagonUpgrade5").css("pointer-events", "auto");

      changeElementColour("decagonUpgrade7", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("decagonUpgrade8", "grey");
      changeElementColour("decagonUpgrade9", "grey");

      $("#decagonUpgrade7").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#decagonUpgrade8").css("pointer-events", "none");
      $("#decagonUpgrade9").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#decagonUpgrade5").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#decagonUpgrade5").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("decagonUpgrade6", "yellow");
      $("#decagonUpgrade6").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#decagonUpgrade6").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#decagonUpgrade6").click(function(){ // last upgrade on this branch
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      generatorMultipliers[1] *= 2;
    }
  });

  $("#decagonUpgrade7").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#decagonUpgrade7").click(function(){ // 2nd branch of the upgrade tree
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("decagonUpgrade8", "yellow");
      $("#decagonUpgrade8").css("pointer-events", "auto");

      changeElementColour("decagonUpgrade4", "grey"); // change colour of the other branch to show it's unavailable
      changeElementColour("decagonUpgrade5", "grey");
      changeElementColour("decagonUpgrade6", "grey");

      $("#decagonUpgrade4").css("pointer-events", "none"); // disable the grid area from being clicked
      $("#decagonUpgrade5").css("pointer-events", "none");
      $("#decagonUpgrade6").css("pointer-events", "none");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#decagonUpgrade8").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#decagonUpgrade8").click(function(){
    if(playerCurrency >= 50){
      playerCurrency -= 50;
      onUpgradePurchase($(this));
      changeElementColour("decagonUpgrade9", "yellow");
      $("#decagonUpgrade9").css("pointer-events", "auto");
      generatorMultipliers[1] *= 2;
    }
  });

  $("#decagonUpgrade9").hover(function(){
    $(this).attr("title", pointTree.desc);
  });
  $("#decagonUpgrade9").click(function(){ // last upgrade on this branch
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
