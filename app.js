require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const connectDB =require('./server/config/db');

const app = express();
const PORT = 3030;
const {flash} = require('express-flash-message');
const session =require('express-session');


//COnnect to Database
connectDB(); 
app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

//static files

app.use(express.static('public'));

//Express Session
app.use(
    session({
        secret:'secret',
        resave: false,
        saveUninitialized:true,
        cookie:{
            maxAge:1000*60*60*24*7 // 1 week
        }
    })
);

app.use(
    flash({
        sessionKeyName: 'flashMessage'
    
    })
);


//Template Engine
app.use(expressEjsLayouts);
app.set('layout','./layouts/main');

app.set('view engine','ejs');

//Home
app.use('/',require('./server/routes/customer'));

//Handle 404
app.get('*',(req,res)=>{
    res.status(404).render('404',);
});



app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
});

