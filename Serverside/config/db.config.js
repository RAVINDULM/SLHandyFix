const mysql = require('mysql');

// create here mysql connection

// const dbConn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',    
//     password: '',
//     database: 'slhandyfix_db'
// });

const dbConn = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6528677',
    password: '8Y2T8K1vfE',
    database: 'sql6528677'
});


dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})

module.exports = dbConn;