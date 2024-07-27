const mysql=require('mysql');

const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'sharwan_db',
    password:''
});

conn.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL server.');
  });


module.exports=conn;