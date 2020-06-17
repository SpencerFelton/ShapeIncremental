var generatorArray =[0,0,0,0,0,0,0,0,0,0]; // Start with 0 of each initial generator
var generatorBaseCostArray =[1,1,1,1,1,1,1,1,1,1];
var generatorCurrentCostArray =[1,50,2500,125000,6250000,312500000,15625000000,781250000000,39062500000000,1953125000000000];
var generatorBaseContributionArray = [1,5,25,125,625,3125,15625,78125,3906256,1953125]
var generatorMultipliers = [1,1,1,1,1,1,1,1,1,1]; //
var generatorExponent = [1,1,1,1,1,1,1,1,1,1];

var pointUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false]; // index corresponding to number of upgrade, [0] = upgrade1 etc
var lineUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
var triangleUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
var squareUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
var pentagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
var hexagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
var heptagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
var octagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
var nonagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
var decagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];

var playerCurrency = 1e0;
var playerPrestigeCurrency = 0;

function totalMultiplier(multiplier, exponent){ // total multiplier to a generator is defined as its multiplied raised to the power of its exponent
  return multiplier**exponent;
}

function nextGeneratorCost(i) {
  nextCost = 1+(generatorCurrentCostArray[i]*1.4*generatorBaseCostArray[i]); //cost of next generator is 1.7* higher than current cost, multiplied by the base cost multiplier
  return nextCost;
}

function buyGenerator(i){ //Try to buy generator according to resourcesArray
  var generatorCost = generatorCurrentCostArray[i] // cost of generator
  if (playerCurrency>=generatorCost) {
    generatorArray[i]+=1;
    playerCurrency-=generatorCost;
    generatorCurrentCostArray[i] = nextGeneratorCost(i);
  }
  else{
    console.log("you can't afford that!");
  }
}


// Gain per update functions - gain dependent on the generator above them, or i+1
function currencyGainPerUpdate(){ // game runs at 60 updates per second, so to get gain per update we divide point gains by 60 and any upgrades
  return pointContributionPerUpdate() + lineContributionPerUpdate() + triangleContributionPerUpdate() + squareContributionPerUpdate() + pentagonContriubtionPerUpdate() + hexagonContributionPerUpdate() + heptagonContributionPerUpdate() + octagonContributionPerUpdate() + nonagonContributionPerUpdate() + decagonContributionPerUpdate();
}

function pointContributionPerUpdate(){ // points are the first tier of production, but their gain is dependent on lines, hence we check the 2nd index of the array
  var contribution = (generatorArray[0] * ((generatorBaseContributionArray[0] * generatorMultipliers[0])**generatorExponent[0]))/60;
  return contribution;
}

function lineContributionPerUpdate(){
  var contribution = (generatorArray[1] * ((generatorBaseContributionArray[1] * generatorMultipliers[1])**generatorExponent[1]))/60;
  return contribution;
}

function triangleContributionPerUpdate(){
  var contribution = (generatorArray[2] * ((generatorBaseContributionArray[2] * generatorMultipliers[2])**generatorExponent[2]))/60;
  return contribution;
}

function squareContributionPerUpdate(){
  var contribution = (generatorArray[3] * ((generatorBaseContributionArray[3] * generatorMultipliers[3])**generatorExponent[3]))/60;
  return contribution;
}

function pentagonContriubtionPerUpdate(){
  var contribution = (generatorArray[4] * ((generatorBaseContributionArray[4] * generatorMultipliers[4])**generatorExponent[4]))/60;
  return contribution;
}

function hexagonContributionPerUpdate(){
  var contribution = (generatorArray[5] * ((generatorBaseContributionArray[5] * generatorMultipliers[5])**generatorExponent[5]))/60;
  return contribution;
}

function heptagonContributionPerUpdate(){
  var contribution = (generatorArray[6] * ((generatorBaseContributionArray[6] * generatorMultipliers[6])**generatorExponent[6]))/60;
  return contribution;
}

function octagonContributionPerUpdate(){
  var contribution = (generatorArray[7] * ((generatorBaseContributionArray[7] * generatorMultipliers[7])**generatorExponent[7]))/60;
  return contribution;
}

function nonagonContributionPerUpdate(){
  var contribution = (generatorArray[8] * ((generatorBaseContributionArray[8] * generatorMultipliers[8])**generatorExponent[0]))/60;
  return contribution;
}

