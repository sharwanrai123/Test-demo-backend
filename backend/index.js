const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');
const UserRouter = require('./routers/UserRouter');
    const app=express();
    dotenv.config();

    const port=process.env.PORT || 3001;
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

     

     app.use('/',UserRouter);

    app.listen(port,()=>{
        console.log("app is listening on port",port)
    })
