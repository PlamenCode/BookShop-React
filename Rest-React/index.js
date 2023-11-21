const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const trimBody = require('./middlewares/trimBody');
const cookieParser = require('cookie-parser');

const dataController = require('./controllers/dataController');
const cartController = require('./controllers/cartController');
const authController = require('./controllers/authController');

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/ReactDefance';

start();
async function start() {
    await mongoose.connect(CONNECTION_STRING);
    console.log('Database connected :)');

    const app = express();
    app.use(express.json());
    app.use(cookieParser('ReactDef'));
    app.use(cors());
    app.use(trimBody());

    app.use('/ReactDef/data', dataController);
    app.use('/ReactDef/cart', cartController);
    app.use('/ReactDef/auth', authController);


    app.get('*', (req, res) => {
        res.status(400).json({ message: 'Invalid Url' });
    })



    app.listen(4200, () => console.log('Rest server is listening on port 4200...'))
}