const express = require('express')
const router = express.Router();

const student = require('../schemadata/userAuth')
//deconstructing the signup and login
const {signup, login} = require('../validation')

const bcrypt = require('bcryptjs')







router.post('/signup', async (req, res)=>{
//VALIDATION
 // try{
  //   const newdata =  schema.validate(req.body)
  //   res.status(200).send(newdata)

//   }catch(err){
//     res.status(404).send('Error' + err)
//   }
// })

   //DECONSTRUCTING THE ERROR OF THE VALIDATION
   const {error} = await signup(req.body)

   if (error){
     return res.status(404).json(error.details[0].message)
   }


   
  // giving a condition that no two email must enter

  const emailcheckers = await student.findOne({email : req.body.email})
  if(emailcheckers){
    return res.status(404).json('email already exist')
  }

    hider = await bcrypt.genSalt(10)
    passwordHider = await bcrypt.hash(req.body.password, hider)


    const newfile = new student({
      name : req.body.name,
      email: req.body.email,
      password : passwordHider
    })


   try{
  const files = await newfile.save()
  res.status(200).json(files)
   }catch (err){
     res.status(404).send('error' + err)

  }


 

})

router.post('/login', async (req, res)=>{



const {error} = await login(req.body)

if (error){
  return res.status(404).json(error.details[0].message)
}

// login with name and if not correct name 
const username = await student.findOne({name : req.body.name})
if (!username){
  return res.status(404).json('name not correct')
}
// login with email and if not that correct email
const userEmail = await student.findOne({email : req.body.email})
if(!userEmail){
  return res.status(404).send('wrong Email ')

}


// input your login in password and if not

passwordHider = await bcrypt.compare(req.body.password, userEmail.password)
if(!passwordHider){
  return res.status(404).json("wrong password")
}


try {
    res.status(200).json('successfully logged in')
}
catch (err){
  res.status(404).json("incorrect login details")
}



})






module.exports = router;