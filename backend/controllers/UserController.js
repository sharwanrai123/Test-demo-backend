
const conn=require('../db');

var alldata=[];


    const getUser=async(req,res)=>{
        const result = await conn.query('SELECT * FROM user',(err,data)=>{
            if(err) throw err;
               console.log(data)
               res.status(200).send({
                messege:'data fetched',
                data:data
            });
        });

    }

    const postUser=async(req,res)=>{
        try{
            console.log("first");
            const {projectName,projectDescription}=req.body;
    
            const result = await conn.query(
                'INSERT INTO user (project_name, project_detail) VALUES (?, ?)',
                [projectName, projectDescription]
            );
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

            conn.query('DELETE FROM user WHERE id=?',[id],(err,result)=>{
                if(err) throw err;
                console.log(result);
                if(result.affectedRows==1)
                {
                    res.status(200).send({
                        messege:"data deleted successfully",
                        data:result
                    })
                }
                else{
                    res.status(203).send({
                        messege:"something went wrong"
                    })
                }
             
            }) ;
        }
        catch(err)
        {
            console.log(err);
        }

    }


    module.exports={getUser,postUser,deleteUser};