function decagonContributionPerUpdate(){
  var contribution = (generatorArray[9] * ((generatorBaseContributionArray[9] * generatorMultipliers[9])**generatorExponent[9]))/60;
  return contribution;
}
// update currency/generator functions
function updateCurrency(){ // points generate currency - calculate and update html every update
  var gain = currencyGainPerUpdate();
  playerCurrency += gain;
}

function updatePoints(){
  var gain = pointGainPerUpdate();
  generatorArray[0] += gain;
}

function updateLines(){
  var gain = lineGainPerUpdate();
  generatorArray[1] += gain;
}

function updateTriangles(){
  var gain = triangleGainPerUpdate();
  generatorArray[2] += gain;
}

function updateSquares(){
  var gain = squareGainPerUpdate();
  generatorArray[3] += gain;
}

function updatePentagons(){
  var gain = pentagonGainPerUpdate();
  generatorArray[4] += gain;
}

function updateHexagons(){
  var gain = hexagonGainPerUpdate();
  generatorArray[5] += gain;
}

function updateHeptagons(){
  var gain = heptagonGainPerUpdate();
  generatorArray[6] += gain;
}

function updateOctagons(){
  var gain = octagonGainPerUpdate();
  generatorArray[7] += gain;
}

function updateNonagons(){
  var gain = nonagonGainPerUpdate();
  generatorArray[8] += gain;
}

function toENotation(number){ // if a number is less than 1 million, leave it as an integer, otherwise convert it to e notation
  if (number <= 1000000) {
    return number.toFixed(0);
  }
  else {
    return number.toPrecision(3);
  }
}

function checkCanPrestige(){ // check if the player has enough curreny to prestige
  if (playerCurrency >= 1e308) {
    if(window.confirm("You've reached 1e308 Cardinals, time for a prestige!")){
      prestige(); // perform a prestige, unlock 3d shapes and prestige curreny shop
    }
    else {
      alert("I'm afraid at this time, you have no choice.")
    }
  }
}

function resetPlayerCurrency(){ //reset player currency for prestige
  playerCurrency = 1;
}

function resetGeneratorArray(){
  generatorArray = [0,0,0,0,0,0,0,0,0,0];
}

function resetGeneratorBaseCostArray(){
  generatorCurrentCostArray = [1,1e2,1e4,1e6,1e8,1e10,1e12,1e14,1e16,1e18];
}

function resetGeneratorMultipliers(){
  generatorMultipliers = [1,1,1,1,1,1,1,1,1,1];
}

function resetGeneratorUpgrades(){
  pointUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false]; // index corresponding to number of upgrade, [0] = upgrade1 etc
  lineUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
  triangleUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
  squareUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
  pentagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
  hexagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
  heptagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
  octagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
  nonagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
  decagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false];
}

function hideGeneratorVisibility(){
  $("#lineWrapper").hide();
  $("#triangleWrapper").hide();
  $("#squareWrapper").hide();
  $("#pentagonWrapper").hide();
  $("#hexagonWrapper").hide();
  $("#heptagonWrapper").hide();
  $("#octagonWrapper").hide();
  $("#nonagonWrapper").hide();
  $("#decagonWrapper").hide();
}



function prestige(){ // perform a prestige
  if($("#prestigeShopWindow").css("display") == "none"){ // check if this is the first prestige, shop should only not appear on the first run
    $("#prestigeShopButton").show();
  }
  resetPlayerCurrency();
  resetGeneratorArray();
  resetGeneratorBaseCostArray();
  resetGeneratorMultipliers();
  resetGeneratorUpgrades();
  hideGeneratorVisibility();
}

