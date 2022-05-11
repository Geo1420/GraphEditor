const addNodeButton = document.querySelector("#add-node-button");
const editNodeButton = document.querySelector("#edit-node-button");
const deleteNodeButton = document.querySelector("#delete-node-button");
const addEdgeButton = document.querySelector("#add-edge-button");
const editEdgeButton = document.querySelector("#edit-edge-button");
const deleteEdgeButton = document.querySelector("#delete-edge-button");

const displayErr = document.querySelector(".err");
const succesAction = document.querySelector(".succes");

addNodeButton.addEventListener("click", function () {addNode();});
editNodeButton.addEventListener("click", function() {editNode();});
deleteNodeButton.addEventListener("click", function() {deleteNode();});
addEdgeButton.addEventListener("click", function () {addEdge();});
editEdgeButton.addEventListener("click", function () {editEdge();});
deleteEdgeButton.addEventListener("click", function () {deleteEdge();});
var nodes, edges, network;

/*Add node function */
function addNode() {
    //We check if the input fields are empty
    try{
        if(document.getElementById("add-node-id").value == "" || document.getElementById("add-key-value").value == "")
        throw "Input fields are empty!"
    }
    catch(err){
        alert(err);
        return 0;
    }
    //We check if we have a node with the same value
    try{
        let found = false;
        nodes.forEach(node => {
      if(node.label == document.getElementById("add-key-value").value){
        found = true;
      }
    })
    if(found == true){
      throw "Key " + document.getElementById("add-key-value").value + " already exist";
    }
    }
    catch(err){
        alert(err);
        return 0;
    }
    //We add a new node in case it has not been added
    try{
        nodes.add({
            id: document.getElementById("add-node-id").value,
            label: document.getElementById("add-key-value").value,});

        succesAction.innerHTML = "Node added with succes!";
        succesAction.style.display="block";
        setTimeout(function() {succesAction.style.display="none"}, 3000);
    }catch(err){
        displayErr.innerHTML = "Node with id " + document.getElementById("add-node-id").value + " exists!";
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
    }
}
/*Edit node function */
function editNode(){
    //We check if the input fields are empty
    try{
        if(document.getElementById("edit-node-id").value == "" || document.getElementById("edit-key-value").value == ""){
            throw "Input fields are empty!"
        }
    }
    catch(err){
        alert(err);
        return 0;
    }
    /*we check if there is the id of the node we want to change*/
    try{
        let found = false;
        nodes.forEach(node =>{
            if(node.id == document.getElementById("edit-node-id").value)
            {
                found = true;
            }
        })
        if(found == false){
            throw "Node with id" + document.getElementById("edit-node-id").value + " not exist!"
        }
    }
    catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
        return 0;
    }

    /*we check that we do not have two nodes with the same value*/
    try{
        let found =  false;
        nodes.forEach(node =>{
            if(node.label == document.getElementById("edit-key-value").value)
            {
                found = true;
            }
        })
        if(found == true){
            throw "Key " + document.getElementById("edit-key-value").value + " already exist";
        }
    }
    catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
        return 0;
    }
    /*We add node changes*/
    try{
        nodes.update({
            id: document.getElementById("edit-node-id").value,
            label: document.getElementById("edit-key-value").value,
        })
        succesAction.innerHTML = "Node successfully modified!";
        succesAction.style.display="block";
        setTimeout(function() {succesAction.style.display="none"}, 3000);
    }
    catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
    }
}

