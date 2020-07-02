var pointTree = {id:"pointUpgrade1", name:"node1", parent:{}, cost: 50, desc: "Point upgrade 1: Increases the output of Points by 1.5x", child:{
  id:"pointUpgrade2", name:"node2", parent:"node1", cost: 50, desc:"Increases the output of points by another 1.5x", child:{
    id:"pointUpgrade3", name:"node3", parent:"node2", cost: 50, desc:"Increases the output of points by 3x", child:[{
      id:"pointUpgrade4", name:"node4", parent:"node3", cost: 50, desc:"Increases the output of points by 0.1x per Point bought", child:{
        id:"pointUpgrade5", name:"node5", parent:"node4", cost: 50, desc:"Increases the output of points by", child:{
          id:"pointUpgrade6", name:"node6", parent:"node5", cost: 50, desc:"Increases the output of points by", child:{}
        }
      }
    },{
      id:"pointUpgrade7", name:"node7", parent:"node3", cost: 50, desc:"Increases the output of points by", child:{
        id:"pointUpgrade8", name:"node8", parent:"node7", cost: 50, desc:"Increases the output of points by", child:{
          id:"pointUpgrade9", name:"node9", parent:"node8", cost: 50, desc:"Increases the output of points by", child:{}
        }
      }
    }]
  }
}};

function searchTreeForID(id, tree, savedSpot){
  if(tree == null){
    return null;
  }
  if(tree.id == id){
    return tree;
  }
  if(tree.name == "node3"){
    if(tree.id != id){
      return searchTreeForID(id, tree.child[0], tree);
    }
  }
  if(tree.name == "node6"){
    if(tree.id != id){
      return searchTreeForID(id, savedSpot.child[1], savedSpot);
    }
  }
  if(tree.id != id){
    return searchTreeForID(id, tree.child, savedSpot);
  }
}