function checkRow2PointUpgrades(totalPoints){ // compare total number of points against certain breakpoints, and show buttons as breakpoints are reached
  if(totalPoints >= 100000){
    if(pointUpgradesPurchased[5] != true){
      $("#pointUpgrade6DescUpper").text("Big boy leagues");
      $("#pointUpgrade6Button").text("1e15");
      $("#pointUpgrade6DescLower").text("x10 Cardinal output of points");
      $("#pointUpgrade6Button").prop("disabled", false);
    };
  };
  if(totalPoints >= 1e7){
    if(pointUpgradesPurchased[6] != true){
      $("#pointUpgrade7DescUpper").text("Bigger bruh leagues");
      $("#pointUpgrade7Button").text("1e20");
      $("#pointUpgrade7DescLower").text("x15 Cardinal output of points");
      $("#pointUpgrade7Button").prop("disabled", false);
    };
  };
  if(totalPoints >= 1e9){
    if(pointUpgradesPurchased[7] != true){
      $("#pointUpgrade8DescUpper").text("Naming is hard yo");
      $("#pointUpgrade8Button").text("1e25");
      $("#pointUpgrade8DescLower").text("x25 Cardinal output of points");
      $("#pointUpgrade8Button").prop("disabled", false);
    };
  };
  if(totalPoints >= 1e11){
    if(pointUpgradesPurchased[8] != true){
      $("#pointUpgrade9DescUpper").text("B1gg3r bruh l34gu3s");
      $("#pointUpgrade9Button").text("1e30");
      $("#pointUpgrade9DescLower").text("x50 Cardinal output of points");
      $("#pointUpgrade9Button").prop("disabled", false);
    };
  };
  if(totalPoints >= 1e13){
    if(pointUpgradesPurchased[9] != true){
      $("#pointUpgrade10DescUpper").text("Biggest boi league");
      $("#pointUpgrade10Button").text("1e35");
      $("#pointUpgrade10DescLower").text("x10 to ALL generators");
      $("#pointUpgrade10Button").prop("disabled", false);
    };
  };
}

function checkRow2LineUpgrades(totalLines){ // compares the total number of lines to thresholds to show row 2 upgrades
  if(totalLines >= 100000){
    if(lineUpgradesPurchased[5] != true){
      $("#lineUpgrade6DescUpper").text("CHANGE NAME");
      $("#lineUpgrade6Button").text("1e15");
      $("#lineUpgrade6DescLower").text("x10 Point output of Lines");
      $("#lineUpgrade6Button").prop("disabled", false);
    }
  }
  if(totalLines >= 1e7){
    if(lineUpgradesPurchased[6] != true){
      $("#lineUpgrade7DescUpper").text("CHANGE NAME");
      $("#lineUpgrade7Button").text("1e20");
      $("#lineUpgrade7DescLower").text("x15 Point output of Lines");
      $("#lineUpgrade7Button").prop("disabled", false);
    }
  }
  if(totalLines >= 1e9){
    if(lineUpgradesPurchased[7] != true){
      $("#lineUpgrade8DescUpper").text("CHANGE NAME");
      $("#lineUpgrade8Button").text("1e25");
      $("#lineUpgrade8DescLower").text("x25 Point output of Lines");
      $("#lineUpgrade8Button").prop("disabled", false);
    }
  }
  if(totalLines >= 1e11){
    if(lineUpgradesPurchased[8] != true){
      $("#lineUpgrade9DescUpper").text("CHANGE NAME");
      $("#lineUpgrade9Button").text("1e30");
      $("#lineUpgrade9DescLower").text("x50 Point output of Lines");
      $("#lineUpgrade9Button").prop("disabled", false);
    }
  }
  if(totalLines >= 1e13){
    if(lineUpgradesPurchased[9] != true){
      $("#lineUpgrade10DescUpper").text("CHANGE NAME");
      $("#lineUpgrade10Button").text("1e35");
      $("#lineUpgrade10DescLower").text("x10 to ALL generators");
      $("#lineUpgrade10Button").prop("disabled", false);
    }
  }
}

function checkRow2TriangleUpgrades(totalTriangles){ // compares the total number of triangles to preset thresholds to show row 2 upgrades
  if(totalTriangles >= 100000){
    if(triangleUpgradesPurchased[5] != true){
      $("#triangleUpgrade6DescUpper").text("CHANGE NAME");
      $("#triangleUpgrade6Button").text("1e15");
      $("#triangleUpgrade6DescLower").text("x10 Line output of Triangles");
      $("#triangleUpgrade6Button").prop("disabled", false);
    }
  }
  if(totalTriangles >= 1e7){
    if(triangleUpgradesPurchased[6] != true){
      $("#triangleUpgrade7DescUpper").text("CHANGE NAME");
      $("#triangleUpgrade7Button").text("1e20");
      $("#triangleUpgrade7DescLower").text("x15 Line output of Triangles");
      $("#triangleUpgrade7Button").prop("disabled", false);
    }
  }
  if(totalTriangles >= 1e9){
    if(triangleUpgradesPurchased[7] != true){
      $("#triangleUpgrade8DescUpper").text("CHANGE NAME");
      $("#triangleUpgrade8Button").text("1e25");
      $("#triangleUpgrade8DescLower").text("25 Line output of Triangles");
      $("#triangleUpgrade8Button").prop("disabled", false);
    }
  }
  if(totalTriangles >= 1e11){
    if(triangleUpgradesPurchased[8] != true){
      $("#triangleUpgrade9DescUpper").text("CHANGE NAME");
      $("#triangleUpgrade9Button").text("1e30");
      $("#triangleUpgrade9DescLower").text("50 Line output of Triangles");
      $("#triangleUpgrade9Button").prop("disabled", false);
    }
  }
  if(totalTriangles >= 1e13){
    if(triangleUpgradesPurchased[9] != true){
      $("#triangleUpgrade10DescUpper").text("CHANGE NAME");
      $("#triangleUpgrade10Button").text("1e35");
      $("#triangleUpgrade10DescLower").text("x10 to ALL generators");
      $("#triangleUpgrade10Button").prop("disabled", false);
    }
  }
}

