
import getOpenAiInstance from '../config/openai.js'
import dotenv from "dotenv";
dotenv.config();
const openai = getOpenAiInstance()


export const analyzeSymptoms = async (symptoms) => {
  const prompt = `The user is experiencing ${symptoms}. What might be the potential medical conditions?`;

  try {
    const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 500,
    })


    return completion.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    throw new Error('OpenAI request failed');
  }
};