import express from 'express';
import {serverLogger} from './middleware/middleware.js';
import router from './routes/test.routes.js';
import movieRoute from './routes/movies.routes.js';

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});


app.use(express.json()); //middleware
app.use(serverLogger);

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.use("/", router)
app.use("/", movieRoute)

app.listen(3000, () => {
    console.log("Server run on http://localhost:3000");
});