const express = require( 'express');
const path = require('path');
const app = require('./src/app');
const PORT = process.env.PORT || 5000;

// Serve any static files
app.use(express.static(path.join(__dirname, 'build')));
  
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server Running in port ${PORT}`));