function checkRow2SquareUpgrades(totalSquares){
  if(totalSquares >= 100000){
    if(squareUpgradesPurchased[5] != true){
      $("#squareUpgrade6DescUpper").text("CHANGE NAME");
      $("#squareUpgrade6Button").text("7e45");
      $("#squareUpgrade6DescLower").text("x10 Triangle output of Squares");
      $("#squareUpgrade6Button").prop("disabled", false);
    }
  }
  if(totalSquares >= 1e7){
    if(squareUpgradesPurchased[6] != true){
      $("#squareUpgrade7DescUpper").text("CHANGE NAME");
      $("#squareUpgrade7Button").text("7e50");
      $("#squareUpgrade7DescLower").text("x15 Triangle output of Squares");
      $("#squareUpgrade7Button").prop("disabled", false);
    }
  }
  if(totalSquares >= 1e9){
    if(squareUpgradesPurchased[7] != true){
      $("#squareUpgrade8DescUpper").text("CHANGE NAME");
      $("#squareUpgrade8Button").text("1e55");
      $("#squareUpgrade8DescLower").text("x25 Triangle output of Squares");
      $("#squareUpgrade8Button").prop("disabled", false);
    }
  }
  if(totalSquares >= 1e11){
    if(squareUpgradesPurchased[8] != true){
      $("#squareUpgrade9DescUpper").text("CHANGE NAME");
      $("#squareUpgrade9Button").text("1e60");
      $("#squareUpgrade9DescLower").text("x50 Triangle output of Squares");
      $("#squareUpgrade9Button").prop("disabled", false);
    }
  }
  if(totalSquares >= 1e13){
    if(squareUpgradesPurchased[9] != true){
      $("#squareUpgrade10DescUpper").text("CHANGE NAME");
      $("#squareUpgrade10Button").text("1e65");
      $("#squareUpgrade10DescLower").text("x10 to ALL generators");
      $("#squareUpgrade10Button").prop("disabled", false);
    }
  }
}

function checkRow2PentagonUpgrades(totalPentagons){
  if(totalPentagons >= 100000){
    if(pentagonUpgradesPurchased[5] != true){
      $("#pentagonUpgrade6DescUpper").text("CHANGE NAME");
      $("#pentagonUpgrade6Button").text("7e12");
      $("#pentagonUpgrade6DescLower").text("x10 Square output of Pentagons");
      $("#pentagonUpgrade6Button").prop("disabled", false);
    }
  }
  if(totalPentagons >= 1e7){
    if(pentagonUpgradesPurchased[6] != true){
      $("#pentagonUpgrade7DescUpper").text("CHANGE NAME");
      $("#pentagonUpgrade7Button").text("7e12");
      $("#pentagonUpgrade7DescLower").text("x15 Square output of Pentagons");
      $("#pentagonUpgrade7Button").prop("disabled", false);
    }
  }
  if(totalPentagons >= 1e9){
    if(pentagonUpgradesPurchased[7] != true){
      $("#pentagonUpgrade8DescUpper").text("CHANGE NAME");
      $("#pentagonUpgrade8Button").text("7e12");
      $("#pentagonUpgrade8DescLower").text("x25 Square output of Pentagons");
      $("#pentagonUpgrade8Button").prop("disabled", false);
    }
  }
  if(totalPentagons >= 1e11){
    if(pentagonUpgradesPurchased[8] != true){
      $("#pentagonUpgrade9DescUpper").text("CHANGE NAME");
      $("#pentagonUpgrade9Button").text("7e12");
      $("#pentagonUpgrade9DescLower").text("x50 Square output of Pentagons");
      $("#pentagonUpgrade9Button").prop("disabled", false);
    }
  }
  if(totalPentagons >= 1e13){
    if(pentagonUpgradesPurchased[9] != true){
      $("#pentagonUpgrade10DescUpper").text("CHANGE NAME");
      $("#pentagonUpgrade10Button").text("7e12");
      $("#pentagonUpgrade10DescLower").text("x10 to ALL generators");
      $("#pentagonUpgrade10Button").prop("disabled", false);
    }
  }
}

