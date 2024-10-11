const User = require("../model/User")

async function returnUsers(req, res) {
    const tasks = await User.find()
    res.json(tasks)
}

async function createUsers(req, res) {
    const task= req.body 
    const temp =  await User.create(task);
    res.json(temp)
}

module.exports = {
    returnUsers,
    createUsers,
} 