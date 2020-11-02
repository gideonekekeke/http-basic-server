const joi = require('@hapi/joi')




const signup = (data) =>{
    const schema = joi.object({
        name : joi.string().required(),
        email : joi.string().required(),
        password : joi.string().required().min(3)
      })

      return schema.validate(data)
}

module.exports.signup = signup


const login = (data) =>{
    const schema = joi.object({
        name : joi.string().required(),
        email : joi.string().required(),
        password : joi.string().required().min(3)
      })

      return schema.validate(data)
}

module.exports.login = login


