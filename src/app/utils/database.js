import mongoose from "mongoose"

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://yamaguchirei0303:yamaguchi315@cluster1.ahdaofo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
        console.log("Success: Connected to MongoDB")
    }catch {
        console.log("Failure: Unable to connect to MongoDB")
    }
}

export default connectDB
