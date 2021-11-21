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

app.post('/api/codeValid',(req, res)=>
    {
    const codes  = req.body;
    
    Review.findOne({groupA : codes.groupA, groupB : codes.groupB, groupC : codes.groupC}).then( (data) => 
        {

        if(data){
          res.status(401).send("The QR code you scanned is invalid. Please scan a valid code.")
        }else{
          res.status(200).json({msg: "OK"})
        }
        
            }
        );
    }
);

app.get('/api/', (req,res)=>
            {
            Review.find({}, (err, data) =>{
              if(err) {
                console.log(err);
                res.status(500).send();
              } else {
              // res.status(201).send(data)
              res.status(200).json(data);
              }
            })
            
            }
        );



app.listen(PORT, ()=>{
   console.log(`Server started on ${PORT}...`)
})