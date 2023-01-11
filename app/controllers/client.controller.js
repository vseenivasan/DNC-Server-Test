const mandb = require('../config/manage')

// Manage User

// 1. List all users
exports.getAllClients = async (req, res) => {
    try {
        const clients = await mandb.getClient()
        console.log("Clients: ", clients)
        return res.status(200).send({"clients": clients})
    }catch(err){
        return res.status(500).send({"error": err})
    }
}