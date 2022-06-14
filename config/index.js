require("dotenv").config()
const config = {
    postgresUrl: process.env["DATABASE_URL"] || 'postgres://anuragi:anuragi@21@localhost:5432/day6',
    // twilio:{
    //     apiKey:  env("TWILIO_api") || '',
    //     apiSecret: env("TWILIO_SECRET") || '',
    // },  
    authSecret: process.env["AUTH_SECRET"] || 'secret',

}
module.exports = config

