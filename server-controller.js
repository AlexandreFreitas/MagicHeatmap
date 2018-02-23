
const socket = new (require("./ServerSocket.js"))();
const exec = require('child_process').exec;


//Controller
socket.on("createTest", function(socket, msg){
    console.log(msg);

    exec('java -jar C:\\Users\\Gustavo\\IdeaProjects\\Tribe_Code\\out\\artifacts\\Tribe_Code_jar\\Tribe_Code.jar '+msg+".txt", function(err, data) {
        console.log(err);
        console.log(data.toString());
    });

}).on("db.webservice.open", function(socket, msg){
    console.log(msg);
});
console.log(socket.callbacks);