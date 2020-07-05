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

  function getUpgradeTree(string){
    if(string.includes("point")){
      return pointTree;
    }
    if(string.includes("line")){
      return lineTree;
    }
    if(string.includes("triangle")){
      return triangleTree;
    }
    if(string.includes("square")){
      return squareTree;
    }
    if(string.includes("pentagon")){
      return pentagonTree;
    }
    if(string.includes("hexagon")){
      return hexagonTree;
    }
    if(string.includes("heptagon")){
      return heptagonTree;
    }
    if(string.includes("octagon")){
      return octagonTree;
    }
    if(string.includes("nonagon")){
      return nonagonTree;
    }
    if(string.includes("decagon")){
      return decagonTree;
    }
  }

  function upgradeEffect(upgradeID){
    if(upgradeID == "pointUpgrade1"){
      generatorBaseContributionArray[0] += 1;
    }
  }

  function setAllCosts(){
    var allUpgrades = $(".grid-item-upgrade");

    for(var i=0; i<90; i++){
      var upgradeID = allUpgrades[i].id;
      var upgradeTree = getUpgradeTree(upgradeID);
      var upgradeDesc = searchTreeForID(upgradeID, upgradeTree);
      $("#"+upgradeID).html(upgradeDesc.cost);
    }
  }

  setAllCosts();

  $(".grid-item-upgrade").hover(function(){
    var upgradeID = $(this).attr("id");

    var upgradeTree = getUpgradeTree(upgradeID); //returns JSON object corresponding to a tree of upgrades
    var upgradeDesc = searchTreeForID(upgradeID, upgradeTree); // returns a single json object corresponding to a single upgrade

    $(this).attr("title", upgradeDesc.desc);

  });

  $(".grid-item-upgrade").click(function(){
    var upgradeID = $(this).attr("id");
    var upgradeTree = null;

    upgradeTree = getUpgradeTree(upgradeID);

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

        $("#"+branchUpgrade.child[1].id).css("pointer-events", "none");
        $("#"+branchUpgrade.child[1].child.id).css("pointer-events", "none");
        $("#"+branchUpgrade.child[1].child.child.id).css("pointer-events", "none");

        changeElementColour(upgradeInTree.child.id, "yellow");
        $("#"+upgradeInTree.child.id).css("pointer-events", "auto");
      }
      if(upgradeID.includes("7")){ // first upgrade of 2nd branch
        var branchUpgrade = searchTreeForID(upgradeID.replace("7", "3"), upgradeTree);
        changeElementColour(branchUpgrade.child[0].id, "grey"); // change colour of all upgrades in other branch to show they're unavailable
        changeElementColour(branchUpgrade.child[0].child.id, "grey");
        changeElementColour(branchUpgrade.child[0].child.child.id, "grey");

        $("#"+branchUpgrade.child[0].id).css("pointer-events", "none");
        $("#"+branchUpgrade.child[0].child.id).css("pointer-events", "none");
        $("#"+branchUpgrade.child[0].child.child.id).css("pointer-events", "none");

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

  $(".grid-item").click(function(){ //test function
    console.log("still active");
  })
});
