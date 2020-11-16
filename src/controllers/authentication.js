import ev from 'express-validator';
import Sequelize from 'sequelize';
import isEmail from 'validator/lib/isEmail.js';
import { generateId } from '../utilities/index.js'
import { User }from '../models/user.js'

async function signup(req, res) {

    const errors = ev.validationResult(req)

    if(errors.isEmpty()){
        const { body : data } = req
        const { email, username, password } = data

        console.log(data)
        
        const user = await User.create({
                id: generateId(),
                username,
                email,
                password 
        })

        console.log('user', user)

        res.status(200).json({
                success: true,
                user
        })

    }

}

export {
    signup
}