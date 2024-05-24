import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI).then((con) => {
        console.log("DATABASE CONNECTED " + con.connection.host);
    }).catch((err) => {
        console.log("error: " + err);
    });
};

export default connectDatabase;
