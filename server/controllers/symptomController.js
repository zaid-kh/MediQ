
 import {analyzeSymptoms} from'../services/openaiService.js';



export const getSymptomAnalysis = async (req, res) => {
  console.log(req.body)
  try {
    const {prompt } = req.body;
       const result = await analyzeSymptoms(prompt);
       const newreq = {
        role:'system',
        content:result
       }
       console.log(newreq)
    res.send(newreq)
    // res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


 

