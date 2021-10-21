const graph = initializeGraph();

const a1 = graph.addNode(null, null, new Tags().override(fromObject({"name":"Hamid","age":26,"favColors":[[5,133,5],[170,47,47],"Yellow"],"__relation_id":1,"text":{"text":"Hamid"},"x":174,"y":90})));
const a2 = graph.addNode(null, null, new Tags().override(fromObject({"name":"Laura","age":12,"favColors":[[255,255,255],"Silver"],"__relation_id":3,"text":{"text":"Laura"},"x":251,"y":292,"immediateFriend":"Laura"})));
const a3 = graph.addNode(null, null, new Tags().override(fromObject({"name":"Victoria","age":37,"favColors":[[133,5,133],[5,162,201]],"__relation_id":4,"text":{"text":"Victoria"},"x":445,"y":383,"immediateFriend":"Victoria"})));
const a4 = graph.addNode(null, null, new Tags().override(fromObject({"name":"John","age":31,"favColors":[[260,170,5],[260,197,208],"Violet","Taupe"],"__relation_id":2,"text":{"text":"John"},"x":560,"y":216})));


graph.addEdge(a1, a2);
graph.addEdge(a1, a3);
graph.addEdge(a2, a3);
graph.addEdge(a3, a2);
graph.addEdge(a3, a4);