function showRow1Upgrades(generatorArray){
  for(var i=0; i<10; i++){ // 0 = points, 9 = decagons
    if(generatorArray[i] >= 5){
      var id = "#upgradeLine" + ((i*2)+1) + "Wrapper" // 1st row id is always an odd number, eg: points index is 0, but upgrade row id is 1
      $(id).show();
    }
  }
}

function checkUpgrades(){

  showRow1Upgrades(generatorArray); // all generator row 1 upgrades

  if(pointUpgradesPurchased[4] == true){ // only show the 2nd row after the 5th upgrade has been bought
    $("#upgradeLine2Wrapper").show();
    checkRow2PointUpgrades(generatorArray[0]);
  }

  if(lineUpgradesPurchased[4] == true){ // show 2nd row of upgrades for lines if the final upgrade of the first row has been bought
    $("#upgradeLine4Wrapper").show();
    checkRow2LineUpgrades(generatorArray[1]);
  }

  if(triangleUpgradesPurchased[4] == true){ // show 2nd row of upgrades for triangles
    $("#upgradeLine6Wrapper").show();
    checkRow2TriangleUpgrades(generatorArray[2]);
  }

  if(squareUpgradesPurchased[4] == true){
    $("#upgradeLine8Wrapper").show();
    checkRow2SquareUpgrades(generatorArray[3]);
  }

  if(pentagonUpgradesPurchased[4] == true){
    $("#upgradeLine10Wrapper").show();
    checkRow2PentagonUpgrades(generatorArray[4]);
  }


}

function percentageProduction(i){
  if (currencyGainPerUpdate() == 0){
    return 0
  }
  switch (i){
    case 0:
      return ((pointContributionPerUpdate()/currencyGainPerUpdate()) * 100).toPrecision(3);
      break;
    case 1:
      return ((lineContributionPerUpdate()/currencyGainPerUpdate()) * 100).toPrecision(3);
      break;
    case 2:
      return ((triangleContributionPerUpdate()/currencyGainPerUpdate()) * 100).toPrecision(3);
      break;
    case 3:
      return ((squareContributionPerUpdate()/currencyGainPerUpdate()) * 100).toPrecision(3);
      break;
    case 4:
      return ((pentagonContriubtionPerUpdate()/currencyGainPerUpdate()) * 100).toPrecision(3);
      break;
    case 5:
      return ((hexagonContributionPerUpdate()/currencyGainPerUpdate()) * 100).toPrecision(3);
      break;
    case 6:
      return ((heptagonContributionPerUpdate()/currencyGainPerUpdate()) * 100).toPrecision(3);
      break;
    case 7:
      return ((octagonContributionPerUpdate()/currencyGainPerUpdate()) * 100).toPrecision(3);
      break;
    case 8:
      return ((nonagonContributionPerUpdate()/currencyGainPerUpdate()) * 100).toPrecision(3);
      break;
    case 9:
      return ((decagonContributionPerUpdate()/currencyGainPerUpdate()) * 100).toPrecision(3);
      break;
  }
}

