var generatorArray = [0,0,0,0,0,0,0,0,0,0]; // Start with 0 of each initial generator
var freeGeneratorArray = [0,0,0,0,0,0,0,0,0,0]; //no free generators to start with
var generatorBaseCostArray =[1,1,1,1,1,1,1,1,1,1];
var generatorCurrentCostArray =[1,50,2500,125000,6250000,312500000,15625000000,781250000000,39062500000000,1953125000000000];
var generatorBaseContributionArray = [1,5,25,125,625,3125,15625,78125,3906256,1953125]
var generatorMultipliers = [1,1,1,1,1,1,1,1,1,1]; //
var generatorExponent = [1,1,1,1,1,1,1,1,1,1];

var pointUpgrades = [false,false,false,false,false, false, false, false, false]


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

function getTotalGenerators(i){
  return generatorArray[i] + freeGeneratorArray[i];
}

// Gain per update functions - gain dependent on the generator above them, or i+1
function currencyGainPerUpdate(){ // game runs at 60 updates per second, so to get gain per update we divide point gains by 60 and any upgrades
  return pointContributionPerUpdate() + lineContributionPerUpdate() + triangleContributionPerUpdate() + squareContributionPerUpdate() + pentagonContriubtionPerUpdate() + hexagonContributionPerUpdate() + heptagonContributionPerUpdate() + octagonContributionPerUpdate() + nonagonContributionPerUpdate() + decagonContributionPerUpdate();
}

function gen1Up3(){
  if(pointUpgrades[3]){
    return generatorArray[0]*0.1;
  }
  return 1
}

function gen1Up5(){
  if(pointUpgrades[4]){
    var multOf10 = Math.floor(getTotalGenerators(0)/10);
    for(var i=0; i<10; i++){
      freeGeneratorArray[i] = multOf10;
    }
  }
}

function pointContributionPerUpdate(){ // points are the first tier of production, but their gain is dependent on lines, hence we check the 2nd index of the array
  gen1Up5();
  var contribution = (getTotalGenerators(0) * ((generatorBaseContributionArray[0] * generatorMultipliers[0] * gen1Up3())**generatorExponent[0]))/60;
  return contribution;
}

function lineContributionPerUpdate(){
  var contribution = (getTotalGenerators(1) * ((generatorBaseContributionArray[1] * generatorMultipliers[1])**generatorExponent[1]))/60;
  return contribution;
}

function triangleContributionPerUpdate(){
  var contribution = (getTotalGenerators(2) * ((generatorBaseContributionArray[2] * generatorMultipliers[2])**generatorExponent[2]))/60;
  return contribution;
}

function squareContributionPerUpdate(){
  var contribution = (getTotalGenerators(3) * ((generatorBaseContributionArray[3] * generatorMultipliers[3])**generatorExponent[3]))/60;
  return contribution;
}

function pentagonContriubtionPerUpdate(){
  var contribution = (getTotalGenerators(4) * ((generatorBaseContributionArray[4] * generatorMultipliers[4])**generatorExponent[4]))/60;
  return contribution;
}

function hexagonContributionPerUpdate(){
  var contribution = (getTotalGenerators(5) * ((generatorBaseContributionArray[5] * generatorMultipliers[5])**generatorExponent[5]))/60;
  return contribution;
}

function heptagonContributionPerUpdate(){
  var contribution = (getTotalGenerators(6) * ((generatorBaseContributionArray[6] * generatorMultipliers[6])**generatorExponent[6]))/60;
  return contribution;
}

function octagonContributionPerUpdate(){
  var contribution = (getTotalGenerators(7) * ((generatorBaseContributionArray[7] * generatorMultipliers[7])**generatorExponent[7]))/60;
  return contribution;
}

function nonagonContributionPerUpdate(){
  var contribution = (getTotalGenerators(8) * ((generatorBaseContributionArray[8] * generatorMultipliers[8])**generatorExponent[0]))/60;
  return contribution;
}

function decagonContributionPerUpdate(){
  var contribution = (getTotalGenerators(9) * ((generatorBaseContributionArray[9] * generatorMultipliers[9])**generatorExponent[9]))/60;
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
  $("#decagon").text("Decagons: " + toENotation(getTotalGenerators(9)));
  $("#nonagon").text("Nonagons: " + toENotation(getTotalGenerators(8)));
  $("#octagon").text("Octagons: " + toENotation(getTotalGenerators(7)));
  $("#heptagon").text("Heptagons: " + toENotation(getTotalGenerators(6)));
  $("#hexagon").text("Hexagons: " + toENotation(getTotalGenerators(5)));
  $("#pentagon").text("Pentagons: " + toENotation(getTotalGenerators(4)));
  $("#square").text("Squares: " + toENotation(getTotalGenerators(3)));
  $("#triangle").text("Triangles: " + toENotation(getTotalGenerators(2)));
  $("#line").text("Lines: " + toENotation(getTotalGenerators(1)));
  $("#point").text("Points: " + toENotation(getTotalGenerators(0)));
  $("#CardinalCurrency").text("Cardinals: " + toENotation(playerCurrency));

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
