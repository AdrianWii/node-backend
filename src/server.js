import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/api/hello', (req, res)=> {
    res.status(418).json({message: "Hello, from our API"});
});

app.listen(3000, () => {
    console.log("Server run on http://localhost:3000");
});