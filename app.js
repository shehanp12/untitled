const express = require('express');
const app = express();
const  bodyParser= require('body-parser');
const cors= require('cors');

app.use(bodyParser.json());
app.use(cors());

const CONNECTION_URL= 'mongodb+srv://shehan:iaOnvM7u9epNVKRa@cluster0.lhv2q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = 