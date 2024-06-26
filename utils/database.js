import mongoose from 'mongoose';

let isConnected = false;
//Not using 'const' as data type because this is bound to change

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log("MongoDB is already connected!")
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            //useNewUrlParser: true,
            //useUnifiedTopology: true
        })

        isConnected = true

        console.log("Mongodb connected")
    } catch (error) {
        console.log(error)
    }
}