var pointTree = {name:"node1", parent:{}, desc: "Point upgrade 1: Doubles the output of Points.", child:{
  name:"node2", parent:"node1", desc:"", child:{}
}};

var pointUpgradesPurchased = [false, false, false, [false,false,false], [false,false,false]]; // index corresponding to number of upgrade, [0] = upgrade1 etc
var lineUpgradesPurchased = [];
var triangleUpgradesPurchased = [];
var squareUpgradesPurchased = [];
var pentagonUpgradesPurchased = [];
var hexagonUpgradesPurchased = [];
var heptagonUpgradesPurchased = [];
var octagonUpgradesPurchased = [];
var nonagonUpgradesPurchased = [];
var decagonUpgradesPurchased = [];
