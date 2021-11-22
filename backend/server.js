import './config.js';
import express from 'express';
import db_config from './app/db_config.js';
import { paid_codes, premium_codes } from './codes.js';

const app = express();
const port = 3000;

// Parse application/json requests
app.use(express.json());

// Parse application/x-www-form-urlencoded requests
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  // You send any kind of reponse back to the client like..
  // .html, .js, .css files, etc.
  // Know more -> http://expressjs.com/en/5x/api.html#res.send

  // Here we're just sending a simple html element
  res.send("<h1>Hello World!</h1>");
});

// Connect to MongoDB using mongoose
db_config.mongoose.connect(db_config.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("There's an error", err);
    process.exit();
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})