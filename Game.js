var generatorArray =[0,0,0,0,0,0,0,0,0,0]; // Start with 0 of each initial generator
var generatorBaseCostArray =[1,1,1,1,1,1,1,1,1,1];
var generatorCurrentCostArray =[1,3e3,1e9,1e16,1e25,1e36,1e49,1e64,1e81,1e100];
var generatorMultipliers = [1,1,1,1,1,1,1,1,1,1]; //
var generatorExponent = [1,1,1,1,1,1,1,1,1,1];

var pointUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false]; // index corresponding to number of upgrade, [0] = upgrade1 etc
var lineUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false];
var triangleUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false];
var squareUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false];
var pentagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false];
var hexagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false];
var heptagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false];
var octagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false];
var nonagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false];
var decagonUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false];

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
  var gain = (generatorArray[0]*totalMultiplier(generatorMultipliers[0], generatorExponent[0]))/60;
  return gain;
}

function pointGainPerUpdate(){ // points are the first tier of production, but their gain is dependent on lines, hence we check the 2nd index of the array
  var gain = (generatorArray[1]*totalMultiplier(generatorMultipliers[1], generatorExponent[1]))/60;
  return gain;
}

function lineGainPerUpdate(){
  var gain = (generatorArray[2]*totalMultiplier(generatorMultipliers[2], generatorExponent[2]))/60;
  return gain;
}

function triangleGainPerUpdate(){
  var gain = (generatorArray[3]*totalMultiplier(generatorMultipliers[3], generatorExponent[3]))/60;
  return gain;
}

function squareGainPerUpdate(){
  var gain = (generatorArray[4]*totalMultiplier(generatorMultipliers[4], generatorExponent[4]))/60;
  return gain;
}

function pentagonGainPerUpdate(){
  var gain = (generatorArray[5]*totalMultiplier(generatorMultipliers[5], generatorExponent[5]))/60;
  return gain;
}

function hexagonGainPerUpdate(){
  var gain = (generatorArray[6]*totalMultiplier(generatorMultipliers[6], generatorExponent[6]))/60;
  return gain;
}

function heptagonGainPerUpdate(){
  var gain = (generatorArray[7]*totalMultiplier(generatorMultipliers[7], generatorExponent[7]))/60;
  return gain;
}

function octagonGainPerUpdate(){
  var gain = (generatorArray[8]*totalMultiplier(generatorMultipliers[8], generatorExponent[8]))/60;
  return gain;
}

function nonagonGainPerUpdate(){
  var gain = (generatorArray[9]*totalMultiplier(generatorMultipliers[9], generatorExponent[9]))/60;
  return gain;
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

function checkRow2LineUpgrades(totalLines){
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

function checkRow2TriangleUpgrades(totalTriangles){
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
  $("#currencyPS").text("Cardinals/Sec: " + (toENotation(currencyGainPerUpdate()*60)));
  $("#pointsPS").text("Points/Sec: " + (toENotation(pointGainPerUpdate()*60)));
  $("#linesPS").text("Lines/Sec: " + (toENotation(lineGainPerUpdate()*60)));
  $("#trianglePS").text("Triangles/Sec: " + (toENotation(triangleGainPerUpdate()*60)));
  $("#squarePS").text("Squares/Sec: " + (toENotation(squareGainPerUpdate()*60)));
  $("#pentagonPS").text("Pentagons/Sec: " + (toENotation(pentagonGainPerUpdate()*60)));
  $("#hexagonPS").text("Hexagons/Sec: " + (toENotation(hexagonGainPerUpdate()*60)));
  $("#heptagonPS").text("Heptagons/Sec: " + (toENotation(heptagonGainPerUpdate()*60)));
  $("#octagonPS").text("Octagons/Sec: " + (toENotation(octagonGainPerUpdate()*60)));
  $("#nonagonPS").text("Nonagons/Sec: " + (toENotation(nonagonGainPerUpdate()*60)));

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
  updateNonagons(); // update shapes top to bottom because nonagons give octagons p/s, octagons give heptagons p/s etc
  updateOctagons();
  updateHeptagons();
  updateHexagons();
  updatePentagons();
  updateSquares();
  updateTriangles();
  updateLines();
  updatePoints();
  updateCurrency();
}

setInterval(loop, 16)
function loop(){
  update();
  updateDisplay();
  checkCanPrestige();
}
