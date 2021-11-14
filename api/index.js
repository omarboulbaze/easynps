const express = require('express');
var mongoose = require('mongoose');

const app = express();

//dotenv
require('dotenv').config({path:'./../.env'});

const PORT = process.env.PORT || 8800;

//Avoiding cross origin security problems
const cors = require('cors');
app.use(cors());

//parsing to json type
app.use(express.json())

//Establishing a database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => {
    console.error(err);
  });

//Importing the exported model
const Review = require('./models/review');

app.post('/addReview/api',(req, res)=>
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

app.get('/api/', (req,res)=>
            {
            res.send(`<h1 style="background-color:blue">Hello World !</h1>`)
            }
        );
        

app.listen(PORT, ()=>{
   console.log(`Server started on ${PORT}...`)
})