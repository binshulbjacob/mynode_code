var mysql= require('mysql');
var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"study1"

});
 
con.connect(function(err){
 if (err) throw err;
 console.log("connected!");


 var sql="INSERT INTO book(id, name,address,pincode,phone) VALUE?";
   var values=[
[1,'binshul','villa','9852','9847992841'],
   ];

   con.query(sql,[values], function(err,result){
       if (err) throw err;
    console.log("number of records inserted:"+result.insertId);
   });
});