import express from 'express';
import { Router } from 'express';

const app = express();
const port = 3000;

const users =[]

app.use(express.json)

app.post('/cadastro',(res,req) =>  {
    console.log(req)
    res.send('ok funcionou');}
);

app.get ('/cadastro', (req, res) => {
    res.send('ola');
});

 app.listen(port,() =>  {
console.log('server running on port ${port}');
});