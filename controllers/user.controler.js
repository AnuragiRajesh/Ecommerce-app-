const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// const res = require("express/lib/response")
const {createUser, validateUsernamePassword} = require("../services/user.service")

const getUser = async(req,res)=>{
    try {
        const resp = await prisma.user.findMany({})
        res.status(200).json({smg: "succesfull", data:resp})
    } catch (error) {
      res.status(400).json({ msg: "Bad request", error });
      console.log(error)
    }
  }
  



const login = async(req,res) => {
    const {email,password} = req.body
    if (!(email&&password)){
        res.status(400).json({msg:"invalid user/password"})
    }
   try {
       const {resp, token} = await validateUsernamePassword(email,password)
       if(resp){

           res.status(200).json({msg:"successfuly loggedin", token})
    } else{
        
       }
       
   } catch (error) {
       console.log(error.stack)
       res.status(500).json({msg:"something failed"})
       
   }


}

const signup = async (req, res) => {
    console.log(req.body)
    const {
        name, email, password, confirmPassword, phone_number, dob
    } = req.body

    if (!(name,email,password,confirmPassword, phone_number)){
        return res.status(400).json({msg:"invalid information"})
    }
    if(password!==confirmPassword){
       return res.status(400).json({sg:"password does not match"})
    }
    try {
        const token = await createUser({
            name,email,password,phone_number,dob
        })
        res.status(201).json({
            msg: " successfully signed up" , token
        })

    } catch (error) {
        console.log(error.stack);
        res.status(500).json({sg:"something fail"})
        
    }

}
module.exports = { 
    login, signup, getUser
}