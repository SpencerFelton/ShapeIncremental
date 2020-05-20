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

function currencyGainPerUpdate(){ // game runs at 60 updates per second, so to get gain per update we divide point gains by 60 and any upgrades
  var gain = (generatorArray[0]*generatorMultipliers[0])/60;
  return gain;
}

function pointGainPerUpdate(){
  var gain = (generatorArray[1])/60;
  return gain;
}

function updateCurrency(){ // points generate currency - calculate and update html every update
  var gain = currencyGainPerUpdate();
  playerCurrency += gain;
}

function updatePoints(){
  var gain = pointGainPerUpdate();
  generatorArray[0] += gain;
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
  $("#CardinalCurrency").text("Cardinals: " + playerCurrency.toFixed(2));
  $("#point").text("Points: " + generatorArray[0].toFixed(0));
  $("#line").text("Lines: " + generatorArray[1].toFixed(0));

  $("#buyPointButton").text("Cost: " + generatorCurrentCostArray[0].toFixed(0));
  $("#buyLineButton").text("Cost: " + generatorCurrentCostArray[1].toFixed(0));

  $("#currencyPS").text("Cardinals/Sec: " + (currencyGainPerUpdate()*60).toFixed(2));
  $("#pointsPS").text("Points/Sec: " + (pointGainPerUpdate()*60).toFixed(2));

  if(generatorArray[0] >= 5) {
    $("#upgradeShopWrapper").show();
  }
  if (generatorArray[0] >= 10) { // if the player has 5 Points, show the next generator
    $("#lineWrapper").show();
  }
  checkUpgrades();
}

function update(){ // update all aspects of the game
  updateCurrency();
  updatePoints();

}

setInterval(loop, 16)
function loop(){
  update();
  updateDisplay();


}
