const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')
const route=require('./routing/routing')
const errorLogger=require('./utilities/errorLogger')
app.use(bodyParser.json());
app.use(cors());
app.use('/',route);
app.use(errorLogger);

app.listen(4004);
console.log("server started at 4004")