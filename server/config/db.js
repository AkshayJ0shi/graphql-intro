const mongoose = require("mongoose")

const connectDb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold)
}


// .then(()=> console.log("Mongo connected"))
// .catch((err)=> {
//     console.log(err.message)
//     process.exit(1)
// })

module.exports = connectDb