const Customer = require('../model/Customer');
const mongoose = require('mongoose');

/*
GET/ 
Homepage
*/

exports.homepage =async (req,res)=>{
    const locals ={
        title:'NodeJs',
        description:'Free User NodeJs Management System'
    }
    //res.send('Hello World')
    res.render('index',locals);
    
}


/*
GET  /
NEW Customer Form

*/
exports.addCustomer =async (req,res)=>{
    const locals ={
        title:'NodeJs',
        description:'Free User NodeJs Management System'
    }
    //res.send('Hello World')
    res.render('pages/add',locals);
    
}

//Post Create New Customer
exports.postCustomer =async (req,res)=>{

    console.log(req.body);
    const newCustomer = new Customer({
        firstName:req.body.FirstName,
        lastName:req.body.LastName,
        details:req.body.details,
        tel:req.body.tel,
        email:req.body.email
    });

    const locals ={
        title:'Add New Customer',
        description:'Free User NodeJs Management System'
    }
    try {
        await Customer.create(newCustomer);
        await req.flash('')
        //res.send('Hello World')
        res.redirect('/');

    } catch (error) {
        console.log(error);
        
    }
    
    
}
