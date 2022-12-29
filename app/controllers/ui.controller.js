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