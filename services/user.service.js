// const{prisma}= require("@prisma/client")
// const 
const { PrismaClient } = require("@prisma/client");
const md5 = require("md5")
const prisma = new PrismaClient();


const jwt = require("jsonwebtoken");
// const secret = "secret";
const {authScret}= require("../config")

const createToken = async (name,email, role) =>{
    const token = await jwt.sign({name,email,role}, authScret,{expiresIn:'24h'})
    // console.log(token)
    return token
}

const createUser = async (userDetails)=>{
    await prisma.User.create(
        {data:
        {...userDetails,
            password:md5(userDetails.password), role:"USER"}}
    );
    const token = await createToken(userDetails.name, userDetails.email, "USER")
    return token
}


const validateUsernamePassword= async (email,password) => {
    const store = await prisma.user.findFirst({
        where: {email}
    })
    const token = store? await createToken(store.name, store.email, store.role) :null;
    
    // console.log(md5(password)===store.password)
    return { resp:( store && store.password)===(md5(password)), token}

}












module.exports = {
    createUser, validateUsernamePassword
}