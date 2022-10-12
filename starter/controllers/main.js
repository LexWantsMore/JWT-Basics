// check username, password in post(login)request
// if exists,create new JWT
// send back to front-end
// setup authentication so only the request with JWT can access the dashboard


const CustomAPIError = require('../errors/custom-error')
const login = async (req,res) => {
    const {username, password} = req.body 
// mongo
// Joi
// check in the controller.in this project, i will use the third option


    if(!username || !password) {
        throw new CustomAPIError('Please provide email and password',400)

    }

    console.log(username,password);
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, John Doe`, secret:`Here is your authorised data. Your lucky number is ${luckyNumber}`})
}
module.exports = {
    login,dashboard
}