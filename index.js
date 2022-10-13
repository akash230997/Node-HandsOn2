const express = require('express');

const App =  express();

App.get('/',(req,res)=>{
    // res.send(res)
    // res.send('Hello')
    res.send('Random........')
})

App.get('/About', (req, res) => {
    // res.send(res)
    // res.send('Hello')
    res.send('Hey!! Akash');
})


App.listen('9000',(req,res)=>{
    console.log(req)
})