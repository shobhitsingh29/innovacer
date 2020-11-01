import mongoose from "mongoose";

mongoose
    .connect("mongodb://127.0.0.1:27017/cinema", { useNewUrlParser: true })
    .catch((e) => {
        console.error("Connection error", e.message);
    });

export const db = mongoose.connection;
