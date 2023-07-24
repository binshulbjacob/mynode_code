
var fs  = require('fs');
fs.writeFile("writeFile.txt","hai how are you binshul", function(error){
    if(error){
        console.log("unable to write");
    }
})
