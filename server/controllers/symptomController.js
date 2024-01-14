
 import {analyzeSymptoms} from'../services/openaiService.js';



export const getSymptomAnalysis = async (req, res) => {
  try {
    const {prompt} = req.body;
       const result = await analyzeSymptoms(prompt);
  
    res.send(result)
    // res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


 

