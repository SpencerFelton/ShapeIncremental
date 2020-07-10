var pointTree = {id:"pointUpgrade1", name:"node1", parent:{}, cost: 50, desc: "Point upgrade 1: +1 to the base output of Points", child:{
  id:"pointUpgrade2", name:"node2", parent:"node1", cost: 500, desc:"Multiplies Point output by 2x", child:{
    id:"pointUpgrade3", name:"node3", parent:"node2", cost: 5000, desc:"Multiplies Point output by 3x", child:[{
      id:"pointUpgrade4", name:"node4", parent:"node3", cost: 50000, desc:"Multiplies Point output by 0.1x per Point bought (retroactive)", child:{
        id:"pointUpgrade5", name:"node5", parent:"node4", cost: 500000, desc:"For each multiple of 10 points, gain 1 free generator for each tier", child:{
          id:"pointUpgrade6", name:"node6", parent:"node5", cost: 5000000, desc:"Square Point output", child:{}
        }
      }
    },{
      id:"pointUpgrade7", name:"node7", parent:"node3", cost: 50000, desc:"Increases the output of points by", child:{
        id:"pointUpgrade8", name:"node8", parent:"node7", cost: 500000, desc:"Increases the output of points by", child:{
          id:"pointUpgrade9", name:"node9", parent:"node8", cost: 5000000, desc:"Increases the output of points by", child:{}
        }
      }
    }]
  }
}};

var lineTree = {id:"lineUpgrade1", name:"node1", parent:{}, cost: 50, desc: "Line upgrade 1: Increases the output of Lines by 1.5x", child:{
  id:"lineUpgrade2", name:"node2", parent:"node1", cost: 50, desc:"Increases the output of Lines by another 1.5x", child:{
    id:"lineUpgrade3", name:"node3", parent:"node2", cost: 50, desc:"Increases the output of Lines by 3x", child:[{
      id:"lineUpgrade4", name:"node4", parent:"node3", cost: 50, desc:"Increases the output of Lines by 0.1x per Line bought", child:{
        id:"lineUpgrade5", name:"node5", parent:"node4", cost: 50, desc:"Increases the output of Lines by", child:{
          id:"lineUpgrade6", name:"node6", parent:"node5", cost: 50, desc:"Increases the output of Lines by", child:{}
        }
      }
    },{
      id:"lineUpgrade7", name:"node7", parent:"node3", cost: 50, desc:"Increases the output of Lines by", child:{
        id:"lineUpgrade8", name:"node8", parent:"node7", cost: 50, desc:"Increases the output of Lines by", child:{
          id:"lineUpgrade9", name:"node9", parent:"node8", cost: 50, desc:"Increases the output of Lines by", child:{}
        }
      }
    }]
  }
}};

var triangleTree = {id:"triangleUpgrade1", name:"node1", parent:{}, cost: 50, desc: "triangle upgrade 1: Increases the output of triangles by 1.5x", child:{
  id:"triangleUpgrade2", name:"node2", parent:"node1", cost: 50, desc:"Increases the output of triangles by another 1.5x", child:{
    id:"triangleUpgrade3", name:"node3", parent:"node2", cost: 50, desc:"Increases the output of triangles by 3x", child:[{
      id:"triangleUpgrade4", name:"node4", parent:"node3", cost: 50, desc:"Increases the output of triangles by 0.1x per triangle bought", child:{
        id:"triangleUpgrade5", name:"node5", parent:"node4", cost: 50, desc:"Increases the output of triangles by", child:{
          id:"triangleUpgrade6", name:"node6", parent:"node5", cost: 50, desc:"Increases the output of triangles by", child:{}
        }
      }
    },{
      id:"triangleUpgrade7", name:"node7", parent:"node3", cost: 50, desc:"Increases the output of triangles by", child:{
        id:"triangleUpgrade8", name:"node8", parent:"node7", cost: 50, desc:"Increases the output of triangles by", child:{
          id:"triangleUpgrade9", name:"node9", parent:"node8", cost: 50, desc:"Increases the output of triangles by", child:{}
        }
      }
    }]
  }
}};

