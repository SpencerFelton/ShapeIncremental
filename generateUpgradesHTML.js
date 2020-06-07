$(document).ready(function(){
  var upgradeShopWindow = $("#upgradeShopWindow");

  var upgradeIndexText=[
    [["Bigger Points", "50", "x2 the Cardinal output of Points"], ["Dotty", "1000", "x3 the Cardinal output of Points"], ["Get to the point", "100000", "x4 the Cardinal output of Points"], ["Such magnitude", "1e7", "5x the Cardinal output of Points"], ["Not a square yet", "1e8", "Raises the Cardinal output of Points to the power 1.2"]], //point upgrade info row 1
    [["LOCKED", "------", "Own 100,000 Points to see this upgrade"], ["LOCKED", "------", "Own 1E7 Points to see this upgrade"], ["LOCKED", "------", "Own 1e9 Points to see this upgrade"], ["LOCKED", "------", "Own 1e11 Points to see this upgrade"],["LOCKED", "------", "Own 1e13 Points to see this upgrade"]], //point upgrade info row 2
    [["TEXT","COST","TEXT"], ["TEXT","COST","TEXT"], ["TEST","COST","TEST"], ["TEST","COST","TEST"], ["TEST","COST","TEST"]], //line info row 1
    [["LOCKED","-------","TEXT"], ["LOCKED","-------","TEXT"], ["LOCKED","-------","TEXT"], ["LOCKED","-------","TEXT"], ["LOCKED","-------","TEXT"]], // line info row 2
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], //triangle info row 1
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], // triangle info row 2
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], //square info row 1
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], // square info row 2
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], //pentagon info row 1
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], // pentagon info row 2
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], //hexagon info row 1
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], // hexagon info row 2
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], //heptagon info row 1
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], // heptagon info row 2
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], //octagon info row 1
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], // octagon info row 2
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], //nonagon info row 1
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], // nonagon info row 2
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]], //decagon info row 1
    [["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"], ["TEXT","TEXT","TEXT"]] // decagon info row 2
  ];


  for(var i=1; i<21; i++){ // The rows of upgrades
    var upgradeWrapperIDFront = "upgradeLine"; // to construct something with ID upgradeLine X Wrapper, where X is a number and theres no whitespace
    var upgradeWrapperIDEnd = "Wrapper";

    var upgradeWrapperClass = "upgradeWrapper";

    var upgradeWrapperID = upgradeWrapperIDFront + i + upgradeWrapperIDEnd;

    var style = "display: none;"


    var finalAttributes = "<div id="+upgradeWrapperID+" class="+upgradeWrapperClass+" style="+style;

    $("#upgradeShopWindow").append($("<div/>").attr("id", upgradeWrapperID).attr("class", upgradeWrapperClass).attr("style", style));



    if(i%2 == 1){ // odd rows, 1,3,5 etc -- first row of upgrades
      for(var j=1; j<6; j++){ //individual upgrades, 5 in a row, upgrades 1-5
        build(upgradeWrapperID, i, j);
      }
    }
    if(i%2 == 0){ // even rows, 2,4,6 etc -- 2nd row of upgrades
      for(var j=6; j<11; j++){ //individual upgrades, 5 in a row, upgrades 6=10
        build(upgradeWrapperID, i, j);
      }
    }
  }

  function build(wrapperID, iIndex, jIndex){
    var disabled = false; // buttons enabled by default
    var upgradeNumber = jIndex // separate value for naming conventions - dont want to effect the searching through array
    if(jIndex>5){
      jIndex-=5; // 2nd row upgrades are still indexed through the array is 0-4 due to having their own separate nested array
      disabled = true; // these upgrades cant be bought immediately
    }
    var generatorName = getNameFromIndex(iIndex); // point, line, triangle
    var thisUpgradeID = generatorName+"Upgrade"+upgradeNumber;

    $("#"+wrapperID).append($("<div/>").attr("id", thisUpgradeID)); // <div id="pointUpgrade1">

    var upgradeDescUpperID = generatorName+"Upgrade"+upgradeNumber+"DescUpper"; // <p> element holding the name of the upgrade
    var upgradeDescUpperClass = "upgradeButtonDescUpper";
    var upgradeDescUpperText = upgradeIndexText[iIndex-1][jIndex-1][0];

    var upgradeDescLowerId = generatorName+"Upgrade"+upgradeNumber+"DescLower"; // <p> element holding the effect of the upgrade
    var upgradeDescLowerClass = "upgradeButtonDescLower";
    var upgradeDescLowerText = upgradeIndexText[iIndex-1][jIndex-1][2]

    var buttonID = generatorName+"Upgrade"+upgradeNumber+"Button"; // <button> element with id to perform some action when clicked
    var buttonClass = "upgradeButton";
    var buttonText = upgradeIndexText[iIndex-1][jIndex-1][1];
    var buttonDisabled = disabled

    $("#"+thisUpgradeID).append($("<p/>").attr("id", upgradeDescUpperID).attr("class", upgradeDescUpperClass).text(upgradeDescUpperText)); //<p id="pointUpgrade1DescUpper" class="upgradeButtonDescUpper">TEXT</p>
    $("#"+thisUpgradeID).append($("<button/>").attr("type", "button").attr("id", buttonID).attr("class", buttonClass).prop("disabled", buttonDisabled).text(buttonText)); //<button type = "button" id="pointUpgrade1Button" class="upgradeButton">TEXT</button>
    $("#"+thisUpgradeID).append($("<p/>").attr("id", upgradeDescLowerId).attr("class", upgradeDescLowerClass).text(upgradeDescLowerText)); //<p id="pointUpgrade1DescLower" class="upgradeButtonDescLower">TEXT</p>

  }


  function getNameFromIndex(index){
    switch (index){
      case 1: case 2:
        return "point";
      case 3: case 4:
        return "line";
      case 5: case 6:
        return "triangle";
      case 7: case 8:
        return "square";
      case 9: case 10:
        return "pentagon";
      case 11: case 12:
        return "hexagon";
      case 13: case 14:
        return "heptagon";
      case 15: case 16:
        return "octagon";
      case 17: case 18:
        return "nonagon";
      case 19: case 20:
        return "decagon";
    }
  }
});
