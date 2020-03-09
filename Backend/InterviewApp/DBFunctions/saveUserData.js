const user = require("../Models/userModel");
const saveUserData = function(req,res){

    const data = {
        firstName = null,
        lastName = null,
        email = null,
        mobileNumber = null,
    } = req.body;
  
    if(!firstName || !lastName || !email || !mobileNumber){
        response = { code: "400", msg: "Either of the parameter is not sent!" };
        return res.json(response);
    }

    var newUser = new user(data);

    console.log(JSON.stringify(newUser));

    newUser.save(function(err,user){
        if(err){
            response = { code: "500", msg: "Internal server error!" };
            return res.json(response);
        }
        response = { code: "200", msg: "Success!" };
        return res.json(response);
        console.log("Data saved to collection.");
    }) 
    
};

module.exports = saveUserData;