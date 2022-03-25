import mongoose from 'mongoose'

export const connectDB=async ()=>{
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/mern-chat')
        console.log(`Mongodb connected : ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error : ${error.message}`.red.bold)
        process.exit()
    }
}