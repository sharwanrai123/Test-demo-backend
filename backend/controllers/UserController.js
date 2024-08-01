
// const conn=require('../db');



    const getUser=async(req,res)=>{
        // const result = await conn.query('SELECT * FROM user',(err,data)=>{
        //     if(err) throw err;
        //        console.log(data)
               res.status(200).send({
                messege:'data fetched'
            // });
        });

    }

    const postUser=async(req,res)=>{
        try{
            console.log("first");
            const {projectName,projectDescription}=req.body;

            res.status(201).send({
                messege:'user created',
            });
        }
        catch(err)
        {
            console.log(err)
        }

    }

    const deleteUser=(req,res)=>{
        console.log("first")
        const id=req.query.id;
        console.log(id);

        try{


                    res.status(203).send({
                        messege:"something went wrong"
                    })
                }
        catch(err)
        {
            console.log(err);
        }

    }


    const deleteUsers=(req,res)=>{
        console.log("first")
        const id=req.query.id;
        console.log(id);

        try{


                    res.status(203).send({
                        messege:"deleteuser api calls"
                    })
                }
        catch(err)
        {
            console.log(err);
        }

    }


    module.exports={getUser,postUser,deleteUser,deleteUsers};
