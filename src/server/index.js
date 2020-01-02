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
      return res.json(results)
    }
  })
})


app.get('/getPickupHours', (req,res) => {

  const {branch_id} = req.query
  const query = `SELECT pickup_hours FROM branches WHERE branch_id = ${branch_id}`
  
  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json(JSON.parse(results[0].pickup_hours))
    }
  })
})


app.get('/getStoreHours', (req,res) => {

  const {branch_id} = req.query
  const query = `SELECT store_hours FROM branches WHERE branch_id = ${branch_id}`
  
  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json(JSON.parse(results[0].store_hours))
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
      return res.json(results[0].name)
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
      return res.json(results[0].address)
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
      return res.json(results[0].phone_num)
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
      return res.json(results[0].zip_code)
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
      return res.json(results[0].state)
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
      return res.json(results[0].city)
    }
  })
})


app.get('/addUser', (req,res) => {

  const {first_name, last_name, email, password} = req.query
  const query = `INSERT INTO users (first_name, last_name, email, password) VALUES (${first_name}, ${last_name}, ${email}, ${password})`

  db.query(query, (err) => {
    if(err){
      res.send(err)
    }
    else{
      console.log('Succesfully Added User')
    }
  })
})


app.get('/login', (req,res) => {

  const {email,password} = req.query
  const query = `SELECT password FROM users WHERE email = ${email}`

  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      var param_password = password.replace(/[' "]+/g, '')

      // IF VALID RESPONSE
      if(results.length > 0 ){
        var db_password = results[0].password
        
        // EMAIL MATCHES BUT NOT USERNAME
        if( param_password === db_password){
          console.log('User Verified')
          res.json({isLoggedIn:true})
        }
        else{
          console.log('Wrong Password')
          res.json({isLogginIn: false})
        }
      }
      else{
        console.log('User Not Found')
      }
    }
  })
})


app.get('/getColorScheme', (req,res) => {

  const {branch_id} = req.query
  const query = `SELECT color_scheme FROM branches WHERE branch_id = ${branch_id}`

  db.query(query, (err,results) => {
    if(err){
      res.send(err)
    }
    else{
      return res.json(results[0].color_scheme)
    }
  })
})


app.listen('3001', () => {
  console.log('server started on port 3001')
})
