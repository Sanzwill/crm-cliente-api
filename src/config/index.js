const dotenv = require("dotenv")

dotenv.config()

const config ={
    mongoUri = process.env.mongoUri,
    port = process.env.PORT
}
module.exports = config