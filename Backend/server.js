import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import routes from './router/index.js';
import cors from "cors";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
        allowedHeaders: ["Content-Type", "authorization"],
        credentials: true,
    })
);

app.use("/api", routes);

app.get("/", (req, res) => res.json({ ok: true, time: new Date() }));


app.use((err, req, res, next) => {
    console.error(err);
    res
        .status(err.status || 500)
        .json({ error: err.message || "Server Error" });
});


try {
    const server = app.listen(PORT, () => {
        console.log(` Server running on port ${PORT}`);
    });

    server.on("error", (err) => {
        console.error(" Server failed to start:", err.message);
        process.exit(1);
    });
} catch (err) {
    console.error(" Unexpected error occurred:", err.message);
    process.exit(1);
}