function updateDisplay(){
  //PRE PRESTIGE GENERATION
  //UPDATE TOTAL NUMBER OF EACH GENERATOR DECS->POINTS
  $("#decagon").text("Decagons: " + toENotation(generatorArray[9]));
  $("#nonagon").text("Nonagons: " + toENotation(generatorArray[8]));
  $("#octagon").text("Octagons: " + toENotation(generatorArray[7]));
  $("#heptagon").text("Heptagons: " + toENotation(generatorArray[6]));
  $("#hexagon").text("Hexagons: " + toENotation(generatorArray[5]));
  $("#pentagon").text("Pentagons: " + toENotation(generatorArray[4]));
  $("#square").text("Squares: " + toENotation(generatorArray[3]));
  $("#triangle").text("Triangles: " + toENotation(generatorArray[2]));
  $("#CardinalCurrency").text("Cardinals: " + toENotation(playerCurrency));
  $("#line").text("Lines: " + toENotation(generatorArray[1]));
  $("#point").text("Points: " + toENotation(generatorArray[0]));

  // UPDATE COST OF EACH GENERATOR POINTS->DECS
  $("#buyPointButton").text("Cost: " + toENotation(generatorCurrentCostArray[0]));
  $("#buyLineButton").text("Cost: " + toENotation(generatorCurrentCostArray[1]));
  $("#buyTriangleButton").text("Cost: " + toENotation(generatorCurrentCostArray[2]));
  $("#buySquareButton").text("Cost: " + toENotation(generatorCurrentCostArray[3]));
  $("#buyPentagonButton").text("Cost: " + toENotation(generatorCurrentCostArray[4]));
  $("#buyHexagonButton").text("Cost: " + toENotation(generatorCurrentCostArray[5]));
  $("#buyHeptagonButton").text("Cost: " + toENotation(generatorCurrentCostArray[6]));
  $("#buyOctagonButton").text("Cost: " + toENotation(generatorCurrentCostArray[7]));
  $("#buyNonagonButton").text("Cost: " + toENotation(generatorCurrentCostArray[8]));
  $("#buyDecagonButton").text("Cost: " + toENotation(generatorCurrentCostArray[9]));

  //UPDATE GAIN PS FOR EACH GENERATOR POINTS->DECS
  $("#pointContri").text("Cardinals/Sec: " + (toENotation(pointContributionPerUpdate()*60)) + " (" + percentageProduction(0) + "%)");
  $("#lineContri").text("Cardinals/Sec: " + (toENotation(lineContributionPerUpdate()*60)) + " (" + percentageProduction(1) + "%)");
  $("#triangleContri").text("Cardinals/Sec: " + (toENotation(triangleContributionPerUpdate()*60)) + " (" + percentageProduction(2) + "%)");
  $("#squareContri").text("Cardinals/Sec: " + (toENotation(squareContributionPerUpdate()*60)) + " (" + percentageProduction(3) + "%)");
  $("#pentagonContri").text("Cardinals/Sec: " + (toENotation(pentagonContriubtionPerUpdate()*60)) + " (" + percentageProduction(4) + "%)");
  $("#hexagonContri").text("Cardinals/Sec: " + (toENotation(hexagonContributionPerUpdate()*60)) + " (" + percentageProduction(5) + "%)");
  $("#heptagonContri").text("Cardinals/Sec: " + (toENotation(heptagonContributionPerUpdate()*60)) + " (" + percentageProduction(6) + "%)");
  $("#octagonContri").text("Cardinals/Sec: " + (toENotation(octagonContributionPerUpdate()*60)) + " (" + percentageProduction(7) + "%)");
  $("#nonagonContri").text("Cardinals/Sec: " + (toENotation(nonagonContributionPerUpdate()*60)) + " (" + percentageProduction(8) + "%)");
  $("#decagonContri").text("Cardinals/Sec: " + (toENotation(decagonContributionPerUpdate()*60)) + " (" + percentageProduction(9) + "%)");

  //POST PRESTIGE GENERATION

  //Generator Checks
  //Point checks
  if(generatorArray[0] >= 5) {
    $("#upgradeShopWrapper").show();
  }
  if (generatorArray[0] >= 10) { // if the player has 10 Points, show the next generator
    $("#lineWrapper").show();
  }
  //Line checks
  if(generatorArray[1] >= 15) {
    $("#triangleWrapper").show();
  }
  //triangle checks
  if(generatorArray[2] >= 20){
    $("#squareWrapper").show();
  }
  //Square Checks
  if(generatorArray[3] >= 25){
    $("#pentagonWrapper").show();
  }
  //Pentagon checks
  if(generatorArray[4] >= 30){
    $("#hexagonWrapper").show();
  }
  //Hexagon checks
  if(generatorArray[5] >= 35){
    $("#heptagonWrapper").show();
  }
  //Heptagon checks
  if(generatorArray[6] >= 40){
    $("#octagonWrapper").show();
  }
  //Octagon checks
  if(generatorArray[7] >= 45){
    $("#nonagonWrapper").show();
  }
  //Nonagon checks
  if(generatorArray[8] >= 50){
    $("#decagonWrapper").show();
  }
  checkUpgrades();
}

function update(){ // update all aspects of the game
  updateCurrency();
}

setInterval(loop, 16)
function loop(){
  update();
  updateDisplay();
  checkCanPrestige();
}
