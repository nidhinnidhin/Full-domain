const express = require('express');
const cors = require('cors');
const app = express();

// Simple: use cors middleware
app.use(cors({
  origin: 'https://example.com', // allowed origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// OR handle preflight manually:
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://example.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(204); // no content
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Data sent successfully' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
