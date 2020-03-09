const user = require("../Models/userModel");
const getUserData = function(req,res){
    user.find().exec(function(err,data){
        if(err){
            response = { code: "500", msg: "Internal server error!" };
            return res.json(response);
        }else{
            if(data && data.length > 0){
                response = { code: "200", msg: "Success!" , userDetails : data };
                return res.json(response);
            }
        }
    });
}
module.exports = getUserData;