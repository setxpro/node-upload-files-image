const mongoose = require('mongoose');

require('dotenv').config();

// Opcional
mongoose.set("strictQuery", true)


async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected with database"))
    .catch(err => console.log(err))
}

main()

module.exports = main;