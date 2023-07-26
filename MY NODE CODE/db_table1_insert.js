var mysql=require('mysql');
var con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"study1",
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
    var sql="CREATE TABLE subject (physics VARCHAR(255), chemistry VARCHAR(255) , biology VARCHAR(255) , social VARCHAR(255))";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("table created");


    });
});