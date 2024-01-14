import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express();

// Middleware

app.use(cors());
app.use(express.json());

//Routes

//User's route
app.use("/api/v1/users", userRoutes);

app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3030;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
