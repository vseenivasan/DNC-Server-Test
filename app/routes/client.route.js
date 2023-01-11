const clientCtrl = require('../controllers/client.controller.js');

module.exports = (app) => {
    // Manage Client
    app.get('/client', clientCtrl.getAllClients);
}