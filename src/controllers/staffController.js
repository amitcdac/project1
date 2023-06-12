const Staff = require('../models/staffModel')

const create = async (req,res)=>{
    const {name,email} = req.body;
    const staff = await Staff.create({
        name,
        email
    })
    return res.send(staff)
}
module.exports = {
    create
}