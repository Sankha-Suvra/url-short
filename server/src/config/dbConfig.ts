import mongoose from 'mongoose'

const connectDb = async () =>{
    try {
        const connect = await mongoose.connect(`mongodb://localhost:27017/shortener`)
        console.log(
            "db connected: ", 
            connect.connection.host, 
            connect.connection.name);
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

export default connectDb