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
    const locals ={
        title:'Add New Customer',
        description:'Free User NodeJs Management System'
    }
    //res.send('Hello World')
    res.render('pages/add',locals);
    
}