var squareTree = {id:"squareUpgrade1", name:"node1", parent:{}, cost: 50, desc: "square upgrade 1: Increases the output of squares by 1.5x", child:{
  id:"squareUpgrade2", name:"node2", parent:"node1", cost: 50, desc:"Increases the output of squares by another 1.5x", child:{
    id:"squareUpgrade3", name:"node3", parent:"node2", cost: 50, desc:"Increases the output of squares by 3x", child:[{
      id:"squareUpgrade4", name:"node4", parent:"node3", cost: 50, desc:"Increases the output of squares by 0.1x per square bought", child:{
        id:"squareUpgrade5", name:"node5", parent:"node4", cost: 50, desc:"Increases the output of squares by", child:{
          id:"squareUpgrade6", name:"node6", parent:"node5", cost: 50, desc:"Increases the output of squares by", child:{}
        }
      }
    },{
      id:"squareUpgrade7", name:"node7", parent:"node3", cost: 50, desc:"Increases the output of squares by", child:{
        id:"squareUpgrade8", name:"node8", parent:"node7", cost: 50, desc:"Increases the output of squares by", child:{
          id:"squareUpgrade9", name:"node9", parent:"node8", cost: 50, desc:"Increases the output of squares by", child:{}
        }
      }
    }]
  }
}};

var pentagonTree = {id:"pentagonUpgrade1", name:"node1", parent:{}, cost: 50, desc: "pentagon upgrade 1: Increases the output of pentagons by 1.5x", child:{
  id:"pentagonUpgrade2", name:"node2", parent:"node1", cost: 50, desc:"Increases the output of pentagons by another 1.5x", child:{
    id:"pentagonUpgrade3", name:"node3", parent:"node2", cost: 50, desc:"Increases the output of pentagons by 3x", child:[{
      id:"pentagonUpgrade4", name:"node4", parent:"node3", cost: 50, desc:"Increases the output of pentagons by 0.1x per pentagon bought", child:{
        id:"pentagonUpgrade5", name:"node5", parent:"node4", cost: 50, desc:"Increases the output of pentagons by", child:{
          id:"pentagonUpgrade6", name:"node6", parent:"node5", cost: 50, desc:"Increases the output of pentagons by", child:{}
        }
      }
    },{
      id:"pentagonUpgrade7", name:"node7", parent:"node3", cost: 50, desc:"Increases the output of pentagons by", child:{
        id:"pentagonUpgrade8", name:"node8", parent:"node7", cost: 50, desc:"Increases the output of pentagons by", child:{
          id:"pentagonUpgrade9", name:"node9", parent:"node8", cost: 50, desc:"Increases the output of pentagons by", child:{}
        }
      }
    }]
  }
}};

var hexagonTree = {id:"hexagonUpgrade1", name:"node1", parent:{}, cost: 50, desc: "hexagon upgrade 1: Increases the output of hexagons by 1.5x", child:{
  id:"hexagonUpgrade2", name:"node2", parent:"node1", cost: 50, desc:"Increases the output of hexagons by another 1.5x", child:{
    id:"hexagonUpgrade3", name:"node3", parent:"node2", cost: 50, desc:"Increases the output of hexagons by 3x", child:[{
      id:"hexagonUpgrade4", name:"node4", parent:"node3", cost: 50, desc:"Increases the output of hexagons by 0.1x per hexagon bought", child:{
        id:"hexagonUpgrade5", name:"node5", parent:"node4", cost: 50, desc:"Increases the output of hexagons by", child:{
          id:"hexagonUpgrade6", name:"node6", parent:"node5", cost: 50, desc:"Increases the output of hexagons by", child:{}
        }
      }
    },{
      id:"hexagonUpgrade7", name:"node7", parent:"node3", cost: 50, desc:"Increases the output of hexagons by", child:{
        id:"hexagonUpgrade8", name:"node8", parent:"node7", cost: 50, desc:"Increases the output of hexagons by", child:{
          id:"hexagonUpgrade9", name:"node9", parent:"node8", cost: 50, desc:"Increases the output of hexagons by", child:{}
        }
      }
    }]
  }
}};

var heptagonTree = {id:"heptagonUpgrade1", name:"node1", parent:{}, cost: 50, desc: "heptagon upgrade 1: Increases the output of heptagons by 1.5x", child:{
  id:"heptagonUpgrade2", name:"node2", parent:"node1", cost: 50, desc:"Increases the output of heptagons by another 1.5x", child:{
    id:"heptagonUpgrade3", name:"node3", parent:"node2", cost: 50, desc:"Increases the output of heptagons by 3x", child:[{
      id:"heptagonUpgrade4", name:"node4", parent:"node3", cost: 50, desc:"Increases the output of heptagons by 0.1x per heptagon bought", child:{
        id:"heptagonUpgrade5", name:"node5", parent:"node4", cost: 50, desc:"Increases the output of heptagons by", child:{
          id:"heptagonUpgrade6", name:"node6", parent:"node5", cost: 50, desc:"Increases the output of heptagons by", child:{}
        }
      }
    },{
      id:"heptagonUpgrade7", name:"node7", parent:"node3", cost: 50, desc:"Increases the output of heptagons by", child:{
        id:"heptagonUpgrade8", name:"node8", parent:"node7", cost: 50, desc:"Increases the output of heptagons by", child:{
          id:"heptagonUpgrade9", name:"node9", parent:"node8", cost: 50, desc:"Increases the output of heptagons by", child:{}
        }
      }
    }]
  }
}};

