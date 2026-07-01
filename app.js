import express from 'express';
import path from 'path';
import { indexRouter } from './routes/indexRouter.js';
import { merchantRouter } from './routes/merchantRouter.js';


const app = express();
const PORT = process.env.PORT;
const assetsPath = path.join(import.meta.dirname, 'public');

app.set('views', path.join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/merchants', merchantRouter);

app.listen(PORT, err => {
    if(err) throw err;
    console.log(`Server listening on port ${PORT}`);
})