const Manager = require('../models/admin.model');
// const AdminModel=require('../models/admin.model');
// const UserModel = require('../models/user.model');


exports.createManager=(req,res)=>{

    console.log("admin create",req.body);
    // AdminModel.
    const name=req.body.name
    const address=req.body.address
    const email=req.body.email
    // const phone=req.body.phone

    let orgcontact_no=req.body.phone
    const phone=orgcontact_no.replace('94','0')

    const gender=req.body.gender
    const dob=req.body.dob
    Manager.addManger({name:name,address:address,email:email,contact_no:phone,gender:gender,dob:dob},(err)=>{
        if(err){
            res.send(err)
        }else{
            res.send("succesly add manager table")
        }

    })

}

exports.getManagerList=(req,res)=>{
    Manager.getManagerListfromdb((err, manager) =>{
        console.log('We are here');
        if(err){
            res.send(err);
        }else{      
            console.log('Manager', manager);
            res.send(manager);
    }

    })


}