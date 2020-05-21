var generatorArray =[0,0,0,0,0,0,0,0,0,0]; // Start with 0 of each initial generator
var generatorBaseCostArray =[1,1e2,1e4,1e6,1e8,1e10,1e12,1e14,1e16,1e18];
var generatorCurrentCostArray =[1,1e2,1e4,1e6,1e8,1e10,1e12,1e14,1e16,1e18];
var generatorMultipliers = [1,1,1,1,1,1,1,1,1,1]
var pointUpgradesPurchased = [false, false, false, false, false, false, false, false, false, false, false] // index corresponding to number of upgrade, [0] = upgrade1 etc
var playerCurrency = 1

function nextGeneratorCost(i) {
  nextCost = 1+generatorCurrentCostArray[i]*1.7;
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
  var gain = (generatorArray[0]*generatorMultipliers[0])/60;
  return gain;
}

function pointGainPerUpdate(){ // points are the first tier of production, but their gain is dependent on lines, hence we check the 2nd index of the array
  var gain = (generatorArray[1])/60;
  return gain;
}

function lineGainPerUpdate(){
  var gain = (generatorArray[2]/60);
  return gain;
}

function triangleGainPerUpdate(){
  var gain = generatorArray[3]/60;
  return gain;
}

function squareGainPerUpdate(){
  var gain = generatorArray[4]/60;
  return gain;
}

function pentagonGainPerUpdate(){
  var gain = generatorArray[5]/60;
  return gain;
}

function hexagonGainPerUpdate(){
  var gain = generatorArray[6]/60;
  return gain;
}

function heptagonGainPerUpdate(){
  var gain = generatorArray[7]/60;
  return gain;
}

function octagonGainPerUpdate(){
  var gain = generatorArray[8]/60;
  return gain;
}

function nonagonGainPerUpdate(){
  var gain = generatorArray[9]/60;
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




function checkUpgrades(){
  if (generatorArray[0] >= 5 && pointUpgradesPurchased[0] == false) {
    $("#pointUpgrade1").show();
  }
  if (generatorArray[0] >= 25 && pointUpgradesPurchased[1] == false) {
    $("#pointUpgrade2").show();
  }
  if (generatorArray[0] >= 500 && pointUpgradesPurchased[2] == false) {
    $("#pointUpgrade3").show();
  }
}

function updateDisplay(){
  $("#CardinalCurrency").text("Cardinals: " + toENotation(playerCurrency));
  $("#point").text("Points: " + toENotation(generatorArray[0]));
  $("#line").text("Lines: " + toENotation(generatorArray[1]));
  $("#triangle").text("Triangles: " + toENotation(generatorArray[2]));
  $("#square").text("Squares: " + toENotation(generatorArray[3]));
  $("#pentagon").text("Pentagons: " + toENotation(generatorArray[4]));
  $("#hexagon").text("Hexagons: " + toENotation(generatorArray[5]));
  $("#heptagon").text("Heptagons: " + toENotation(generatorArray[6]));
  $("#octagon").text("Octagons: " + toENotation(generatorArray[7]));
  $("#nonagon").text("Nonagons: " + toENotation(generatorArray[8]));
  $("#decagon").text("Decagons: " + toENotation(generatorArray[9]));

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

  //Generator Checks
  //Point checks
  if(generatorArray[0] >= 5) {
    $("#upgradeShopWrapper").show();
  }
  if (generatorArray[0] >= 10) { // if the player has 5 Points, show the next generator
    $("#lineWrapper").show();
  }
  //Line checks
  if(generatorArray[1] >= 5) {
    $("#triangleWrapper").show();
  }
  //triangle checks
  if(generatorArray[2] >= 5){
    $("#squareWrapper").show();
  }
  //Square Checks
  if(generatorArray[3] >= 5){
    $("#pentagonWrapper").show();
  }
  //Pentagon checks
  if(generatorArray[4] >= 5){
    $("#hexagonWrapper").show();
  }
  //Hexagon checks
  if(generatorArray[5] >= 5){
    $("#heptagonWrapper").show();
  }
  //Heptagon checks
  if(generatorArray[6] >= 5){
    $("#octagonWrapper").show();
  }
  //Octagon checks
  if(generatorArray[7] >= 5){
    $("#nonagonWrapper").show();
  }
  //Nonagon checks
  if(generatorArray[8] >= 5){
    $("#decagonWrapper").show();
  }
  checkUpgrades();
}

function update(){ // update all aspects of the game
  updateCurrency();
  updatePoints();
  updateLines();
  updateTriangles();
  updateSquares();
  updatePentagons();
  updateHexagons();
  updateHeptagons();
  updateOctagons();
  updateNonagons();
}

setInterval(loop, 16)
function loop(){
  update();
  updateDisplay();


}
