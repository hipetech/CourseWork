const mysql = require('mysql');

const clientConnection = mysql.createConnection({
    host: 'localhost',
    user: 'client',
    password: 'passwd',
    database: 'computer_service'
});

const serviceManConnection = mysql.createConnection({
    host: 'localhost',
    user: 'client',
    password: 'passwd',
    database: 'computer_service'
});






// clientConnection.connect((err) => {
//     if (err) {
//         console.error('error connecting: ' + err.stack)
//     }
//     console.log('connected as id ' + clientConnection.threadId);
// })

// clientConnection.query('select * from client', (error, results, fields) => {
//     if (error) throw error;
//     console.log(results)
// });

export {clientConnection};