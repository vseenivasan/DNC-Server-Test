const mandb = require('../config/manage')

// To get sign-up mode
exports.signup = (req, res) => {
    res.status(200).send({message: "User Signup Accepted"}) 
}

// To send OTP through mail
exports.sendOtp = async(req, res) => {
    res.status(200).send({message: "OTP sent successfully"}) 
}

exports.forgotpwd = (req, res) => {
	if(!req.body.email || !req.body.new_pwd || !req.body.otpnum || !req.body.mode){
        return res.status(400).send({
            message: "mandatory field missing"
        });
    }
    
    res.status(200).send({message: "Password reset successfully"}) 
}

// Login
exports.uiLogin = (req, res) => {
	if(!req.body.uname || !req.body.pwd){
        return res.status(400).send({
            message: "mandatory field missing"
        });
    }

    res.status(200).send({message: "Login success"}) 
}


// Manage User

// 1. List all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await mandb.getUser()
        console.log("Users: ", users)
        return res.status(200).send({"users": users})
    }catch(err){
        return res.status(500).send({"error": err})
    }
}

// 2. Edit User
exports.editUser = async (req, res) => {
    try {
        const users = await mandb.getUser()
        console.log("Users: ", users)
        return res.status(200).send({"users": users})
    }catch(err){
        return res.status(500).send({"error": err})
    }
}