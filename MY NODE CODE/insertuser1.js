var mysql=require('mysql');
var con =mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"study1"
})

con.connect(function(err){
 if(err) throw err;
  console.log("connected");

  var sql="INSERT INTO user(id, name,favourite_product) VALUES ?";
  var values=[
    ['100','rahul','2'],
        ['101','manu','1'],
        ['102','vishnu','3'],
        ['103','mahesh','2'],
        ['104','hari','4'],
  ];

  con.query(sql,[values], function(err,result){
    if (err) throw err;
    console.log("number of records inserted:"+ result.affectedRows)

  });


});