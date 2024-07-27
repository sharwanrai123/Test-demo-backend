const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const UserRouter = require('./routers/UserRouter');
    const app=express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

     const port=3001;

     app.use('/',UserRouter);

    app.listen(port,()=>{
        console.log("app is listening on port",port)
    })
