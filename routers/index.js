const express=require('express');
//requiring router
const router = express.Router();
//for requiring home controller
const homeController=require('../controllers/homecontrollers');
//for create controller
const createController=require('../controllers/createcontroller');
//for deletecontroller
const delController=require('../controllers/deletecontroller');
//for edit controller
const editController=require('../controllers/editcontroller');
//for update controller
const updateController=require('../controllers/updatecontroller');
//for checking our router loaded or not
console.log('router loaded');

//for / default route
router.get('/',homeController.home);
//post type route for create controller
router.post('/create',createController.cre);
// for delete tasks
router.post('/deletetasks',delController.del);

// for editing our list
router.get('/edit',editController.editList);
//updating after editing
router.post('/update',updateController.updatetask);
// for exporting router
module.exports=router;
