var generatorArray =[0,0,0,0,0,0,0,0,0,0]; // Start with 0 of each initial generator
var generatorBaseCostArray =[1,1e2,1e4,1e6,1e8,1e10,1e12,1e14,1e16,1e18];
var playerCurrency = 1

function determineGeneratorCost(i) {
  var cost = 2.1**generatorArray[i]*generatorBaseCostArray[i];
  return cost;
}

function buyGenerator(i){ //Try to buy generator according to resourcesArray
  var generatorCost = determineGeneratorCost(i) // cost of generator
  if (playerCurrency>=generatorCost) {
    generatorArray[i]+=1;
    playerCurrency-=generatorCost;
    $("#point").text("Points: " + generatorArray[i]); // Update how many point generators player has

    var newGeneratorCost = determineGeneratorCost(i); // calculate cost of next generator
    $("#buyPointButton").text("Cost: " + newGeneratorCost.toFixed(0)); // update text value of button

    var currencyPerSecond = currencyGainPerUpdate(0)*60; // currency gain per update is determined by points (0th index), *60 to get per second
    $("#currencyPS").text("Cardinals/Sec: " + currencyPerSecond.toFixed(2));
  }
  else{
    console.log("you can't afford that!");
  }
}

function currencyGainPerUpdate(i){ // game runs at 60 updates per second, so to get gain per update we divide by 60
  var gain = (generatorArray[i])/60
  return gain;
}

function updateCurrency(){ // points generate currency - calculate and update html every update
  var gain = currencyGainPerUpdate(0);
  playerCurrency += gain;
  $("#CardinalCurrency").text("Cardinals: " + playerCurrency.toFixed(3)); //update the html with the amount of currency the player has
}

function updatePoints(){
  var gain = currencyGainPerUpdate(0);

}

function update(){ // update all aspects of the game
  updateCurrency();
  if (generatorArray[0] >= 5) { // if the player has 5 Points, show the next generator
    $("#lineWrapper").show();
  }
}
setInterval(loop, 16)
function loop(){
  update();
}
