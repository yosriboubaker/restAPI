const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json()); 
const dotenv = require('dotenv');
dotenv.config({path:'./config/.env'})

mongoose.connect(
    (process.env.MONGO_URL),
    (err) => (err ? console.log(err) : console.log('database is connected')
    )
    );

    // ---- routes ---- bch nzid route l server
   app.use('/api/user', require('./routes/userRoutes'));


const port = process.env.PORT ;
app.listen(port, (err)=>err ? console.log(err) :console.log(`server is running on ${port}`))



