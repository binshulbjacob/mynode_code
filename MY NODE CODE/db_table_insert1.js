var mysql = require('mysql');
var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"study1"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected!");

    var sql="INSERT INTO subject(physics,chemistry, biology,social) VALUE ? ";
    var VALUES=[
        ['10','20','30','40'],
    ];

    con.query(sql,[VALUES],function(err,result){
        if (err) throw err;
        console.log("number of records inserted:"+ result.insertId )

    });

});