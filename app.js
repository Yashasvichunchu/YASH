const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from the current directory
app.use(express.static(path.join(__dirname)));

// Route to serve the main index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to serve pets.html
app.get('/pets', (req, res) => {
  res.sendFile(path.join(__dirname, 'pets.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

