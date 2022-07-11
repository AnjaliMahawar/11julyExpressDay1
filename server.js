//console.log('hello world')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World...')
})
app.get('/A', function (req, res) {
    res.send('Hello From A..')
  })
  app.get('/B', function (req, res) {
    res.send('Hello From B..')
  })
  app.get('/C', function (req, res) {
    res.send('Hello From C..')
  })
  app.get('/d', function (req, res) {
    res.send('Hello From d..')
  })
  app.get('/e', function (req, res) {
    res.send('Hello From e..')
  })
  app.get('/f', function (req, res) {
    res.send('Hello From f..')
  })
  app.get('/g',function(req ,res){
    res.send('hello from g')
  })
  app.get('/h' , function (req ,res){
    res.send('hello from h')
  })
  app.get('/i',function(req,res){
    res.send('hello from i')
  })
  app.get('/j',function(req,res){
    res.send('hello from j')
  })
  app.get('/k',function(req,res){
    res.send('hello from k')
  })
  app.get('/l',function(req, res){
    res.send('hello from l')
  })
  app.get('/m',function(req, res){
    res.send('hello from n')
  })
  app.get('/n',function(req, res){
    res.send('hello from n')
  })
  app.get('/o',function(req, res){
    res.send('hello from o')
  })
  app.get('/p',function(req, res){
    res.send('hello from p')
  })
  app.get('q',function(req,res){
    res.send('hello ferom q')
  })
  app.get('/r', function (req , res){
    res.send('hello from r')
  })
  app.get('/s',function(res,req){
    res.send('hello from s')
  })
  app.get('/t',function(res,req){
    res.send('hello from t')
  })
  app.get('/u',function(res,req){
    res.send('hello from u')
  })
  app.get('/v',function (req,res){
    res.send('hello from v')
  })
  app.get('/w',function (req,res){
    res.send('hello from w')
  })
  app.get('/x',function (req,res){
    res.send('hello from x')
  })
  app.get('/y',function (req,res){
    res.send('hello from y')
  })
  app.get('/z',function (req,res){
    res.send('hello from z')
  })





app.listen(4000);