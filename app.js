const express = require('express');
const app = express();
const  bodyParser= require('body-parser');
const cors= require('cors');
const mongoose=require('mongoose');
app.use(bodyParser.json());
app.use(cors());

const CONNECTION_URL= 'mongodb+srv://shehan:iaOnvM7u9epNVKRa@cluster0.lhv2q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT =  process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log('Server running on PORT: ${PORT}')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);
