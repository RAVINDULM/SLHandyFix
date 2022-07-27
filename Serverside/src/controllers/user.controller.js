// console.log('user controller connected ');
const UserModel = require('../models/user.model');
const bcrypt = require("bcrypt");
const {sign}= require("jsonwebtoken")

exports.register = (req , res) =>{
    // const name = 
    const {name, password, email} = new UserModel(req.body);
    console.log("Create employee",{name, password,email} );
    console.log("Create employee",req.body );

    bcrypt.hash(password, 10).then((hash)=> {
        UserModel.createUser({name : name, password : hash, email: email}, (err, user) =>{
            if(err){ 
                res.send(err);
            }
            
            else if (!user.length){
            console.log("User not found")
            res.send("Employeeregistered successfully!")
            }

        })
        
    })
} 

exports.login =  (req , res) =>{
    // const name = 
    const {email, password } = req.body;
    console.log(req.body);
    // return
    UserModel.getUserByName({email: email} , (err, user)=>{
        console.log('Users are here');
        // const usertype = user[0]['usertype'];
        // console.log(usertype);
        if(err){ 
            res.send(err);
        }
        
        else if (!user.length){
        console.log("User not found")
        // res.send("User not found")
        req.send({error:"User not found"})
        }
        else if(user.length){ 
        console.log( user[0]['password']);
        dbPassword = user[0]['password'];
        bcrypt.compare(password,dbPassword).then((match) => {

            if(!match){
                console.log("Password doent match");
                req.json({error:"Password doesnt match"})
            }
            else if(match){ 
                console.log("User found");
                // TODO : want to clarify  
                // let accesstokentype ; 
                // if(usertype=="admin"){
                //     accesstokentype = "admin"
                // }
                // else if (usertype=="manager"){
                //     accesstokentype = "manager"
                // }
                // else {
                //     accesstokentype = "customer"
                // }
                const accessToken = sign({email: user[0]['email'], id: user[0]['id']}, 
                "slhandyfix"
                );
                // console.log(res.json({accessToken}))
                res.json({accessToken})
            }
        })
        } 
   })
   


}