/*Delete node function*/
function deleteNode(){
    /*We check if the input field is empty*/
    try{
        if(document.getElementById("delete-node-id").value == ""){
            throw "Input field is empty!"
        }
    }
    catch(err){
        alert(err);
        return 0;
    }
    /*We check if there are nodes with the id we want to delete */
    try{
        let found = false;
        nodes.forEach(node =>{
            if(node.id == document.getElementById("delete-node-id").value)
            {
                found = true;
            }
        })
        if(found == false){
            throw "Node with id " + document.getElementById("delete-node-id").value + " not exist!"
        }
    }
    catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
        return 0;
    }
    /*Delete node*/
    try{
        nodes.remove({id: document.getElementById("delete-node-id").value});
        succesAction.innerHTML = "Node successfully deleted!";
        succesAction.style.display="block";
        setTimeout(function() {succesAction.style.display="none"}, 3000);
    }
    catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
    }
}
/*Add edge function*/
function addEdge(){
    /*We check if the inputs fields are empty*/
    try{
        if(document.getElementById("add-edge-id").value == "" || document.getElementById("add-edge-value").value == ""
        || document.getElementById("add-edge-from").value == ""|| document.getElementById("add-edge-to").value == "" )
            throw "Input fields are empty!";
    }
    catch(err){
        alert(err);
        return 0;
    }
    /*For both fields we check if the node id is valid*/
    try{
        let found = false;
        nodes.forEach(node => {
            if(node.id == document.getElementById("add-edge-from").value){
                found = true;
            }
        })
        if(found == false){
            throw "Node with id " + document.getElementById("add-edge-from").value + " not exist.";
        }
    }
    catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
        return 0;
    }
    try{
        let found = false;
        nodes.forEach(node => {
            if(node.id == document.getElementById("add-edge-to").value){
                found = true;
            }
        })
        if(found == false){
            throw "Node with id " + document.getElementById("add-edge-to").value + " not exist.";
        }
    }
    catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
        return 0;
    }
    /*Add edge*/
    try{
        edges.add({
            id: document.getElementById("add-edge-id").value,
            from: document.getElementById("add-edge-from").value,
            to: document.getElementById("add-edge-to").value,
            label: document.getElementById("add-edge-value").value,
        })
        succesAction.innerHTML = "Edge added with succes!";
        succesAction.style.display="block";
        setTimeout(function() {succesAction.style.display="none"}, 3000);
    }
    catch(err){
        displayErr.innerHTML = "Edge with id " + document.getElementById("add-edge-id") + " exists!";
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
    }
}

/*Edit edge function*/
function editEdge(){
    /*We check if the inputs fields are empty*/
    try{
        if(document.getElementById("edit-edge-id").value == "" || document.getElementById("edit-edge-value").value == ""){
            throw "Input fields are empty!";
        }
    }catch(err){
        alert(err);
        return 0;
    }
    /*We check if the edge id exists to be changed*/
    try{
        let found = false;
        edges.forEach(edge =>{
            if(edge.id == document.getElementById("edit-edge-id").value){
                found = true;
            }
        })
        if(found == false){
            throw "Edge with id " + document.getElementById("edit-edge-id").value + " not exist!"
        }
    }catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
        return 0;
    }
    /*Change the edge value and id*/
    try{
        edges.update({
            id: document.getElementById("edit-edge-id").value,
            label: document.getElementById("edit-edge-value").value,
        })
        succesAction.innerHTML = "Edge successfully modified!";
        succesAction.style.display="block";
        setTimeout(function() {succesAction.style.display="none"}, 3000);
    }catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
    }
}

/*Delete edge function*/
function deleteEdge(){
    /*We check if the input field is empty*/
    try{
        if(document.getElementById("delete-edge-id").value == ""){
            throw "Input field is empty!"
        }
    }catch(err){
        alert(err);
        return 0;
    }
    /*We check if the edge id we want to delete exists */
    try{
        let found = false;
        edges.forEach(edge =>{
            if(edge.id == document.getElementById("delete-edge-id").value){
                found = true;
            }
        })
        if(found == false){
            throw "Edge with id " + document.getElementById("delete-edge-id").value + " not exist!"
        }
    }catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
        return 0;
    }
    /*Delete an edge from graph*/
    try{
        edges.remove({id: document.getElementById("delete-edge-id").value,});
        succesAction.innerHTML = "Edge successfully deleted!";
        succesAction.style.display="block";
        setTimeout(function() {succesAction.style.display="none"}, 3000);
    }catch(err){
        displayErr.innerHTML = err;
        displayErr.style.display = "block";
        setTimeout(function() {displayErr.style.display="none"}, 3000);
    }
}
/*We implement the graph view function using the vis.js library*/
function startNetwork() {
    // create an array with nodes
    nodes = new vis.DataSet();
  
    // create an array with edges
    edges = new vis.DataSet();
  
    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
      nodes: nodes,
      edges: edges,
    };
    var options = {};
    network = new vis.Network(container, data, options);
  }
  
startNetwork();
