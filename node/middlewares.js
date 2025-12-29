// All kind of middlewares

//1. Application level middleware

const express = require('express');
const app = express();


app.use((req, res, next) => {
     console.log('Application level middleware this will work for every requests only if we mont this globally ');
     next()
})

// 2. Router level middleware

const router = express.Router();

router.use((req, res, next) => {
    console.log('Router level middleware');
    next()
})

router.get('/users', (req, res) => res.send('User list'));
router.post('/users', (req, res) => res.send('User send to server'));

app.use('/api', router);

// 3. Built in middlewares

app.use(express.json());
app.use(express.urlencoded());

//4. Error handling middleware

app.use((req, res, err, next) => {
    if(err) throw err;
    console.log('Error handling middleware')
})


//5. Third party middleware

const morgan = require('morgan');
const helmet = require('helmet');

app.use(morgan('dev'));

app.use(helmet());