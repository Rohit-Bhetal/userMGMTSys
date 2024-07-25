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
app.use('/',require('./server/routes/customer'));

//Handle 404
app.get('*',(req,res)=>{
    res.status(404).render('404');
});


app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
});

