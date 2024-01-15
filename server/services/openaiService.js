
import getOpenAiInstance from '../config/openai.js'
import dotenv from "dotenv";
dotenv.config();
const openai = getOpenAiInstance()
const instructionMessages = [
 
]

export const analyzeSymptoms = async ({symptoms,language}) => {
   const prompt = ` I am experiencing ${symptoms}. What might be the potential medical conditions, give me 5 ?`;
  
  try {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo-instruct",
      //   messages: [ {
      //   role: "system",
      //   content:
      //   `I am experiencing ${symptoms}. What might be the potential medical conditions, give me 5 ? `},
      // { role: "user", content: `your task to translate to ${language}` },],
        max_tokens: 500,
        model: "gpt-3.5-turbo-1106",
        seed: 50,
        prompt:prompt
        // response_format: { type: "json_object" },
      
        // seed:42
    })


    return completion.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    throw new Error('OpenAI request failed');
  }
};