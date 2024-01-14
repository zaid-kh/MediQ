import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import userRoutes from "./routes/user.routes.js";
import symptomRoutes from './routes/symptomRoutes.js'
dotenv.config();



const app = express();

// Middleware

app.use(cors());
app.use(express.json());

//Routes

//User's route
app.use("/api/v1/users", userRoutes);
 app.use('/api/symptoms', symptomRoutes);

//  const fun = async (message) => {
//     const openai = getOpenAiInstance()

//     try {
//         const completion = await openai.completions.create({
//           model: "gpt-3.5-turbo-instruct",
//           prompt: message,
//           max_tokens: 500,
//           // temperature: 1,
//           // stop: ":",
//           // presence_penalty: 2,
//           // seed: 42,
//           // n: 2,
//         });
    
//         const text = completion.choices[0].text;
//         console.log(text)
//         // res.send(text);
//       } catch (error) {
//         // res.status(500).send("Error generating text");
//         console.log('openai error')
//       }
//  }



app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3030;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
