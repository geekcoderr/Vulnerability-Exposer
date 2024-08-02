const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Use the CORS middleware
app.use(cors());

// Custom logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Serve the static HTML file
app.use(express.static('public'));

// API endpoint to fetch GitHub data
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get the port from command-line arguments or default to 3000
const port = parseInt(process.argv[2], 10) || 3000; 

if (isNaN(port) || port <= 0 || port > 65535) {
  console.error('Invalid port number. Please provide a port number between 1 and 65535.');
  process.exit(1); // Exit the process with an error code
}

app.listen(port,'0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${port}`);
});
