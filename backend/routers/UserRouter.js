const express=require('express');
const UserController = require('../controllers/UserController');

const UserRouter=express.Router();

UserRouter.get('/User',UserController.getUser);
UserRouter.post('/User',UserController.postUser);
UserRouter.delete('/User',UserController.deleteUser);

module.exports=UserRouter;