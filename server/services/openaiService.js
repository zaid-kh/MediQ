
import getOpenAiInstance from '../config/openai.js'
import dotenv from "dotenv";
dotenv.config();
const openai = getOpenAiInstance()

export const analyzeSymptoms = async (prompt) => {
  const instructionMessages = [
    {
      role: "system",
      content:
      `I am experiencing ${prompt[0].content}. What might be the potential medical conditions, give me 5 ? `},

    // { role: "user", content: `your task to translate to ${language}` },
  ]

  const convo = [...instructionMessages,...prompt]
console.log(convo , 'this is prom')
  try {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: convo,
        max_tokens: 500,
        // model: "gpt-3.5-turbo-1106",
        seed: 50,
        //  prompt:prompt
        // response_format: { type: "json_object" },
      
        // seed:42
    })
 console.log(completion.choices[0].message.content)

    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw new Error('OpenAI request failed' );
  }
};