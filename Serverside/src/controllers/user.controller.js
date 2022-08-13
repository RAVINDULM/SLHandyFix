// console.log('user controller connected ');
const UserModel = require('../models/user.model');
const bcrypt = require("bcrypt");
const {sign}= require("jsonwebtoken")
const cookieParser =  require("cookie-parser");

const accountSid ='AC6f09c17829e0a3767af02aac6b1ad635'
const authToken = 'beeed69d9da0d3dad6bdd99891cdd4bb';
const client = require('twilio')(accountSid, authToken);
const otpGenerator = require('otp-generator')
let stringify = require('json-stringify-safe')

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

global.otpGenerate="";
global.resetcontact=""

exports.callOTP=(req,res)=>{
    const contact=req.body.sendcontact;
    
    console.log(typeof(contact))
    UserModel.getUserBycontact({contact_no:contact},(err,user)=>{
        console.log(contact)
        resetcontact=contact;
        const sendTo="+94"+contact;
        if(err){
            res.send(err)
        }else if(user.length==0){
            res.send({error:"User not found"})
        }else{
  
             otpGenerate=otpGenerator.generate(4, {lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false });
             console.log(otpGenerate)
             console.log(typeof(otpGenerate))

            client.messages
            .create({
               body: 'your 4-digit OTP is '+otpGenerate,
               from: '+12058090282',
               statusCallback: 'http://postb.in/1234abcd',
               to: sendTo
             })
            .then(message => console.log(message.sid));        
            res.send('success')
        }
    })
}

exports.forgotpawd=(req,res)=>{
    const typeOtp=req.body.sendotp;
   console.log(otpGenerate)
   console.log("=====")
   console.log(typeOtp)

  if(typeOtp===otpGenerate){
        res.send("Success")
   }else{
    res.send("Enterd OTP not valid")
   }

}

exports.ResetPassword=(req,res)=>{
    const sendpass=req.body.password
    const sendcontact=resetcontact
    bcrypt.hash(sendpass,10).then((hash)=>{
        UserModel.updatePasswordUserBycontact({contact_no:sendcontact,password:hash},(err)=>{
            if(err){
                res.send(err)
            }else{
                res.send("Password updated Successfuly")
            }
        })
    })

}