var octagonTree = {id:"octagonUpgrade1", name:"node1", parent:{}, cost: 50, desc: "octagon upgrade 1: Increases the output of octagons by 1.5x", child:{
  id:"octagonUpgrade2", name:"node2", parent:"node1", cost: 50, desc:"Increases the output of octagons by another 1.5x", child:{
    id:"octagonUpgrade3", name:"node3", parent:"node2", cost: 50, desc:"Increases the output of octagons by 3x", child:[{
      id:"octagonUpgrade4", name:"node4", parent:"node3", cost: 50, desc:"Increases the output of octagons by 0.1x per octagon bought", child:{
        id:"octagonUpgrade5", name:"node5", parent:"node4", cost: 50, desc:"Increases the output of octagons by", child:{
          id:"octagonUpgrade6", name:"node6", parent:"node5", cost: 50, desc:"Increases the output of octagons by", child:{}
        }
      }
    },{
      id:"octagonUpgrade7", name:"node7", parent:"node3", cost: 50, desc:"Increases the output of octagons by", child:{
        id:"octagonUpgrade8", name:"node8", parent:"node7", cost: 50, desc:"Increases the output of octagons by", child:{
          id:"octagonUpgrade9", name:"node9", parent:"node8", cost: 50, desc:"Increases the output of octagons by", child:{}
        }
      }
    }]
  }
}};

var nonagonTree = {id:"nonagonUpgrade1", name:"node1", parent:{}, cost: 50, desc: "nonagon upgrade 1: Increases the output of nonagons by 1.5x", child:{
  id:"nonagonUpgrade2", name:"node2", parent:"node1", cost: 50, desc:"Increases the output of nonagons by another 1.5x", child:{
    id:"nonagonUpgrade3", name:"node3", parent:"node2", cost: 50, desc:"Increases the output of nonagons by 3x", child:[{
      id:"nonagonUpgrade4", name:"node4", parent:"node3", cost: 50, desc:"Increases the output of nonagons by 0.1x per nonagon bought", child:{
        id:"nonagonUpgrade5", name:"node5", parent:"node4", cost: 50, desc:"Increases the output of nonagons by", child:{
          id:"nonagonUpgrade6", name:"node6", parent:"node5", cost: 50, desc:"Increases the output of nonagons by", child:{}
        }
      }
    },{
      id:"nonagonUpgrade7", name:"node7", parent:"node3", cost: 50, desc:"Increases the output of nonagons by", child:{
        id:"nonagonUpgrade8", name:"node8", parent:"node7", cost: 50, desc:"Increases the output of nonagons by", child:{
          id:"nonagonUpgrade9", name:"node9", parent:"node8", cost: 50, desc:"Increases the output of nonagons by", child:{}
        }
      }
    }]
  }
}};

var decagonTree = {id:"decagonUpgrade1", name:"node1", parent:{}, cost: 50, desc: "decagon upgrade 1: Increases the output of decagons by 1.5x", child:{
  id:"decagonUpgrade2", name:"node2", parent:"node1", cost: 50, desc:"Increases the output of decagons by another 1.5x", child:{
    id:"decagonUpgrade3", name:"node3", parent:"node2", cost: 50, desc:"Increases the output of decagons by 3x", child:[{
      id:"decagonUpgrade4", name:"node4", parent:"node3", cost: 50, desc:"Increases the output of decagons by 0.1x per decagon bought", child:{
        id:"decagonUpgrade5", name:"node5", parent:"node4", cost: 50, desc:"Increases the output of decagons by", child:{
          id:"decagonUpgrade6", name:"node6", parent:"node5", cost: 50, desc:"Increases the output of decagons by", child:{}
        }
      }
    },{
      id:"decagonUpgrade7", name:"node7", parent:"node3", cost: 50, desc:"Increases the output of decagons by", child:{
        id:"decagonUpgrade8", name:"node8", parent:"node7", cost: 50, desc:"Increases the output of decagons by", child:{
          id:"decagonUpgrade9", name:"node9", parent:"node8", cost: 50, desc:"Increases the output of decagons by", child:{}
        }
      }
    }]
  }
}};

function searchTreeForID(id, tree, savedSpot){ // return a JSON object with specified ID in a given tree. optional argument of savedSpot which is used to traverse back up the tree
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
