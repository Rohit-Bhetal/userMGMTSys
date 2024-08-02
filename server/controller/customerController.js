const Customer = require('../model/Customer');
const mongoose = require('mongoose');

/*
GET/ 
Homepage
*/

 /* exports.homepage =async (req,res)=>{
    const messages = await req.consumeFlash('info')
    const locals ={
        title:'NodeJs',
        description:'Free User NodeJs Management System'
    }

    try {
        const customers = await Customer.find({}).limit(22);
        res.render('index',{locals,messages,customers});
    } catch (error) {
        
    }
    //res.send('Hello World')
    
    
}  */
    exports.homepage =async (req,res)=>{
        const messages = await req.consumeFlash('info')
        const locals ={
            title:'UserMGMT',
            description:'Free User NodeJs Management System'
        }
        let perpage = 12;
        let page = req.query.page || 1
        try {
            const customers = await Customer.aggregate([{
                $sort:{
                    updatedAt:-1
                }
            }]).skip(perpage*page-perpage).limit(perpage).exec();
            const count = await Customer.countDocuments();
            res.render('index',{locals,messages,customers,
                current:page,pages:Math.ceil(count/perpage)
            });
        } catch (error) {
            console.log(error);
        }
        //res.send('Hello World')
        
        
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
        await req.flash('info','New Customer Added!')
        //res.send('Hello World')
        res.redirect('/');

    } catch (error) {
        console.log(error);
        
    }
    
    
}


/*
*GET /
*Customer Data
*/
exports.view = async (req,res) =>{
    try {
        const customer = await Customer.findOne({
            _id:req.params.id
        });
        
        const locals ={
            title:'View',
            description:'Custom View of User'
        }
        res.render('pages/view',{
            locals,
            customer
        })

    } catch (error) {
        console.log(error);
    }
}

/*
*GET /
*Edit Customer Data
*/
exports.edit = async (req,res) =>{
    try {
        const customer = await Customer.findOne({
            _id:req.params.id
        });
        
        const locals ={
            title:'Edit',
            description:'Custom View of User'
        }
        res.render('pages/edit',{
            locals,
            customer
        })

    } catch (error) {
        console.log(error);
    }
}
/*
*POST /
*Edit Customer Data
*/
exports.editPost = async (req,res) =>{
    try {
        await Customer.findByIdAndUpdate(req.params.id,
            {
                firstName:req.body.FirstName,
                lastName:req.body.LastName,
                details:req.body.details,
                tel:req.body.tel,
                email:req.body.email,
                updatedAt: Date.now()
               
            }
        );

        res.redirect(`/edit/${req.params.id}`);
        console.log('Redirected');

    } catch (error) {
        console.log(error);
    }
}

/**
 * Delete /
 * Delete Customer Data
 */
exports.deleteCustomer = async (req, res) => {
    try {
      await Customer.deleteOne({ _id: req.params.id });
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

/**
 * GET /
 * Search Customer Data
 */
exports.searchCustomer = async (req, res) => {
    try {
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/{^a-zA-z0-9}/g,"");
        const customers = await Customer.find({
            $or:[
                {firstName:{$regex : new RegExp(searchNoSpecialChar,"i")}},
                {lastName:{$regex : new RegExp(searchNoSpecialChar,"i")}},
            ]
        });
        const locals ={
            title:'Search',
            description:'Search User'
        }

        res.render("search",{
            customers,
            locals
        })
    } catch (error) {
        
    }
  };

  /*
  GET/ ABOUT PAGE
  */
  exports.about =async (req,res)=>{
    const locals ={
        title:'About',
        description:'About User NodeJs Management System'
    }
    try {
        res.render('about',{locals});
    } catch (error) {
        console.log(error);
    }
    //res.send('Hello World')
    
    
}
