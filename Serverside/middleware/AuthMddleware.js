const express = require('express');
const {verify} = require("jsonwebtoken");
const jwt = require("jsonwebtoken")

const getHeaderFromToken = token => {
    const decodedToken = jwt.decode(token, {
     complete: true
    });
   
    if (!decodedToken) {
    //  throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `provided token does not decode as JWT`);
    console.log("token not found");
    }
   
    return decodedToken.header;
}

const validateToken = (req, res , next) => {
    // accesst token comming from front end
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjo4LCJpYXQiOjE2NTg5MTAzNzF9.q5oJ6kQkJd_BD41Ia3jdF5L9jDvzwsrKGhH9_uMb1bk";
    // const accessToken = req.headers.authorization;
    const HeaderToken = getHeaderFromToken();
    console.log("this is acccesstoken",HeaderToken)


    if(!accessToken)
    // console.log("auth connected")
    return res.json({error: "User not logged in"})

    try {
        const validToken = verify (accessToken, "slhandyfix");
        
        if (validToken){
            console.log("token validated!");
            return next();
        }
    }catch (err){
        console.log("Un-success");
        return res.json({err:err})
    }
}
   

   

module.exports = {validateToken}  