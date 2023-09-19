const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs'); // Require EJS module

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', __dirname + '/views'); // Set the views directory

const username = 'user';
const password = 'password';

app.get('/', (req, res) => {
  res.render('login'); // Render the login.ejs template
});

app.post('/login', (req, res) => {
  const { username: submittedUsername, password: submittedPassword } = req.body;

  if (submittedUsername === username && submittedPassword === password) {
    res.send('Login successful!');
  } else {
    // Render the login-failed.ejs template with the submitted values
    res.render('login-failed', {
      submittedUsername,
      submittedPassword,
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
