import express from 'express';
import {serverLogger} from './middleware/middleware.js';
import router from './routes/test.routes.js';
import movieRoute from './routes/movies.routes.js';

const app = express();

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