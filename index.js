import express from 'express';
import bodyParser from 'body-parser';

import userRouters from './routes/users.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Find all Users
app.use('/user', userRouters);

app.get('/',(req, res) => {
    console.log('[TEST]!');
    res.send("Hello Welcome to CRUD API's Integration. ")
})


app.unsubscribe(bodyParser.json());
app.listen(PORT, () => console.log(`Server running on prot :- https://localhost:${PORT}`));