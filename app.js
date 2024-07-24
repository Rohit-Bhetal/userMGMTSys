require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');


const app = express();
const PORT = 3030;

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

//static files

app.use(express.static('public'));


//Template Engine
app.use(expressEjsLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

//Home
app.get('/',(req,res)=>{
    const locals ={
        title:'NodeJs',
        description:'Free User NodeJs Management System'
    }
    //res.send('Hello World')
    res.render('index',locals);
});

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
});

