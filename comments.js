// Create web server
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// Create a route
app.get('/comments', (req, res) => {
  // Read the file
  fs.readFile('./comments.txt', 'utf8', (err, data) => {
    if (err) {
      res.send('Error reading file');
    } else {
      res.send(data);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

