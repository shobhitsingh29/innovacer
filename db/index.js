import mongoose from "mongoose";

mongoose
    .connect("mongodb+srv://root:root@cluster0.qh7s0.mongodb.net/cinema?retryWrites=true&w=majority", { useNewUrlParser: true })
    .catch((e) => {
        console.error("Connection error", e.message);
    });

export const db = mongoose.connection;
