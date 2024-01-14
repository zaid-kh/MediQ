
import express from 'express';
 import {getSymptomAnalysis} from'../controllers/symptomController.js';

const router = express.Router();


router.post('/analyze', getSymptomAnalysis);


export default router;
