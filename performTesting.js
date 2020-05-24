function makeTestArray(){
  testGeneratorArray = [];
  for(var i = 0; i<generatorArray.length; i++){
    testGeneratorArray[i] = generatorArray[i];
  }
  return testGeneratorArray
}

function updateOnce(testGeneratorArray){
  testGeneratorArray[8]+=testGeneratorArray[9];
  testGeneratorArray[7]+=testGeneratorArray[8];
  testGeneratorArray[6]+=testGeneratorArray[7];
  testGeneratorArray[5]+=testGeneratorArray[6];
  testGeneratorArray[4]+=testGeneratorArray[5];
  testGeneratorArray[3]+=testGeneratorArray[4];
  testGeneratorArray[2]+=testGeneratorArray[3];
  testGeneratorArray[1]+=testGeneratorArray[2];
  testGeneratorArray[0]+=testGeneratorArray[1];
  console.log(testGeneratorArray[0]);
  return(testGeneratorArray[0]);
}


function repeatedUpdate(timesToUpdate){
  testGeneratorArray = makeTestArray();
  for(var i = 0; i<timesToUpdate; i++){
    updateOnce(testGeneratorArray);
  }
  alert();
}
