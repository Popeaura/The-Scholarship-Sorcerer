/* server */
const express = require('express');
const app = express();
const port = 3000;


/*middleware to parse form data */


app.get('/', (req, res) => {
    res.send('Welcome to the Scholarship Sorcerer System!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
