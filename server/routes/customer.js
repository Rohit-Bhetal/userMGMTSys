const express= require('express');
const router = express.Router();
const customerController = require('../controller/customerController')

router.get('/',customerController.homepage);
router.get('/add',customerController.addCustomer);
router.post('/add',customerController.postCustomer);
router.get('/view/:id',customerController.view);
router.get('/edit/:id',customerController.edit);
router.put('/edit/:id',customerController.editPost);
router.delete('/edit/:id', customerController.deleteCustomer);
router.post('/search', customerController.searchCustomer);
router.get('/about', customerController.about);
module.exports= router;