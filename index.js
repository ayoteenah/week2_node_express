require(`dotenv`).config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;


app.use(express.json());

app.use((req, res, next)  => {
  // Logs every request
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next(); // Pass to next handler (required!)
  });

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(`User ${id} profile!`);
});


app.post('/register', (req, res) => {
  const {name, email} = req.body;
  if(!name || !email) return res.status(400).json({error: "Missing fields"});
  res.status(200).json({message: `registered ${name} (${email})`});
});

app.listen(PORT, () => {
  console.log(`Live app listening on port ${PORT}`);
});