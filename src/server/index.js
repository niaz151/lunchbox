var express = require('express')
var mysql = require('mysql')
const app = express()

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
  else{
    console.log('I Connected')
  }
})


app.get('/', (req,res) => {
  res.send('Backend Connection Established')
})


app.get('/getBranchIds', (req,res) => {

  const query = `SELECT branch_id FROM branches`
  
  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json({
        ids:results
      })
    }
  })
})



app.get('/getHours', (req,res) => {

  const {branch_id} = req.query
  const query = `SELECT hours FROM branches WHERE branch_id = ${branch_id}`
  
  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json({
        hours:results[0].hours
      })
    }
  })
})


app.get('/getName', (req,res) => {

  const {branch_id} = req.query
  const query = `SELECT name FROM branches WHERE branch_id = ${branch_id}`

  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json({
        name:results[0].name
      })
    }
  })
})


app.get('/getAddress', (req,res) => {

  const {branch_id} = req.query
  const query = `SELECT address FROM branches WHERE branch_id = ${branch_id}`

  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json({
       address:results[0].address
      })
    }
  })
})


app.get('/getPhoneNumber', (req,res) => {

  const {branch_id} = req.query
  const query = `SELECT phone_num FROM branches WHERE branch_id = ${branch_id}`

  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json({
        phone_number:results[0].phone_num
      })
    }
  })
})


app.get('/getZipCode', (req,res) => {

  const {branch_id} = req.query
  const query = `SELECT zip_code FROM branches WHERE branch_id = ${branch_id}`

  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json({
        zip_code:results[0].zip_code
      })
    }
  })
})


app.get('/getState', (req,res) => {

  const {branch_id} = req.query
  const query = `SELECT state FROM branches WHERE branch_id = ${branch_id}`

  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json({
        state:results[0].state
      })
    }
  })
})


app.get('/getCity', (req,res) => {

  const {branch_id} = req.query
  const query = `SELECT city FROM branches WHERE branch_id = ${branch_id}`

  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json({
        city:results[0].city
      })
    }
  })
})


app.listen('3001', () => {
  console.log('server started on port 3001')
})
