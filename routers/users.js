const express = require("express");
const Router = express.Router();
const path = require("path");
const app = express();

var data = require(path.join(__dirname, "../Data/data_user.json"))

function CheckUser(UserName, Password, res){

    const user = data.find(u => u.UserName === UserName && u.Password === Password);
    
    
    if (user) {   
        console.log(path.join(__dirname,"../", "public/sucsess.html")); 
        res.sendFile(path.join(__dirname,"../", "public/sucsess.html"));
        
        
    }else {
        console.log("yes it send"); 
        res.sendFile(path.join(__dirname,"../", "public/eroor.html"));
    };
}



Router.post("/loggin", (req, res) => {
    const UserName = req.body.UserName;
    const Password = req.body.Password;
       
    CheckUser(UserName, Password ,res)
})


module.exports = Router;
