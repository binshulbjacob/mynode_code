var mysql=require('mysql');
var con=mysql.createConnection({
   host:"127.0.0.1",
   user:"root",
   password:"",
   database:"study1"
});
con.connect(function(err){
  if(err) throw err;
  console.log("database connect!");

  var sql="CREATE TABLE user(id int(10) primary key auto_increment, name VARCHAR(255), favourite_product VARCHAR(255))";
   con.query(sql,function(err,result){
    console.log("database created!")
   });
});