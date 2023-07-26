var mysql=require('mysql');
var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"study1",

});
 
con.connect(function(err){
    if(err) throw err;
    console.log("database connected");

    var sql="CREATE TABLE book( id int(10) primary key auto_increment,name VARCHAR(255) , address VARCHAR(255) , pincode VARCHAR(255) , phone VARCHAR(255))";
    con.query(sql,function(err,result){
        console.log("TABLE CREATED!")

    });

});