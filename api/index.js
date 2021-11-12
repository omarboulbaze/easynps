const express = require('express');
var mongoose = require('mongoose');

const app = express();

//dotenv
require('dotenv').config({path:'./../.env'});

const PORT = process.env.PORT || 8800;

//avoiding cross origin security problems
const cors = require('cors');
app.use(cors());

//parsing to json type
app.use(express.json())


//Set up default mongoose connection
mongoose.connect(process.env.MONGODB , {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected!")
});

//importing the exported model
const Review = require('./models/review');

app.post('/addReview',(req, res)=>
    {
    console.log(req.body);

    const review = new Review(req.body);
    
    review.save( (err,data)=> 
        {
        if(err) return res.status(500).json(err);
                    
        res.status(201).json(data);
            }
        );
    }
);

app.get('/', (req,res)=>
            {
            res.send(`<h1 style="background-color:blue">Hello World !</h1>`)
            }
        );
        

app.listen(PORT, ()=>{
   console.log(`Server started on ${PORT}...`)
})