import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    return res.send('hello NLW');
})

app.post('/test-post', (req, res) => {
    return res.send("hello post NLW");
})

app.listen(3000, () => console.log('Server is runnings'));