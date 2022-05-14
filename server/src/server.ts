
import cors from 'cors';
import express from 'express';

import { routes } from './routes';


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


// app.post('/feedbacks', (req, res) => {
//     console.log(req.body);
//     prisma.feedback.create({
//         data: {
//             type: req.body.type,
//             comment: req.body.comment,
//             screenshot: req.body.screenshot,
//        }
//     })

//     return res.send('Hello Mundo Bonito /feedbacks');} )



app.listen(3333, () => {
    console.log('Http server carregado!')
});

//sqlite
//prisma
