const express = require('express'); 
const loginRouter = express.Router();
const user = require('../data/user');
const userdata = require('../model/userModel')

loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})


loginRouter.post("/check",function(req,res){
    var item = {
        email:req.body.uid,
        password:req.body.pwd
    };


    userdata.findOne(
        {email:item.email,password:item.password},(err,user)=>{
            if (err) console.log(err);
      else {
        if (user === null) {
          console.log("invalid credentials");
          res.redirect("/signup");
        // } else if (user.userName == "admin") {
        //   res.redirect("/admin");
        } else {
          console.log("login successful");
          res.redirect("/home");
        }
      }
        }
    )
    
//     console.log(checkuser);
//     var flag=false;

// //    var flagg = user.find((e)=>{
//        for(let i=0;i<user.length;i++){
        
//         if(checkuser.uid==user[i].uid && checkuser.pwd==user[i].pwd)
//         {
            
//             flag=true;
//             break;
//         }
//         else{
//                 flag=false;
//             }
//         };

//         console.log(flag);

// if(flag==true){
//     // alert("User Verified.Click to continue");
//     res.redirect("/home")
// }
// else{
//     // alert("User Verification Failed");
//     res.redirect("/signup");
// }

});




module.exports = loginRouter;