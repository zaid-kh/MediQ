import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
// import { useRouter } from 'next/router';
import axios from 'axios';

const Answer = () => {
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState('english');
  const [results, setResults] = useState([]);
//   const router = useRouter();

  const handleFetchData = async () => {
    try {
      const response = await axios.post('https://mediq-service.onrender.com/api/symptoms/analyze', { prompt, language });
      const data = response.data.split('\n').filter(Boolean); 
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNavigate = () => {
    router.push('/chat');
  };

  return (
    <Paper>
      <Typography variant="h5" gutterBottom>
        ChatGPT Answer
      </Typography>
      <TextField
        label="Enter Prompt"
        variant="outlined"
        fullWidth
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <InputLabel id="language-label">Select Language</InputLabel>
      <Select
        labelId="language-label"
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        fullWidth
      >
        <MenuItem value="english">English</MenuItem>
        <MenuItem value="עברית">עברית</MenuItem>
        <MenuItem value="العربيه">العربيه</MenuItem>
      </Select>
      <Button variant="contained" color="primary" onClick={handleFetchData}>
        Fetch Answer
      </Button>
      {results.length > 0 && (
        <div>
          <Typography variant="body1">Symptoms:</Typography>
          <ol>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ol>
          <Button variant="contained" color="secondary" onClick={handleNavigate}>
            Go to Another Page
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default Answer;
