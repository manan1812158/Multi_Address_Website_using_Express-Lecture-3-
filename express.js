const { response } = require('express')
const express=require('express')

var app=express()

//http://localhost:3000 */* <- this is the /
app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1><br>Hello Moto!")
})

app.get('/Students',(req,res)=>{
    res.send("<h1>Welcome to Students Section</h1>")
})
//USED TO FETCH INFORMATION FROM SERVER
app.get('/Faculty',(req,res)=>{
    res.send("<h1>Welcome to Faculty Section</h1>")
})

//USED WHEN INSERTING INFORMATION
app.post('/',(req, res)=>{
    res.send("Sending message to Server")
})

app.get('/Admin',(req,res,next)=>{
    console.log("Accessing restricted area")
    next();
}, function (req,res){
    res.redirect('/')
    console.log("Redirected to Root")       //REDIRECTED TO ROOT PAGE AS IT IS RESTRICTED
    
})

app.get('/Students/:studentid/Books/:bookid', (req,res)=>{
    res.send(req.params)
})
var server=app.listen(3000,()=>{
    console.log("Server is up at 3000 port")
})