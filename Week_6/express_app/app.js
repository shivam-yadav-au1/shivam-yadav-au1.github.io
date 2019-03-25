'use strict'
const express = require('express')

var app = express();

app.get("/add/:number1/:number2",function(request,response){
    var number1 = request.params.number1
    var number2 = request.params.number2
    var result = parseInt(number1) + parseInt(number2)
    response.send("Addition of numbers :"+number1 +" and "+number2+" = "+result)
});
app.get("/sub/:number1/:number2",function(request,response){
    var number1 = request.params.number1
    var number2 = request.params.number2
    var result = parseInt(number1) - parseInt(number2)
    response.send("Subtraction of numbers :"+number1 +" and "+number2+" = "+result)
});

app.get("/mul/:number1/:number2",function(request,response){
    var number1 = request.params.number1
    var number2 = request.params.number2
    var result = parseInt(number1) * parseInt(number2)
    response.send("Multiplication of numbers :"+number1 +" and "+number2+" = "+result)
});
app.get("/div/:number1/:number2",function(request,response){
    var number1 = request.params.number1
    var number2 = request.params.number2
    var result = parseInt(number1) / parseInt(number2)
    response.send("Division of numbers :"+number1 +" and "+number2+" = "+result)
});

app.listen(3000)
