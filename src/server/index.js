var express = require('express')
var mysql = require('mysql')


const db = mysql.createConnection({
  host: 'database-2.c71ki1wt4h39.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'lunchbox123',
  database: 'test_db'
})

db.connect( (err) => {
  
  if(err){
    console.log('CONNECT ERR: ' + err)
  }
  
  db.query('SELECT * FROM stores', (err,results,fields) => {
    if(err){
      console.log('QUERY ERR: ' + err)
    }
    console.log(results[0].name)
  })
})

const app = express()

app.listen('3001', () => {
  console.log('server started on port 3001')
})