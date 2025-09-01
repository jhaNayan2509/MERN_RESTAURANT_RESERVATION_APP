import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT_RESERVATION_MERN_STACK_"
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.error("Database connection failed:", error);
    });
};