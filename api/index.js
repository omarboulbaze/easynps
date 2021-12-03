// Dotenv
require('dotenv').config({path:'./../.env'});


// Express.js
const express = require('express');
const app = express();
// Parsing to json type
app.use(express.json())
// Avoiding cross origin security problems
const cors = require('cors');
app.use(cors());

// Establishing a database connection
const mongoose = require('mongoose');
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

// Importing the exported models
const Review = require('./models/review');

// Adding a review to the database.
app.post('/api/addReview',(req, res)=>
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

// Checking if the user's code is already used or not before letting access the form.
app.post('/api/codeValid',(req, res)=>
    {
    const codes  = req.body;
    
    if(!codes.groupA || !codes.groupB || !codes.groupC ){
      res.status(401).send("The QR code you scanned is invalid. Please scan a valid code.")
    }else{
      Review.findOne({groupA : codes.groupA, groupB : codes.groupB, groupC : codes.groupC}).then( (data) => 
      {
      if(data){
        res.status(401).send("The QR code you scanned is invalid. Please scan a valid code.")
      }else{
        res.status(200).send("OK")
      }
          }
      );
  }
    }
    
);

// Returning all reviews that exists in the database.
app.get('/api/', (req,res)=>
            {
            Review.find({}, (err, data) =>{
              if(err) {
                console.log(err);
                res.status(500).send();
              } else {
              res.status(200).json(data);
              }
            })
            
            }
        );

const PORT = process.env.PORT || 8800;
app.listen(PORT, ()=>{
   console.log(`Server started on ${PORT}...`)
})