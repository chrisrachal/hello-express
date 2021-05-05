// imports
const express = require('express');
const app = express(); // instance of the app

// Home route
app.get('/', function(req, res) {
    // access a database if needed
    // make some logic based off what is inside of request
    // access an API and return some data
    // send a response at the end
    res.send('Hello, World!');
});

app.get('/sei', (req, res) => {
    res.send('SEI 412');
});

// const PORT = 8000
// app.listen();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}B`);
});

// app.listen(8000, () => {
//     console.log('Server is listening on PORT 8000');
// });

// npm i -g nodemon   -g is to install nodemon globally
// control + c to stop the server
// npm start to rerun the server