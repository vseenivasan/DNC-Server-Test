const fs = require('fs')

exports.getUser = () => {
    return new Promise((cbsuccess, cbfailed) => {
        console.log(__dirname);
        fs.readFile(__dirname+"\\config.json", function(err, data){
            if(err){
                cbfailed("DB read error")
            }
            else{
                const users = JSON.parse(data)["dncdb"]["users"]
                console.log("Users at local: ",users)
                cbsuccess(users)
            }
            
        })
    })
}


exports.editUser = (userDict) => {
    return new Promise(async (cbsuccess, cbrejected) => {
        try{
            const users = await this.getUser()
            console.log(users)
        }catch(err){
            cbrejected(err)  
        }
    })
}

exports.getClient = () => {
    return new Promise((cbsuccess, cbfailed) => {
        console.log(__dirname);
        fs.readFile(__dirname+"\\config.json", function(err, data){
            if(err){
                cbfailed("DB read error")
            }
            else{
                const users = JSON.parse(data)["dncdb"]["clients"]
                console.log("Users at local: ",users)
                cbsuccess(users)
            }
            
        })
    })
}

