var mysql=require('mysql');
var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"study1"
});
con.connect(function(err){
  if(err) throw err;
  var sql ="SELECT user.name AS user, product.product AS favourite FROM user JOIN product ON user.favourite_product =product.id";
   con.query(sql , function(err,result){
      console.log(result);

   });
});