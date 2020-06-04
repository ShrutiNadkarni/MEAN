const express=require('express');
const app=express();

const Routes=require('./routes');

const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const morgan=require('morgan');

mongoose.connect("mongodb://localhost/company");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());