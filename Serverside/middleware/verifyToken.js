// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("access token here",token);
  if (!token) {
    return next( "You are not authenticated!");
  }

  jwt.verify(token, "slhandyfix", (err, user) => {
    if (err) {
        return next("Token is not valid!");
    }
    
    else{ 
        req.user = user;
        console.log(user);
     next();
    }
  });
};
// || req.user.type === "manager"
const verifyUser = (req, res, next) => {
    // console.log("user req", req);
    console.log("param user id", req.params.id)
    verifyToken(req, res, () => {
    console.log("token user id", req.user.id);
    console.log("param user id", req.params.id);
    if (req.user.id == req.params.id ) {
        console.log("if called")
        next();
    } else {
      return next("You are not authorized!");
    }
  });
};

const verifyManager = (req, res, next) => {
    console.log("verify manager called");
    console.log("param user id", req.params.id)
  verifyToken(req, res, () => {
    console.log("token user typr", req.user.usertype);
    // console.log("param user type", req.params.id);
    if (req.user.type == "manager" ) {
        console.log("if called")
        next();
    } else { 
      return next("You are not authorized!");
    }
  });

};
const verifyServiceProvider = (req, res, next) => {
    // console.log("user req", req);
    console.log("param user id", req.params.id)
  verifyToken(req, res, next, () => {
    console.log("token user id", req.user.id);
    console.log("param user id", req.params.id);
    if (req.user.type == "sp" ) {
        console.log("if called")
        next();
    } else {
      return next("You are not authorized!");
    }
  });
};

const verifyAdmin = (req, res, next) => {
    // console.log("user req", req);
    // console.log("param user id", req.params.id)
  verifyToken(req, res, next, () => {
    // console.log("token user id", req.user.id);
    // console.log("param user id", req.params.id);
    if (req.user.type == "admin" ) {
        console.log("if called")
        next();
    } else {
      return next("You are not authorized!");
    }
  });
};



module.exports = {verifyToken, verifyUser, verifyAdmin,verifyServiceProvider ,verifyManager}