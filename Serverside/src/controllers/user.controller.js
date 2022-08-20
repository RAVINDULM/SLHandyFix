// console.log('user controller connected ');
const UserModel = require('../models/user.model');
const bcrypt = require("bcrypt");
const {sign}= require("jsonwebtoken")
const cookieParser =  require("cookie-parser");

exports.register = (req , res) =>{
    // const name = 
    console.log("register controller",req.body);
    const {name, password, email,phoneNumber,usertype} = new UserModel(req.body);
    console.log("Create employee",{name, password,email} );
    console.log("Create employee",req.body );

    bcrypt.hash(password, 10).then((hash)=> {
        UserModel.createUser({name : name, password : hash, email: email, phoneNumber: phoneNumber,usertype:"customer"}, (err, user) =>{
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

// Log out user controller
exports.logout = ( req , res) =>{

    const token = req.cookies.access_token;
    if (token!=undefined){
    res.status(202).clearCookie('access_token').send("cookies cleared")
    }
    else {
        res.send({error : "session time out!"});
    }
}


// Log in user controller
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
                const accessToken = sign({email: user[0]['email'], id: user[0]['id'], type: user[0]['usertype']}, 
                "slhandyfix"
                ); 

                console.log("accesss token next")
                console.log(accessToken)
               
                res
                .status(202)
                .cookie('access_token', accessToken, {
                    sameSite: 'strict',
                    path :"/",
                    expires: new Date(new Date().getTime() + 1000 * 1000),
                    httpOnly: false,
                    secure: true,
                }).send(accessToken)
            }
        })
        } 
   })
}