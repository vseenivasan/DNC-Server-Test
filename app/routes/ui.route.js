const uictrl = require('../controllers/ui.controller.js');

module.exports = (app) => {
    // General signup request from UI reach here
    app.post('/signup', uictrl.signup);
    
    // Send OTP through Email
    app.post('/sendotp', uictrl.sendOtp);
	
    
	// Forgot password
	app.put('/resetpwd', uictrl.forgotpwd);
	
	
	// Login 
	app.post('/login', uictrl.uiLogin);

    // Manage User
    app.get('/user', uictrl.getAllUsers);

    // Edit User
    app.put('/user', uictrl.editUser);




}