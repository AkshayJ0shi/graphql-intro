const mongoose = require("mongoose")

const connectDb = async () => {
    await mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDb