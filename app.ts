import express from 'express'
import bodyParser from 'body-parser';
import coursesRouter from './routes/courses-routes';


const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/courses', coursesRouter)

app.listen(PORT, () => {
  console.log('App started at ', PORT)
})
