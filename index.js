const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle Form Submission
app.post('/submit-application', (req, res) => {
    console.log('Form submission received!');


    // Log form data to the console
    const formData = req.body;
    console.log('Form Data Received:', formData);

    // Send a response back to the client
    res.send('Form submission successful! Check the console for the data.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
