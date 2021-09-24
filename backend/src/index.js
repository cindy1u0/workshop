const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const data = [
  {
    name: "Cindy",
    role: "minion 1",
    age: 21,
    team: "graduate"
  },
  {
    name: "Iman",
    role: "minion 2",
    age: 21,
    team: "eboard"
  },
  {
    name: "Alex",
    role: "minion 3",
    age: 21,
    team: "oasis"
  },
]


app.get('/', (req, res) => res.send("Welcome to Cindy's jank practices"))

// Practice 1: get all the data to display
app.get('/data', (req, res) => {
  try {
    // TODO
    // template: res.status(...).send(...);
  } catch(e) {
    res.status(400).send(e);
  }  
})


// Practice 2: update an entry
app.post('/update-data', (req, res) => {
  try {
    // TODO
    // to get request body: req.body :)
    // use console.log(req.body) to check
    // send back modified data with res.status(...).send(...)
  } catch(e) {
    res.status(400).send(e);
  }  
})


// Practice 3: delete an entry
app.delete('/delete-data', (req, res) => {
  try {
    // TODO
    // to get request body: req.body :)
    // use console.log(req.body) to check
    // send back modified data with res.status(...).send(...)
  } catch(e) {
    res.status(400).send(e);
  }  
})

app.listen(port, () => console.log(`This app is listening at http://localhost:${port}`))